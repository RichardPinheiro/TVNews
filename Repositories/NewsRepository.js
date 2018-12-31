const News = require('../Models/News')
class NewsRepository {
    saveNews(news) {
        return news.save((error, news) => { return news })
    }
    
    findNews() {
        return News.find()
    }
}

module.exports = NewsRepository