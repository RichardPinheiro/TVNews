let  mongoose = require('mongoose')

let backgroundSchema = mongoose.Schema({
    fileId: { type: String },
    exibitionRangeDate: {
        start: { type: Date },
        end: { type: Date },
    },
})

let Background = mongoose.model('background', backgroundSchema)

module.exports = Background;
