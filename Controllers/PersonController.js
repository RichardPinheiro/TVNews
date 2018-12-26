const PersonService = require('../Services/PersonService')
const personService = new PersonService();

exports.create = (req, res) => {
	res.json(personService.create(req, res));
}

exports.birthdaysOfDay = async (req, res) => {
	res.json(await personService.findBirthdayOfDay());
}

exports.othersBirthdays = async (req, res) => {
	res.json(await personService.findOthersBirthdays());
}