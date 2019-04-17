const File = require('../Models/File')
class FilesRepository {
    async create(file) {
        return new Promise((resolve, reject) => {
            file.save((error, file) => {
                if (error) {
                    console.log(error)
                    reject(error)
                }
                resolve(file)    
            })
        });
    }
    
    async findFile(fileId) {
        return File.findOne({ _id: fileId })
    }

    async deleteOne(fileId) {
        return File.deleteOne({ _id: fileId })
    }
}

module.exports = FilesRepository
