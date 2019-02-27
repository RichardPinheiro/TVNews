const FilesRepository = require('../Repositories/FilesRepository')
const File = require('../Models/File')

const filesRepository = new FilesRepository()

class FilesService {
    async create(data) {
        let file = new File()
        file.contentType = data.contentType
        file.filename = data.filename
        file.url = data.buffer.toString('base64')
        return filesRepository.create(file)
    }

    async findFile(fileId) {
        try {
            return filesRepository.findFile(fileId)
        } catch(error) {
            throw error
        }
    }
}

module.exports = FilesService
