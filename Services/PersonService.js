const moment = require('moment')
const QRCode = require('qrcode')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const PersonRepository = require('../Repositories/PersonRepository')
const Person = require('../Models/Person')
const FilesService = require('../Services/FilesService')
const Config = require('../Config')

const filesService = new FilesService()
const personRepository = new PersonRepository()
const orderOfDecemberMonth = ((12 * 100) + 31)
const orderOfJenuaryMonth = ((1 * 100) + 1)

const getUrlFromFileId = (fileId) => {
    if (fileId.toLowerCase().indexOf('https://') !== -1) return fileId
    return `${Config.appUrl}/api/files/${fileId}/serve`
}

const generateQRCode = async (phone, nickname) => {
    try {
      return QRCode.toDataURL(`https://api.whatsapp.com/send?phone=${phone}&text=Parab%C3%A9ns,%20${nickname}`)
    } catch (err) {
      console.error(err)
      return ''
    }
  }

class PersonService {
    async login(data) {
        const user = data.user
        const password = data.password
        const cryptoPassword = crypto.createHash('sha1').update(password).digest('hex')
        const person = await personRepository.findOne({ user })
        if (person && person.password === cryptoPassword) {
            const token = jwt.sign({
                id: person._id,
                name: person.name,
            }, Config.secretKey)
            return { token, userData: { name: person.name } };
        }
        return new Error('Accesso negado')
    }

    async create(req) {
        let person = new Person()
        if (req.body.user && req.body.password) {
            person.user = req.body.user
            person.password = crypto.createHash('sha1').update(req.body.password).digest('hex')
        }
        person.nickname = req.body.nickname
        person.name = req.body.name
        person.birthday = req.body.birthday
        person.order = ((req.body.birthday.month.number * 100) + req.body.birthday.day)
        person.phone = req.body.phone
        person.squad = req.body.squad
        person.picture = req.body.picture
        person.backgrounPicture = req.body.backgrounPicture
        person.qrcode = req.body.qrcode
        return personRepository.savePerson(person)
    }

    async fillPerson(person) {
        const picture = getUrlFromFileId(person.picture)
        const backgrounPicture = getUrlFromFileId(person.backgrounPicture)
        const qrcode = await generateQRCode(person.phone, person.nickname)
        return Object.assign({}, person.toJSON(), {
            picture,
            backgrounPicture,
            qrcode,
        })
    }

    async findPerson() {
        try {
            const people = await personRepository.findPerson()
            return Promise.all(people.map(this.fillPerson))
        } catch(error) {
            throw error
        }
    }
    
    async deleteOnePerson(id) {
        try {
            return personRepository.deleteOnePerson(id)
        } catch(error) {
            throw error
        }
    }

    async updatePerson(id, data) {
        try {
            if(data.password){ 
                data.password = crypto.createHash('sha1').update(data.password).digest('hex')
            }
            return personRepository.updatePerson(id, data)
        } catch(error) {
            throw error
        }
    }

    async findBirthdayOfDay() {
        let date = new Date()
        try {
            let birthDays = await personRepository.findBirthdayOfDay(moment(date).date(), moment(date).month() +1)
            if(moment(date).day() === 5) {
                birthDays.push(...await personRepository.findBirthdayOfDay(moment(date).date() +1, moment(date).month() +1))
                birthDays.push(...await personRepository.findBirthdayOfDay(moment(date).date() +2, moment(date).month() +1))
            } 
            return Promise.all(birthDays.map(this.fillPerson))
        } catch(error) {
            throw error
        }
    }

    async findOthersBirthdays() {
        try {
            let previusBirthdays = await personRepository.findPreviusBirthdays(this.getDefaultOrder())
            let nextBirthdays = await personRepository.findNextBirthdays(this.getDefaultOrder())

            return {
                previous: await Promise.all(this.getPreviusBirthdays(previusBirthdays).sort().map(this.fillPerson)),
                next: await Promise.all(this.getNextBirthdays(nextBirthdays).map(this.fillPerson))
            }
        } catch(error) {
            throw error
        }
    }

    getPreviusBirthdays(previusBirthdays) {
        return previusBirthdays.length ? previusBirthdays : personRepository.findPreviusBirthdays(this.getOrderLessThan())
    }

    getNextBirthdays(nextBirthdays) {
        return nextBirthdays.length ? nextBirthdays : personRepository.findNextBirthdays(this.getOrderGreaterThan())
    }

    getOrderLessThan() {
        return orderOfDecemberMonth
    }

    getOrderGreaterThan() {
        return orderOfJenuaryMonth
    }

    getDefaultOrder() {
        return this.getCurrentMonthOrther()
    }

    getCurrentMonthOrther() {
        let date = new Date()
        return (((date.getMonth()+1) * 100) + date.getDate())
    }

}

module.exports = PersonService