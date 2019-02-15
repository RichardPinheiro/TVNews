const Person = require('../Models/Person')
class PersonRepository {
    savePerson(person) {
        return person.save((error, person) => {
            return person
        })
    }
<<<<<<< HEAD

    findPerson() {
        return Person.find()
    }

    findBirthdayOfDay(date) {
        return Person.find().where('birthday.day').equals(date.getDate()).where('birthday.month.number').equals(date.getMonth()+1)
=======
    findBirthdayOfDay(day, month) {
        return Person.find().where('birthday.day').equals(day).where('birthday.month.number').equals(month)
>>>>>>> 1751834b1f85a96b4200be962f28855170f850c2
    }

   findPreviusBirthdays(getOrderLessThan) {
       return Person.find().where('order').lt(getOrderLessThan).limit(2).sort({order: -1})
    }
    
    findNextBirthdays(getOrderGreaterThan) {
        return Person.find().where('order').gt(getOrderGreaterThan).limit(2).sort({order: 1})
    }
}

module.exports = PersonRepository