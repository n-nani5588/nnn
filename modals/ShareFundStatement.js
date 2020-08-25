const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

//create Schema
const FundSharingSchema = new newSchema({
    userId:{
        type: String,
        required: true,
        unique:true
    },
    mailId:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    },
    Date:{
        type: Date,
        default: Date.now()
    },
    Amount:{
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
})

module.exports = FundSharingStatement = mongoose.model('FundSharingStatement',FundSharingSchema);