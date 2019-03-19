let  mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator');

let personSchema = mongoose.Schema({
    nickname: { type: String, required: true },
    name: { type: String, required: true },
    user: { type: String, unique: true },
    password: { type: String },
    birthday: { type: Object, required: true },
    order: { type: Number },
    phone: { type: String, required: true }, 
    squad: { type: String, required: true },
    picture: { type: String },
    backgrounPicture: { type: String },
    qrcode: { type: String }
})

let Person = mongoose.model('person', personSchema)
module.exports = Person;

personSchema.plugin(uniqueValidator);
