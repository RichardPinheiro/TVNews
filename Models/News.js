var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    published: { type: Object, required: true },
    qrcode: { type: String }
});

var News = module.exports = mongoose.model('news', newsSchema);
module.exports.get = (callback, limit) => {
    News.find(callback).limit(limit);
}