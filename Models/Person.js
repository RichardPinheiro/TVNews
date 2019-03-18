let  mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator');

let personSchema = mongoose.Schema({
    nickname: { type: String, required: true },
    name: { type: String, required: true },
    birthday: { type: Object, required: true },
    order: { type: Number },
    phone: { type: String, required: true }, 
    squad: { type: String, required: true },
    picture: { type: String },
    backgrounPicture: { type: String },
    qrcode: { type: String },
    user: { type: String, required: true, unique: true }, //TODO: verificar como tornar esse atributo "unique" (verificar mongoose)
    password: { type: String }
})

let Person = mongoose.model('person', personSchema)
module.exports = Person;

personSchema.plugin(uniqueValidator);
