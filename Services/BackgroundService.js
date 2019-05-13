const BackgroundRepository = require('../Repositories/BackgroundRepository')
const Background = require('../Models/Background')
const FilesService = require('../Services/FilesService')
const Config = require('../Config')

const filesService = new FilesService()
const backgroundRepository = new BackgroundRepository()

const getUrlFromFileId = (fileId) => {
    if (fileId.toLowerCase().indexOf('https://') !== -1) return fileId
    return `${Config.appUrl}/api/files/${fileId}/serve`
}

class BackgroundService {
    async create({ fileId, exibitionRangeDate }) {
        if (!fileId) throw new Error('BadRequest - empty data')
        console.log(exibitionRangeDate)
        try {
            let background = new Background()
            background.fileId = fileId
            if (exibitionRangeDate) {
                background.exibitionRangeDate = exibitionRangeDate;
            }
            return backgroundRepository.saveBackground(background)
        } catch (e) {
            throw e
        }
    }

    async fillBackground(background) {
        const url = getUrlFromFileId(background.fileId)
        return Object.assign({}, background.toJSON(), {
            url,
        })
    }

    async findBackground() {
        try {
            const backgrounds = await backgroundRepository.findBackground()
            return Promise.all(backgrounds.map(this.fillBackground))
        } catch(error) {
            throw error
        }
    }
    
    async deleteOne(id) {
        try {
            return backgroundRepository.deleteOne(id)
        } catch(error) {
            throw error
        }
    }
}

module.exports = BackgroundService