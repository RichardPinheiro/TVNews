const PersonRepository = require('../Repositories/PersonRepository')
const Person = require('../Models/Person')
const personRepository = new PersonRepository()
let date = new Date()

class PersonService {
    create(req, res) {
        let person = new Person()
        person.nickname = req.body.nickname
        person.name = req.body.name
        person.birthday = req.body.birthday
        person.order = ((req.body.birthday.month.number * 100) + req.body.birthday.day)
        person.phone = req.body.phone
        person.squad = req.body.squad
        person.picture = req.body.picture
        person.backgrounPicture = req.body.backgrounPicture
        person.qrcode = req.body.qrcode
        personRepository.savePerson(person)

        return person
    }

    async findBirthdayOfDay() {
        try {
            return await personRepository.findBirthdayOfDay(date)
        } catch(error) {
            throw error
        }
    }

    async findOthersBirthdays() {
        try {
            let previusBirthdays = await personRepository.findPreviusBirthdays(this.getDefaultOrder())
            let nextBirthdays = await personRepository.findNextBirthdays(this.getDefaultOrder())

            if(!previusBirthdays.length) {
                previusBirthdays = await personRepository.findPreviusBirthdays(this.getOrderLessThan())
            }

            if(!nextBirthdays.length) {
                nextBirthdays = await personRepository.findNextBirthdays(this.getOrderGreaterThan())
            }

            return {
                previous: previusBirthdays,
                next: nextBirthdays
            }
        } catch(error) {
            throw error
        }
    }

    getOrderLessThan() {
        return ((12 * 100) + 31)
    }

    getOrderGreaterThan() {
        return ((1 * 100) + 1)
    }

    getDefaultOrder() {
        return (((date.getMonth()+1) * 100) + date.getDate())
    }

}

module.exports = PersonService