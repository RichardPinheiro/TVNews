let mongoose = require('mongoose')

let phrasesSchema = mongoose.Schema({
    phrase: { type: String, required: true },
    author: { type: String, required: true }
})

let  Phrases = module.exports = mongoose.model('phrases', phrasesSchema)
module.exports.get = (callback, limit) => {
    Phrases.find(callback).limit(limit)
}