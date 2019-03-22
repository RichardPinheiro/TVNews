const PersonService = require('../Services/PersonService')
const personService = new PersonService()

exports.login = async (req, res) => {
	try {
		const userToken = await personService.login(req.body)
		res.json(userToken)
	} catch (e) {
		res.status(500).json(e)
	}
}

exports.create = async (req, res) => {
	try {
		const data = await personService.create(req)
		res.json(data)
	} catch (e) {
		res.status(500).json(e)
	}
	res.json()
}

exports.find = async (req, res) => {
	res.json(await personService.findPerson())
}

exports.deleteOne = async (req, res) => {
	res.json(await personService.deleteOnePerson(req.params.id, req.body))
}

exports.patch = async (req, res) => {
	res.json(await personService.updatePerson(req.params.id, req.body))
}

exports.birthdaysOfDay = async (req, res) => {
	res.json(await personService.findBirthdayOfDay())
}

exports.othersBirthdays = async (req, res) => {
	res.json(await personService.findOthersBirthdays())
}