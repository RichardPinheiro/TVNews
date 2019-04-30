let  mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let personSchema = mongoose.Schema({
    nickname: { type: String, required: true },
    name: { type: String, required: true },
    user: {
        type: String,
        unique: true,
        partialFilterExpression: { user: { $type: 'string' } },
        default: null,
    },
    password: { type: String, default: null },
    birthday: {
        day: { type: Number, default: null },
        month: { type: Number, default: null }
    },
    order: { type: Number },
    phone: { type: String, required: true }, 
    squad: { type: String, required: true },
    picture: { type: String },
    backgrounPicture: { type: String },
    qrcode: { type: String }
})

// personSchema.plugin(uniqueValidator)

let Person = mongoose.model('person', personSchema)

module.exports = Person;
