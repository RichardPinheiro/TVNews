const News = require('../Models/News')
class NewsRepository {
    saveNews(news) {
        return news.save((error, news) => {
            return {
                status: "success",
                message: 'New news has created!',
                data: news,
            }
        })
    }
    
    findNews() {
        return News.find()
    }
}

module.exports = NewsRepository