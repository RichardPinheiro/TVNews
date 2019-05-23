const moment = require('moment')
moment.locale('pt-BR')
const BackGroundService = require('./BackgroundService')
const PersonService = require('./PersonService')

const backGroundService = new BackGroundService()
const personService = new PersonService()

class ScreenService {
    async findTodayScreens() {
        try {
            let backgrounds = await backGroundService.findBackground()

            backgrounds = backgrounds.filter((bg) => {
                return moment(bg.exibitionRangeDate.start)
                    .isSameOrBefore(moment().set('h', 23).set('m', 59).set('s', 59)) &&
                    moment(bg.exibitionRangeDate.end)
                        .isSameOrAfter(moment().set('h', 0).set('m', 0).set('s', 0))
            })
            const people = await personService.findBirthdayOfDay()

            const screens = [...backgrounds, ...people]

            return screens
        } catch(error) {
            throw error
        }
    }
}

module.exports = ScreenService