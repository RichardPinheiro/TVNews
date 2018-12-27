const NewsRepository = require('../Repositories/NewsRepository');
const News = require('../Models/News')
const newsRepository = new NewsRepository();
const news = new News();

class NewsService {
    create(req, res) {
        news.title = req.body.title;
        news.description = req.body.description;
        news.published = req.body.published;
        news.qrcode = req.body.qrcode;
    
        return newsRepository.saveNews(news);
    }

    async findNews() {
        try {
            return await newsRepository.findNews();
        } catch(error) {
            throw error;
        }
    }

 
}

module.exports = NewsService;