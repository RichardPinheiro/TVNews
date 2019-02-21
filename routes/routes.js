const router = require('express').Router()
const personController = require('../Controllers/PersonController')
const newsController = require('../Controllers/NewsController')
const phrasesController = require('../Controllers/PhrasesController')

router.route('/person/save').post(personController.create)
router.route('/person').get(personController.find)
router.route('/person/:id').delete(personController.deleteOne)
router.route('/birthday/day').get(personController.birthdaysOfDay)
router.route('/birthday/others').get(personController.othersBirthdays)
router.route('/news/save').post(newsController.create)
router.route('/news').get(newsController.news)
router.route('/phrases/save').post(phrasesController.create)
router.route('/phrases').get(phrasesController.phrases)

module.exports = router