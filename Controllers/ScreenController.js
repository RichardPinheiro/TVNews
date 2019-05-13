const ScreenService = require('../Services/ScreenService')
const screenService = new ScreenService()

exports.find = async (req, res) => {
	res.json(await screenService.findTodayScreens())
}
