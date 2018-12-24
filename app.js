let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let routes = require("./routes/routes");
let port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/dbnwnews');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World with Nw News'));

app.use('/api', routes)

app.listen(port, () => {
    console.log("Running  on port " + port);
});