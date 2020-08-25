const express = require('express');
const router = express.Router();

const Admin = require('../../modals/Admin');
const AdInfo = require('../../modals/AdInfo');
const Withdraw = require('../../modals/WithdrawStatement');
const Users = require('../../modals/Users');
const Tickets = require('../../modals/CreateTickets');
const FundsharingStatement = require('../../modals/ShareFundStatement');


//@rout get api/users/admin
// Add Admin
// @acess public
router.post('/', (req,res) => {

    const admin = new Admin({

        Pass: "@MakeiT@"

    })
    admin.save()
    .then(user => console.log(user))
    .catch(err => console.log(err));

});



//@rout get api/Admin/getTickets/UpdateMessage
// Add Ticket
// @acess public
router.get('/GetTickets', (req,res) => {
  
    
    Tickets.find()
    .sort({RequestedDate: 1})
    .then(Tickets => {
        console.log(Tickets);
        if(Tickets){
            res.json({status: 1, Tickets})
        }else{ res.json({status: 0})}
    })

})

//@rout get api/Admin/UpdateMessage
// Add Ticket
// @acess public
router.post('/UpdateMessage', (req,res) => {
  
    console.log(req.body);

    Tickets.findOneAndUpdate({
        _id: req.body._id
    },{
        $push: { message : req.body.message }
    },{new: true})
    .sort({RequestedDate: 1})
    .then(Tickets => {
        console.log(Tickets);
        if(Tickets){
            res.json({status: 1, Tickets})
        }else{ res.json({status: 0})}
    })

})

//@rout get api/Admin/getNews
// Add Admin
// @acess public
router.get('/getNews', (req,res) => {

    AdInfo.find()
    .select('news')
    .then(news => {
        console.log(news);
        if(news){
            res.json({status: 1, news})
        }else{ res.json({status: 0})}
    })

});

//@rout get api/Admin/UpdateNews
// Add Admin
// @acess public
router.post('/UpdateNews', (req,res) => {
console.log(req.body.news);
    AdInfo.findOneAndUpdate({_id : '5f3909d8e89b9e6578150dec' },{
        news: req.body.news
    },{new: true})
    .select('news')
    .then(news => {
        console.log(news);
        if(news){
            res.json({status: 1, news})
        }else{ res.json({status: 0})}
    })

});


//@rout get api/users/adinfo
// create info
// @acess public
router.post('/Adinfo', (req,res) => {

    console.log(req.body);

    const adinfo = new AdInfo({

        withdrawRequests:[],
        news:[],
        dashboardTable:[]

    })
    adinfo.save()
    .then(user => console.log(user))
    .catch(err => console.log(err));

});

//@rout get api/Admin/adinfo/withdraw
// get info withdraw
// @acess public
router.get('/Adinfo/withdraw', (req,res) => {

    console.log(req.body);

   AdInfo.findOne({_id: '5f3909d8e89b9e6578150dec'})
   .select('withdrawRequests')
   .then(request => {
        if(request){
            res.json({status: 1, request})
        }else{
            res.json({status: 0})
        }
   })

});

//@rout get api/Admin/getUserForPin
// get info withdraw
// @acess public
router.get('/getUserForPin/:id', (req,res) => {

    console.log(req.params.id);

    Users.findOne({ userId: req.params.id})
     .select('-password')
     .then(user => {
         if(user){
             res.json({status: 1, user})
         }else{
             res.json({status:0})
         }
     })
   


});


//@rout get api/Admin/sendPinToUser
// get info withdraw
// @acess public
router.post('/sendPinToUser', (req,res) => {
    console.log(req.body);
    const pin = req.body.pin
    console.log("pin",pin);
    Users.findByIdAndUpdate({_id: req.body._id},{
        $push: { 
            availablePins: pin
         }
        },{new:true}).then(user => {
        console.log(user);
        if(user){
            res.json({status: 1, user})
        }else{
            res.json({status: 0})
        }
    })

});

//@rout get api/Admin/getAllUserDatails
// get info withdraw
// @acess public
router.get('/getAllUserDetails',(req,res) => {

    Users.find().then(users => {
        if(users){
            res.json({status: 1,users});
        }else{
            res.json({status: 0});
        }
    })

})

//@rout get api/Admin/getTodayUserDetails/SendFundToUser
// get info daily
// @acess public
router.post('/getTodayUserDetails',(req,res) => {

    console.log(req.body);
    Users.find(
        {
          $or:
         [
           {
            joiningDate:
            { $gte: new Date(req.body.startDate), $lte: new Date(req.body.endDate) },
           },
           {
            joiningDate:
            { $gte: new Date(req.body.startDate), $lte: new Date(req.body.endDate).setDate(new Date(req.body.endDate).getDate() + 1) },
           },
         ],
        },
      )
      .then(users => {
        if(users){
            res.json({status: 1,users});
        }else{
            res.json({status: 0});
        }
    })

})

//@rout get api/Admin/SendFundToUser
// get info daily
// @acess public
router.post('/SendFundToUser',(req,res) => {

    console.log(req.body);

    Users.findOneAndUpdate({
        userId: req.body.userid
    },{
        $inc: { fundSharingIncome : parseFloat(req.body.fundamount) }
    },{new: true})
      .then(users => {
        if(users){

            const ShareFundStmnt = new FundsharingStatement({

                userId: req.body.userid,
                mailId:users.mailId,
                message: 'Hurray ! You have been Rewarded.',
                Amount: req.body.fundamount,
        
            })
            ShareFundStmnt.save();

            res.json({status: 1,users});
        }else{
            res.json({status: 0});
        }
    })

    



})



//@rout get api/statement/withdrawDone
// Update withdrawDone statement
// @acess public
router.post('/Adinfo/withdrawDone', (req,res) => {

    console.log(req.body);
    Withdraw.findByIdAndUpdate({_id: req.body.statement_id},{
        Status: "Done",
    })
    .then(() => {

        AdInfo.findOneAndUpdate(
            {_id: '5f3909d8e89b9e6578150dec' },
            { $pull: { withdrawRequests: { Statement_ID: req.body.statement_id } } },
            {new: true}
            ).then((staetment) => {
            console.log(staetment);
            res.json({status:1,staetment})
    
        })

    })

  

});

//@rout get api/users
// Admin auth
// @acess public
router.post('/Auth', (req,res) => {

    console.log(req.body);

    Admin.findOne({_id: req.body._id,Pass:req.body.Pass})
    .then(user => {
        if(user){
            console.log("user:",user);
            res.json({status: 1})
        }else
        {
            console.log("else:",user);
            res.json({status: 0})
        }
    })
   
  });

module.exports = router;