let  mongoose = require('mongoose')

let backgroundSchema = mongoose.Schema({
    fileId: { type: String },
})

let Background = mongoose.model('background', backgroundSchema)

module.exports = Background;
