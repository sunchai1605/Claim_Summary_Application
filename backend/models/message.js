const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage', {
    empid : Number,
    name : String,
    claimno : String,
    claimtype : String,
    claimprogram : String,
    startdate: String,
    enddate: String
})
module.exports = { PostMessage }
