let  mongoose = require('mongoose')

let personSchema = mongoose.Schema({
    nickname: { type: String, required: true },
    name: { type: String, required: true },
    birthday: { type: Object, required: true },
    order: { type: Number },
    phone: { type: String, required: true }, 
    squad: { type: String, required: true },
    picture: { type: String, required: true },
    backgrounPicture: { type: String, required: true },
    qrcode: { type: String, required: true }
})

let Person = module.exports = mongoose.model('person', personSchema)
module.exports.get = (callback, limit) => {
    Person.find(callback).limit(limit)
}