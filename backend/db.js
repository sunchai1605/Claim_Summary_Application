const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gayathri:gayathri@cluster0.hy6uv.mongodb.net/chai?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true },
err => {
    if(!err)
    console.log('Mongo DB connection success')
    else
    console.log('Mongo DB connection error')
})
