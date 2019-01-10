const Phrases = require('../Models/Phrases')
class PhrasesRepository {
    savePhrases(phrases) {
        return phrases.save((error, phrases) => { return phrases })
    }
    
    findPhrases() {
        return Phrases.find()
    }
}

module.exports = PhrasesRepository