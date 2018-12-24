Person = require('../Models/Person');
let date = new Date();

exports.create = (req, res) => {
    var person = new Person();
    person.nickname = req.body.nickname;
	person.name = req.body.name;
	person.birthday = req.body.birthday;
	person.order = ((req.body.birthday.month.number * 100) + req.body.birthday.day);
	person.phone = req.body.phone;
	person.squad = req.body.squad;
	person.picture = req.body.picture;
	person.backgrounPicture = req.body.backgrounPicture;
	person.qrcode = req.body.qrcode;

    person.save((error, person) => {
		res.json({
			status: "success",
			message: 'New person created!',
			data: person,
        });
	});
};

exports.birthdaysOfDay = (req, res) => {
	Person.find({'birthday.day': date.getDate(), 'birthday.month.number': date.getMonth()+1}, (error, person) => {
		res.json(person);
	});
};

exports.othersBirthdays = (req, res) => {
	Person.find().where('order').lt((((date.getMonth()+1) * 100) + date.getDate())).limit(2).sort({ order: -1})
	.then((person) => {
		res.json({
			"previeus":	person
		});
	});
	Person.find().where('order').gt((((date.getMonth()+1) * 100) + date.getDate())).limit(2).sort({ order: 1})
	.then((person) => {
		res.json({
			"next": person
		});
	});
};