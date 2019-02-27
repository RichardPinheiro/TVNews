let mongoose = require('mongoose')

let fileSchema = mongoose.Schema({
    contentType: { type: String, required: true },
    filename: { type: String, required: true },
    url: { type: String, required: true },
})

module.exports = mongoose.model('files', fileSchema)