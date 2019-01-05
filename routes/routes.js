let router = require('express').Router()
let personController = require('../Controllers/PersonController')
let newsController = require('../Controllers/NewsController')

router.route('/person/save').post(personController.create)
router.route('/birthday/day').get(personController.birthdaysOfDay)
router.route('/birthday/others').get(personController.othersBirthdays)
router.route('/news/save').post(newsController.create)
router.route('/news').get(newsController.news)

module.exports = router