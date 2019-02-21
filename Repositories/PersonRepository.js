const Person = require('../Models/Person')
class PersonRepository {
    savePerson(person) {
        return person.save((error, person) => {
            return person
        })
    }
   findPerson() {
        return Person.find()
    }
    deleteOnePerson(id) {
        return Person.deleteOne({ _id: id })
    }
    findBirthdayOfDay(day, month) {
        return Person.find().where('birthday.day').equals(day).where('birthday.month.number').equals(month)
    }

   findPreviusBirthdays(getOrderLessThan) {
       return Person.find().where('order').lt(getOrderLessThan).limit(2).sort({order: -1})
    }
    
    findNextBirthdays(getOrderGreaterThan) {
        return Person.find().where('order').gt(getOrderGreaterThan).limit(2).sort({order: 1})
    }
}

module.exports = PersonRepository