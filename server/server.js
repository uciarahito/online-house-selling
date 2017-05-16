const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

var index = require('./routes/index');

app.use(cors())

mongoose.connect('mongodb://localhost/house-selling');

// NOTE: set
app.set('port', process.env.PORT || 3000)

app.use(require('body-parser').urlencoded({
    extended: false
}));
app.use(require('body-parser').json());

app.use('/', index)

// NOTE: run
app.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'));
})