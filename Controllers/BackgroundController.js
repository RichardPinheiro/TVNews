const BackgroundService = require('../Services/BackgroundService')
const backgroundService = new BackgroundService()

exports.create = async (req, res) => {
	try {
		const data = await backgroundService.create(req.body)
		res.json(data)
	} catch (e) {
		res.status(500).json(e)
	}
	res.json()
}

exports.find = async (req, res) => {
	res.json(await backgroundService.findBackground())
}

exports.deleteOne = async (req, res) => {
	res.json(await backgroundService.deleteOne(req.params.id))
}
