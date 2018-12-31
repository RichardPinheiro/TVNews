const NewsRepository = require('../Repositories/NewsRepository')
const News = require('../Models/News')
const newsRepository = new NewsRepository()

class NewsService {
    create(req, res) {
        let news = new News()
        news.title = req.body.title
        news.description = req.body.description
        news.published = req.body.published
        news.qrcode = req.body.qrcode
        newsRepository.saveNews(news)

        return news
    }

    async findNews() {
        try {
            return await newsRepository.findNews()
        } catch(error) {
            throw error
        }
    }

 
}

module.exports = NewsService