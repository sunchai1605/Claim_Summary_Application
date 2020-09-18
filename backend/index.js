require('./db') //mongo db
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

var postMessageRouters = require('./controllers/postMessageController') //r

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.listen(4000,() => console.log('Server started at : 4000'))

app.use('/postMessages', postMessageRouters)