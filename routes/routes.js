const router = require('express').Router()
const personController = require('../Controllers/PersonController')
const newsController = require('../Controllers/NewsController')
const phrasesController = require('../Controllers/PhrasesController')
const filesController = require('../Controllers/FilesController')

router.route('/person/save').post(personController.create)
router.route('/person').get(personController.find)
router.route('/person/:id').delete(personController.deleteOne)
router.route('/birthday/day').get(personController.birthdaysOfDay)
router.route('/birthday/others').get(personController.othersBirthdays)
router.route('/news/save').post(newsController.create)
router.route('/news').get(newsController.news)
router.route('/news/:id').delete(newsController.deleteOne)
router.route('/phrases/save').post(phrasesController.create)
router.route('/phrases').get(phrasesController.phrases)
router.route('/phrases/:id').delete(phrasesController.deleteOne)

router.route('/files/:fileId').get(filesController.get)
router.route('/files').post(filesController.create)
router.route('/files/:fileId/serve').get(filesController.serve)

module.exports = router