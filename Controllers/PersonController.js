const PersonService = require('../Services/PersonService')
const personService = new PersonService()

exports.create = async (req, res) => {
	res.json(await personService.create(req, res))
}

exports.find = async (req, res) => {
	res.json(await personService.findPerson())
}

exports.deleteOne = async (req, res) => {
	res.json(await personService.deleteOnePerson(req.params.id))
}

exports.birthdaysOfDay = async (req, res) => {
	res.json(await personService.findBirthdayOfDay())
}

exports.othersBirthdays = async (req, res) => {
	res.json(await personService.findOthersBirthdays())
}