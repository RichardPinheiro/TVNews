const PhrasesService = require('../Services/PhrasesService')
const phrasesService = new PhrasesService()

exports.create = (req, res) => {
	res.json(phrasesService.create(req, res))
}

exports.phrases = async (req, res) => {
	res.json(await phrasesService.findPhrases(req, res))
}

exports.deleteOne = async (req, res) => {
	res.json(await phrasesService.deleteOnePhrases(req.params.id))
}
