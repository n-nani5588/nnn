const express = require('express');
const router = express.Router();

const Withdrawstatement= require('../../modals/WithdrawStatement');
const AdInfo = require('../../modals/AdInfo');
//user model
const User = require('../../modals/Users');





//==================================================================================================
//================================  STATEMENT ROUTES ===============================================
//==================================================================================================


//@rout get api/statement/withdraw
// Add withdraw statement
// @acess public
router.post('/withdraw', (req,res) => {

    console.log(req.body);

  function adInfoWiithdrawRequest(id){

    const w_statement= {

        Statement_ID: id.toString(),
        mainId: req.body._id,
        userId: req.body.userId,
        fname: req.body.fname,
        lname: req.body.lname,
        levelincome: req.body.level,
        autopool: req.body.auto,
        fundsharing: req.body.fund,
        recievedincome: req.body.recieve, 
        RequestedDate: new Date,
        Amount: req.body.Amount,
        BitAddress: req.body.Address,
        Status: "requested"


    }

    AdInfo.findByIdAndUpdate({_id: '5f3909d8e89b9e6578150dec'},{
        $push: { 
            withdrawRequests: w_statement
        }
    },{new: true}).then(res => {
        console.log(res);
    })
  }

    const withdrawStatement = new Withdrawstatement({

        mainId: req.body._id,
        levelIncome: req.body.level,
        autopoolIncome: req.body.auto,
        fundsharingIncome: req.body.fund,
        recievedIncome: req.body.recieve,
        userId: req.body.userId,
        Amount: req.body.Amount,
        BitAddress: req.body.Address,
        Status: "requested"

    })

    withdrawStatement.save()
    .then((res)=> {
        adInfoWiithdrawRequest(res._id);
        console.log("see me:",res);
    })
    .then(()=>{
        User.findByIdAndUpdate({_id: req.body._id},{
            $inc: {
                levelIncome: -parseFloat(req.body.level),
                autoPoolIncome:-parseFloat(req.body.auto),
                fundSharingIncome:-parseFloat( req.body.fund),
                recievedIncome:-parseFloat(req.body.recieve),
            }},{new:true})
              .then(user => {
                if(user){
                    res.json({status:1,user})
                }else{
                    res.json({status: 0})
                }
              });
    })
    .catch(err => console.log(err));

});

//@rout get api/statement/withdraw
// get withdraw statement
// @acess public
router.post('/withdrawStatementGet',(req,res)=>{

    console.log(req.body);

    Withdrawstatement.find({mainId: req.body._id}).then(user =>{
        console.log(user);
        if(user){
            res.json({status: 1, user})
        }else{
            res.json({status: 0})
        }
    })

});





module.exports = router;