const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const routes = require("./routes/routes")
const Config = require('./Config')
const { name } = require('./package.json')

mongoose.connect(Config.connectDB, { useNewUrlParser: true })

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({ credentials: true, origin: Config.corsOrigins }))
app.options('*', cors({ credentials: true, origin: Config.corsOrigins }));
app.use(bodyParser.json())
app.use('/api', routes)

app.get('/', (req, res) => res.send('Hello World with Nw News Api'))

const server = app.listen(Config.port, () => {
    console.log(`${name} server running on ${Config.port}`)
})

const io = require('socket.io')(server);

io.on('connection', function(socket){
    socket.on('attTv', function(){
      io.emit('refresh', '');
    });
});