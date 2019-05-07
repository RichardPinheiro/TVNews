const Person = require('../Models/Person')
class PersonRepository {
    async savePerson(person) {
        return new Promise((resolve, reject) => {
            person.save((error, person) => {
                if (error) {
                    console.log(error)
                    return reject(error)
                }
                return resolve(person)
            })
        });
    }
   findPerson() {
        return Person.find()
    }

    findOne(conditions) {
        return Person.findOne(conditions);
    }
    deleteOnePerson(id) {
        return Person.deleteOne({ _id: id })
    }

    findBirthdayOfDay(day, month) {
        return Person.find().where('birthday.day').equals(day).where('birthday.month').equals(month)
    }

    updatePerson(id, data) {
        return Person.findOneAndUpdate({_id: id}, data, {new: true, upsert: true})
    }

   findPreviusBirthdays(getOrderLessThan) {
       return Person.find().where('order').lt(getOrderLessThan).limit(2).sort({order: -1})
    }
    
    findNextBirthdays(getOrderGreaterThan) {
        return Person.find().where('order').gt(getOrderGreaterThan).limit(2).sort({order: 1})
    }
}

module.exports = PersonRepository