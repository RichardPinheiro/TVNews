const Background = require('../Models/Background')
class BackgroundRepository {
    async saveBackground(background) {
        return new Promise((resolve, reject) => {
            background.save((error, background) => {
                if (error) {
                    console.log(error)
                    return reject(error)
                }
                return resolve(background)
            })
        });
    }
    findBackground() {
        return Background.find()
    }

    findOne(conditions) {
        return Background.findOne(conditions);
    }
    deleteOne(id) {
        return Background.deleteOne({
            _id: id
        })
    }
}

module.exports = BackgroundRepository