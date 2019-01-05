let mongoose = require('mongoose')

let newsSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    published: { type: Object, required: true },
    qrcode: { type: String }
})

let News = module.exports = mongoose.model('news', newsSchema)
module.exports.get = (callback, limit) => {
    News.find(callback).limit(limit)
}