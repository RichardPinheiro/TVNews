const PersonRepository = require('../Repositories/PersonRepository');
const Person = require('../Models/Person')
const personRepository = new PersonRepository();
const person = new Person();
let date = new Date();

class PersonService {
    create(req, res) {
        person.nickname = req.body.nickname;
        person.name = req.body.name;
        person.birthday = req.body.birthday;
        person.order = ((req.body.birthday.month.number * 100) + req.body.birthday.day);
        person.phone = req.body.phone;
        person.squad = req.body.squad;
        person.picture = req.body.picture;
        person.backgrounPicture = req.body.backgrounPicture;
        person.qrcode = req.body.qrcode;
    
        return personRepository.savePerson(person);
    }

    async findBirthdayOfDay() {
        try {
            return await personRepository.findBirthdayOfDay(date);
        } catch(error) {
            throw error;
        }
    }

    async findOthersBirthdays() {
        try {
            let previusBirthdays = await personRepository.findPreviusBirthdays(this.getOrderLessThan());
            let nextBirthdays = await personRepository.findNextBirthdays(this.getOrderGreaterThan());
            return {
                previous: previusBirthdays,
                next: nextBirthdays
            }
        } catch(error) {
            throw error;
        }
    }

    getOrderLessThan() {
        if ((date.getMonth()+1) == 1 && date.getDate() == 1) {
            return ((12 * 100) + 31)
        }

        return this.getDefaultOrder()
    }

    getOrderGreaterThan() {
        if ((date.getMonth()+1) == 12 && date.getDate() == 31) {
            return ((1 * 100) + 1)
        }

        return this.getDefaultOrder()
    }

    getDefaultOrder() {
        return (((date.getMonth()+1) * 100) + date.getDate())
    }

}

module.exports = PersonService;