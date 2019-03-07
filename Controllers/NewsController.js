const NewsService = require('../Services/NewsService')
const newsService = new NewsService()

exports.create = (req, res) => {
	res.json(newsService.create(req, res))
}

exports.news = async (req, res) => {
	res.json(await newsService.findNews())
}

exports.deleteOne = async (req, res) => {
	res.json(await newsService.deleteOneNews(req.params.id))
}