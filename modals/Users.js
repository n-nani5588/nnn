const mongoose = require('mongoose');
const newSchema = mongoose.Schema;

//create Schema
const userSchema = new newSchema({
    userId:{
        type: String,
        required: true,
        unique:true
    },
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    TransitionPassword:{
        type:String,
        required: true
    },
    mailId:{
        type:String,
        required: true
    },
    referedBy:{
        type:String,
        required: true

    },
    country:{
        type:String,
        required:true
    },
    joiningDate:{
        type: Date,
        default: Date.now()
       
    },
    Active:{
        type: String,
        default: false
    },
    levelTeam:{
          type: Array,
          required: true
    },
    levelIncome:{
           type: mongoose.Schema.Types.Decimal128,
           required: true
    },
    autoPoolIncome:{
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    fundSharingIncome:{
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    recievedIncome:{
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    availablePins:{
        type: Array,
        required: true
    },
    pinBalance:{
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    bitAddress:String,


})

module.exports = Users = mongoose.model('Users',userSchema);