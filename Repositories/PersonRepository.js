const Person = require('../Models/Person')
class PersonRepository {
    savePerson(person) {
        return person.save((error, person) => { return person })
    }

    findPerson() {
        return Person.find()
    }

    findBirthdayOfDay(date) {
        return Person.find().where('birthday.day').equals(date.getDate()).where('birthday.month.number').equals(date.getMonth()+1)
    }

   findPreviusBirthdays(getOrderLessThan) {
       return Person.find().where('order').lt(getOrderLessThan).limit(2).sort({order: -1})
    }
    
    findNextBirthdays(getOrderGreaterThan) {
        return Person.find().where('order').gt(getOrderGreaterThan).limit(2).sort({order: 1})
    }
}

module.exports = PersonRepository