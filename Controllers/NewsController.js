News = require('../Models/News');
let date = new Date();

exports.create = (req, res) => {
    var news = new News();
    news.title = req.body.title;
	news.description = req.body.description;
	news.published = req.body.published;
	news.qrcode = req.body.qrcode;

    news.save((error, person) => {
		res.json({
			status: "success",
			message: 'New news created with success!',
			data: person,
        });
	});
};

exports.news = (req, res) => {
	News.find({}, (error, news) => {
		res.json(news);
	});
};