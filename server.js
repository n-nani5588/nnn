const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const userRoute = require('./routes/api/users');
const adminRoute= require('./routes/api/admin');
const statementRoute = require('./routes/api/statementRoute');

//parser
app.use(express.json());

//DB Config
//const db = require('./config/Keys').mongoUri;



//use Routes
app.use('/api/users',userRoute);
app.use('/api/Admin',adminRoute);
app.use('/api/Statement',statementRoute);

//Connect to mongodb
mongoose.connect('mongodb+srv://Admin:Savechanges%40%40123@democluster.8nsdo.gcp.mongodb.net/Demobase?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongoose connected');
});
  const port = process.env.PORT || 5000;


  app.listen(port, ()=>{
      console.log(`server running at port ${port}`)
  })