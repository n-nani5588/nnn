const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const short = require('short-uuid');
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'gabe25@ethereal.email',
      pass: '8bvwaEjYrMUaTYyR3j'
  }
});

const message = {
  from: 'gabe25@ethereal.email', // Sender address
  to: '28f9e63369-2ba646@inbox.mailtrap.io',         // List of recipients
  subject: 'Design Your Model S | Tesla', // Subject line
  text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

//user model
const User = require('../../modals/Users');
//fundSharing model
const FundStatement= require('../../modals/FundStatement')
//Tickets
const Tickets = require('../../modals/CreateTickets');
//Fund Sharing
const FundSharing = require('../../modals/ShareFundStatement');


//Create Tickets
//@rout get api/users/CreateTickets
// Add Ticket
// @acess public
router.post('/CreateTickets', (req,res) => {

  console.log(req.body);

  const obj = 
  {
    msgid: req.body.msg_id,
    message: req.body.message
  }

  const Ticket = new Tickets({

  userId: req.body.userid,
  message: obj,
  Subject: req.body.subject,
  status: true,
  usermessage: true,
  adminmessage: false,

  })

  Ticket.save()
  .then(ticket => {
    if(ticket){res.json({status: 1, ticket})}
    else{res.json({status: 0})}
  })

});

//Create Tickets
//@rout get api/users/getTickets
// Add Ticket
// @acess public
router.get('/GetTickets/:id', (req,res) => {
  
  console.log(req.params.id);
  
  Tickets.find({userId: req.params.id})
  .sort({RequestedDate: 1})
  .then(Tickets => {
      console.log(Tickets);
      if(Tickets){
          res.json({status: 1, Tickets})
      }else{ res.json({status: 0})}
  })

});


//uuid generator 
function randomGenerator(){
  const uui = Math.floor(100000 + Math.random() * 900000)
  return "BTC"+uui
}

//@rout get api/users/getNews
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

//@rout get api/users/sendFund/id
// find one user
// @acess public
router.get('/sendFund/:id', (req,res) => {
  console.log(req.params.id);
  User.findOne({ userId: req.params.id })
  .select('-password')
    .then(user => {
      console.log(user);
      if(user){
        res.json({status:1,user})
      }else{
        res.json({status: 0})
      }
      
    });
});

///test ROute
router.post('/test', (req,res) => {

  const data = [{userID: 1,ReferedBy: "",  levelamount:"0.00" },
  {userID: 2, ReferedBy: 1,  levelamount:0.00, Active: "false" },
  {userID: 3, ReferedBy: 2,  levelamount:0.00, Active: "false" },
  {userID: 4, ReferedBy: 3,  levelamount:0.00, Active: "false" },
  {userID: 5, ReferedBy: 4,  levelamount:0.00, Active: "false" },
  {userID: 6, ReferedBy: 5,  levelamount:0.00, Active: "false" },
  {userID: 7, ReferedBy: 6,  levelamount:0.00, Active: "false" },
  {userID: 8, ReferedBy: 7,  levelamount:0.00, Active: "false" },
  {userID: 9, ReferedBy: 8,  levelamount:0.00, Active: "false" },
  {userID: 10,ReferedBy: 9,  levelamount:0.00, Active: "false" },
  {userID: 11,ReferedBy: 10,  levelamount:0.00, Active: "false" },
  {userID: 12,ReferedBy: 11,  levelamount:0.00, Active: "false" },
  {userID: 13,ReferedBy: 12,  levelamount:0.00, Active: "false" },
]

handleActivateUser(13)

  function handleActivateUser (user1){

    const user =  data.filter(user => 
    {if (user.userID === user1){
       user.Active = "true"
       return user
    } } )

    console.log("user:",user);
    let i = 0,ReferedBy1 = user[0].ReferedBy;
    console.log("line: 66",ReferedBy1);

  while (ReferedBy1 && i<10) {

      const userupdate = data.filter(user =>  {if(user.userID === ReferedBy1) {
        if(i===0){
          user.levelamount = user.levelamount + 5.0;
        }else{
          user.levelamount = user.levelamount + 0.2;
        }
      
        
        ReferedBy1 = user.ReferedBy;
        return user;
      } } )
     

      i++;
      console.log("i :",i);
      console.log("userupdate :",userupdate);
      console.log("line: 79",ReferedBy1);
    
  }

}

});

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


//@rout get api/users/Activate_account
// find one user
// @acess public
router.post('/Activate_account', (req,res) => {
  
  console.log(req.body);
 
  if(req.body.ActivatingId.toString() === req.body.shouldActivateUserId.toString()){

    console.log("inside:if:");

    User.findByIdAndUpdate({_id: req.body.ActivatingId},{
      $pull: { availablePins: req.body.pin } ,
      Active:true
    },{new: true}).then(
       user => {if(user){
        console.log(user); 
        res.json({status: 1 ,user});}else{res.json({status: 0});}}     
    )

  }else{


  User.findByIdAndUpdate({ _id: req.body.ActivatingId },{
   $pull: { availablePins: req.body.pin } 
  },{new:true})
  .select('-password')
  .then((user)=>{

    if(user){
      console.log("pin Remover :", user);
      //response
      res.json({status: 1 , user })
      //update Activate account
      User.findByIdAndUpdate({_id: req.body.shouldActivateUserId},{
        Active:true
     },{new: true}).then((user) =>{
             handleActivateUser(user.referedBy);
            console.log(user);
     } )

    }else{res.json({status: 0})}
  });

}

  //handle Active user
  function handleActivateUser (user1){

    let i = 0;
    let ReferedBy1 = user1;
    console.log("line: 66",ReferedBy1);

  while (ReferedBy1 && i<10) {

      if(i===0){
        
            User.findOneAndUpdate({userID: ReferedBy1},{
              $inc: { levelIncome : parseFloat(2)  }
            }).then(user => ReferedBy1 = user.ReferedBy)

      }else{

            User.findOneAndUpdate({userID: ReferedBy1},{
              $inc: { levelIncome : parseFloat(0.5)  }
            }).then(user => ReferedBy1 = user.ReferedBy)
      }

     

      i++;
      console.log("i :",i);
      console.log("userupdate :",userupdate);
      console.log("line: 79",ReferedBy1);
    
  }

}


});

//@rout get api/users/sendFund/update
// find one user
// @acess public
router.post('/sendFund/update', (req,res) => {
  console.log(req.body);
  // sendMnyTo:this.state.sendMnyTo,
  
  User.findByIdAndUpdate({ _id: req.body.sendMnyFrom },
    {$inc: {
      levelIncome: -parseFloat(req.body.levelamount),
      autoPoolIncome: -parseFloat(req.body.autoamount),
      fundSharingIncome: -parseFloat(req.body.fundamount),
      recievedIncome: -parseFloat(req.body.recievedamount),
  }},{new:true})
    .then(user => {
      if(user){

         //recieved details
    const fundSt = new FundStatement({
      Sendto: "-----",
      RecievedFrom: req.body.from,
      userId: req.body.sendMnyToDetails.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      mailId: user.mailId,
      Amount: req.body.total,
    })
    fundSt.save()
          res.send({status:1,user})

      }else{
        res.json({status: 0})
      }
      
    });

    //sentTo
    User.findByIdAndUpdate({ _id: req.body.sendMnyTo },
      {$inc: {
        levelIncome: parseFloat(req.body.levelamount),
        autoPoolIncome: parseFloat(req.body.autoamount),
        fundSharingIncome: parseFloat(req.body.fundamount),
        recievedIncome: parseFloat(req.body.recievedamount),
    }},{new:true}).then(res => console.log(res))
    //sender details
    const fundSt = new FundStatement({
      Sendto: req.body.sendMnyToDetails.userId,
      RecievedFrom:"-----",
      userId: req.body.from,
      firstName: req.body.sendMnyToDetails.firstName,
      lastName: req.body.sendMnyToDetails.lastName,
      mailId: req.body.sendMnyToDetails.mailId,
      Amount: req.body.total,
    })

   

    fundSt.save()
   

});

//@rout get api/users/sendFund/update
// find one user
// @acess public
router.post('/sendFund/pinWallet', (req,res) => {
  console.log(req.body);
  //  sendMnyTo:this.state.sendMnyTo,
  
  User.findByIdAndUpdate({ _id: req.body._id },
    {$inc: {
      levelIncome: -parseFloat(req.body.levelamount),
      autoPoolIncome:-parseFloat(req.body.autoamount),
      fundSharingIncome:-parseFloat(req.body.fundamount),
      recievedIncome:-parseFloat(req.body.recievedamount),
      pinBalance: req.body.pinBalance
  }},{new:true})
    .then(user => {
      if(user){
        console.log(user);

        const fundSt = new FundStatement({
          Sendto: "Pin Wallet",
          RecievedFrom: req.body.useid,
          userId: req.body.useid,
          firstName:user.firstName,
          lastName: user.lastName,
          mailId: user.mailId,
          Amount: (parseFloat(req.body.recievedamount)+parseFloat(req.body.fundamount)+parseFloat(req.body.autoamount)+parseFloat(req.body.levelamount)),
        })
    
        fundSt.save()

        res.send({status:1,user})

      }else{
        res.json({status: 0})
      }
      
    });

});

//@rout get api/users
// @desc get all users
// @acess public
router.get('/', (req,res) => {
   User.find()
     .then(users => res.json(users))
});

//@rout get api/users/Direct_Members
// @desc get all users
// @acess public
router.post('/Direct_Members', (req,res) => {
  console.log(req.body);
  User.find({referedBy: req.body.userid})
    .then(users => {
      console.log(users);
        if(users){
          res.json({status: 1 ,users})
        }
        else{
          res.json({ status:0 })
          console.log("not found");
        }
    })
});

//@rout get api/users/Direct_Members/GetFundSharing
// @desc get all users
// @acess public
router.post('/Fund_Statement', (req,res) => {
  console.log(req.body);
  FundStatement.find({userId: req.body.userid})
    .then(users => {
      console.log(users);
        if(users){
          res.json({status: 1 ,users})
        }
        else{
          res.json({ status:0 })
          console.log("not found");
        }
    })
});


//@rout get api/users/GetFundSharing
// @desc get all users
// @acess public
router.post('/GetFundSharing', (req,res) => {
  console.log(req.body);
  FundSharing.find({userId: req.body.userid})
    .then(users => {
      console.log(users);
        if(users){
          res.json({status: 1 ,users})
        }
        else{
          res.json({ status:0 })
          console.log("not found");
        }
    })
});

//@rout POST api/users/Signup
// @desc Add a users
// @access public
router.post('/Signup_User', (req,res) => {

  console.log(req.body);
 
    const newUser = new User({
            userId:  randomGenerator(),   
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            country: req.body.country,
             password: req.body.password,
             TransitionPassword:req.body.password,
            mailId: req.body.mailId,
            referedBy: req.body.referedBy,
            levelTeam:[],
             levelIncome: 9.50,
             autoPoolIncome: 9.00,
             fundSharingIncome: 0.00,
            recievedIncome: 0.00,
            availablePins:[],
            pinBalance: 0.00,
             bitAddress: "",
    })


   newUser.save()
   .then(user => {
     if(user){
        res.json({status:1})
     }
     else{
       res.json({status: 0})
     }
   })
   .catch(err => console.log(err));

 });

 //@rout POST api/users/login
// @desc login user
// @access public
router.post('/login', (req,res) => {
console.log(req.body);
  const userid = req.body.userid;
  const password = req.body.password;
 
  
  User.findOne({ userId: userid ,password :password })
   .select('-password')
   .then(user => 
    {
      console.log(user)
      if(user)
      {
          res.json({status:"200",msg:"Successfull",userdetails: user.toObject()})
          console.log("sucess");
      }
      else{
        res.json({status:"101",msg:"Wrong User id OR Wrong Password"})
        console.log("not user");
      }
    }
    )


});


 //@rout POST api/users/ForgotPassword
// @desc Add a users
// @access public
router.post('/ForgotPassword', (req,res) => {
  console.log(req.body);
    const userid = req.body.userid;
   
    
    User.findOne({ userId: userid ,mailId :req.body.mail })
     .then(user => 
      {
        console.log(user)
        if(user)
        {
          transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });
            res.json({status:"1"})
            console.log("sucess");
        }
        else{
          res.json({status:0})
          console.log("not user");
        }
      }
      )
  
  
  });

 //@rout POST api/users
// @desc Add a users
// @access public
router.post('/profileUpdate', (req,res) => {
  console.log(req.body);
    const userid = req.body.id;
   
    
    User.findByIdAndUpdate({ _id: userid},{
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      mailId:req.body.mailId,
      country:req.body.country
    },{new:true})
     .select('-password')
     .then(user => 
      {
        console.log(user)
        if(user)
        {
            res.json({status:"200",msg:"Successfull",userdetails: user.toObject()})
            console.log("sucess");
        }
        else{
          res.json({status:"101",msg:"User Does not exits"})
          console.log("not user");
        }
      }
      )
  
  
  });

 //@rout POST api/users/generatePin
// @desc Add a users
// @access public
router.post('/generatePin', (req,res) => {
  console.log(req.body);
    const userid = req.body._id;
   
    handlegeneratePin = (number,pinArray) => {

      let pins = pinArray;
     
    
      for (let i = 0; i < number; i++) {
        
        const key = short.generate()
        pins.push(key);
    
        
      }
      console.log(pins);
      return pins;
    
     }

    User.findOneAndUpdate({ _id: userid ,TransitionPassword: req.body._Password},{
      
      $inc:{pinBalance: -parseFloat(req.body.total)},
      availablePins: handlegeneratePin(req.body.quantity,req.body.pins)
      
    },{new:true})
     .select('-password')
     .then(user => 
      {
        console.log(user)
        if(user)
        {
            res.json({status:1,userdetails: user.toObject()})
            console.log("sucess");
        }
        else{
          res.json({status:0,msg:"User Does not exits"})
          console.log("not user");
        }
      }
      )
  
  
  });

//@rout POST api/users/Walletaddress
// @desc Add a users
// @access public
router.post('/walletAddress', (req,res) => {
  console.log(req.body);
   
   
    User.findOneAndUpdate({_id: req.body.id, TransitionPassword: req.body.oldPassword},{
      bitAddress: req.body.walletAddress
    },{new:true})
     .select('-password')
     .then(user => 
      {
        console.log(user)
        if(user)
        {
            res.json({status:1,userdetails: user.toObject()})
            console.log("sucess");
        }
        else{
          res.json({status:0})
          console.log("not user");
        }
      }
      )
  
  
  });

  //@rout update api/users/changePassword
// @desc delete a users
// @acess public
router.post('/changePassword', (req,res) => { 
  User.findOneAndUpdate({_id: req.body.id, password: req.body.oldPassword},{
    password: req.body.newPassword
  },{new:true})
  .select('-password')
  .then(item => {
      if(item){
        res.json({ status: 1  })
      }else{
        res.json({ status: 0 })
      }
  })
});


  //@rout update api/users/changeTansitionPassword
// @desc Update Transition password
// @acess public
router.post('/changeTransitionPassword', (req,res) => { 

  console.log(req.body);

  User.findOneAndUpdate({_id: req.body.id, password: req.body.oldPassword},{
    TransitionPassword: req.body.newPassword
  },{new:true})
  .select('-password')
  .then(item => {
      if(item){
        res.json({ status: 1  })
      }else{
        res.json({ status: 0 })
      }
  })
});

//@rout Delete api/users
// @desc delete a users
// @acess public
router.delete('/:id', (req,res) => {
    User.findById(req.params.id).then(item => 
        item.remove().then( ()=> res.json({sucess: true})))
        .catch(err => res.status(404).json({sucess: false}));
 });



module.exports = router;