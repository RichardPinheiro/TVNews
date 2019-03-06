const PhrasesRepository = require('../Repositories/PhrasesRepository')
const Phrases = require('../Models/Phrases')
const phrasesRepository = new PhrasesRepository()

class PhrasesService {
    create(req, res) {
        let phrases = new Phrases()
        phrases.phrase = req.body.phrase
        phrases.author = req.body.author
        phrasesRepository.savePhrases(phrases)

        return phrases
    }

    async findPhrases() {
        try {
            return await phrasesRepository.findPhrases()
        } catch(error) {
            throw error
        }
    }

    async deleteOnePhrases(id) {
        try {
            return phrasesRepository.deleteOnePhrases(id)
        } catch(error) {
            throw error
        }
    }

 
}

module.exports = PhrasesService