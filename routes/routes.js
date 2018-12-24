let router = require('express').Router();
let personController = require('../Controllers/PersonController');

router.route('/person/save').post(personController.create);
router.route('/birthday/day').get(personController.birthdaysOfDay);
router.route('/birthday/others').get(personController.othersBirthdays);

module.exports = router;