import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { MDBDataTable } from 'mdbreact';
import Axios from 'axios';
import short from 'short-uuid';
import Loader from 'react-loader-spinner';


const classes = makeStyles((theme) => ({
 
  container: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(4),
    },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
 

}));

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




class GeneratePin extends React.Component {



 constructor(){
   super();
   this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
   this.state = {
     passwordVisible:false,
     pinBalance:this.userdata.pinBalance.$numberDecimal,
     quantity:0,
     Total:0,
     multiplyWith:15,
     quantity1:0,
     Loading : false,
     LoadingTreasurePins: false,
   }

 }

 treasure= (e) =>{
   console.log(e.target.value);
   this.setState({
     multiplyWith: e.target.value
   })
 }

 changehandle= (e) => {

      this.setState({
             quantity: e.target.value,
      })

 }

 changehandle1= (e) => {
    console.log(e.target.value);
  this.setState({
         quantity1: e.target.value,
  })

}



 handleSubmit=  async (e)=> {

  e.preventDefault();

  this.setState({
    Loading: true
  })
  
  console.log(e.target._Quantity.value,e.target.Pin_Balance.value,e.target._Password.value);
      const total = (15*e.target._Quantity.value);
  console.log(total);
 
  try{
            if(parseInt(0) < parseInt(total)){

                  if( parseInt(total) <=  parseInt(e.target.Pin_Balance.value)){

                      await Axios.post('/api/users/generatePin',{

                          pins: this.userdata.availablePins,
                          quantity:e.target._Quantity.value,
                          _id: this.userdata._id,
                          _Password: e.target._Password.value,
                          total: total


                      }).then(res => {

                                if(parseInt(res.data.status) === parseInt(1)){

                                      sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                                      console.log(res.data.userdetails);
                                      this.setState({
                                        passwordVisible:false,
                                        pinBalance:res.data.userdetails.pinBalance.$numberDecimal,
                                        quantity:0,
                                        Total:0,
                                        Loading: false
                                      })
                                  
                                      document.getElementById('password_pin').value = ""
                                      console.log("success");
                                  
                                }else { 
                                  
                                        document.getElementById('ERR_MSG').innerHTML = "Wrong Password"
                                        this.setState({
                                            Loading: false
                                        })

                                }
                          
                      })
                      .catch(err => {
                        this.setState({
                          Loading: false
                      })
                      })

                  }else{
                  console.log("2");

                    document.getElementById('ERR_MSG').innerHTML = "Does not have Enough Balance to Buy!"
                    this.setState({
                      Loading: false
                  })
                  }

            }
            else{
              console.log("1");
                  document.getElementById('ERR_MSG').innerHTML = "invalid Amount"
                  this.setState({
                    Loading: false
                })
            }
    }
    catch(err)
    {
       console.log(" ");
       this.setState({
        Loading: false
        })
    }
 }

 handleTreasureSubmit = (e) => {

  e.preventDefault();
  this.setState({
    LoadingTreasurePins : true
  })
  
  try{
          console.log(e.target._Quantity1.value,e.target.Pin_Balance1.value,e.target._Password1.value);
          const selectvalue = document.getElementById('Select_Treasure').value
          const total = ((selectvalue)*(e.target._Quantity1.value))
          console.log(total);
        
          if(parseInt(0) < parseInt(total)){

                  if( parseInt(total) <=  parseInt(e.target.Pin_Balance1.value)){

                              Axios.post('/api/users/generateTreasurePin',{
                                
                                  quantity:e.target._Quantity1.value,
                                  _id: this.userdata._id,
                                  _Password: e.target._Password1.value,
                                  total: total,
                                  treasureValue:selectvalue,

                              })
                              .then(res => {

                                          if(parseInt(res.data.status) === parseInt(1)){

                                                      sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                                                      console.log(res.data.userdetails);
                                                      this.setState({
                                                        passwordVisible:false,
                                                        pinBalance:res.data.userdetails.pinBalance.$numberDecimal,
                                                        quantity1:0,
                                                        Total:0,
                                                        LoadingTreasurePins: false
                                                      })
                                                      document.getElementById('treasure_password').value = ""
                                                      console.log("success");

                                          }else { 

                                                document.getElementById('ERR_MSG1').innerHTML = "Wrong Password"
                                                this.setState({
                                                  LoadingTreasurePins: false
                                                })
                                                
                                          }
                                  
                              }).catch(err => {

                                    this.setState(
                                      {LoadingTreasurePins: false}
                                    )

                              })

                  }else{
                  console.log("2");

                    document.getElementById('ERR_MSG1').innerHTML = "Does not have Enough Balance to Buy!"
                    this.setState(
                      {LoadingTreasurePins: false}
                    )
                  }

          }
          else{
                console.log("1");
                    document.getElementById('ERR_MSG1').innerHTML = "invalid Amount"
                    this.setState(
                      {LoadingTreasurePins: false}
                    )
          }
    }
    catch(err)
    {
            this.setState(
              {LoadingTreasurePins: false}
            )
    }

 }

  render(){

    if(parseInt(this.state.pinBalance) > parseInt(0))
   {
          return(   <div style={{margin:"0px",padding:"2% 10%"}}>
    <div className="Send_Fund_Container">
            <div className="Send_Fund_header" >
               Generate Pins
            </div>
            <div className="Send_Fund_body">
              {/* Recent Orders */}
                        <Grid item xs={12}>
                        <Paper className={classes.paper} elevate={3}>
                        <div style={{padding:"3%"}}>
                    

                      <div >
                      <form onSubmit={(e)=> this.handleSubmit(e) }>
                          <div style={{display:"flex",flexDirection:"column",margin:"2%"}}>
                             <h2>Pin Balance:</h2>
                              <input className="form-control" name="Pin_Balance" readOnly value={this.state.pinBalance}></input>
                          </div>

                          <div style={{display:"flex",margin:"2%"}}>
                           
                             <input  className="form-control"  value="Quantity" disabled></input>
                            <input className="form-control" value={this.state.quantity} required name="_Quantity" min='0' max="1" type="number" onChange={(e)=> this.changehandle(e)}></input>
                          </div>
                         
                             

                          <div style={{display:"flex",margin:"2%"}}>
                           
                           <input  className="form-control" readOnly value="Transition Password" disabled></input>
                          <input className="form-control" id="password_pin" required name="_Password" type={this.state.passwordVisible?"text":"password"}  ></input>

                        </div>

                            <div>
                              
                            <p className="btn btn-link" 
                              onMouseOver={()=> this.setState({passwordVisible:true})}
                              onMouseOut={() => this.setState({passwordVisible:false})}>View Password</p>
                                 <h6>Total : {"$"+(15*this.state.quantity)}</h6>
                            </div>
                            <div id="ERR_MSG"></div>
                        <button
                        type="submit"
                        disabled={this.state.Loading}
                        className="btn btn-success"
                        >
                           {this.state.Loading ? (<div> <Loader type="ThreeDots" color="#FFF" height={30} width={30} /></div>) : "Generate Pin"}  
                        </button>
                    </form>
                      </div>

                        </div>
                        </Paper>
                        </Grid>
                    {/* </Grid> */}
                   
            </div>
  
            <div className="Send_Fund_Container">
            <div className="Send_Fund_header" >
               Generate Treasure pins
            </div>
    </div>
            
            <div className="Send_Fund_body">
              {/* Recent Orders */}
                        <Grid item xs={12}>
                        <Paper className={classes.paper} elevate={3}>
                        <div style={{padding:"3%"}}>
                    
                      <div >
                      <form onSubmit={(e)=> this.handleTreasureSubmit(e) }>
                          <div style={{display:"flex",flexDirection:"column",margin:"2%"}}>
                             <h2>Pin Balance:</h2>
                              <input className="form-control" name="Pin_Balance1" readOnly value={this.state.pinBalance}></input>
                          </div>

                          <div style={{display:"flex",margin:"2%"}}>
                                <input className="form-control" value="select Treasure" disabled></input>
                                <select onChange={(e) => this.treasure(e)} className="form-control" id="Select_Treasure">
                                  <option value="15">Rising-Treasure</option>
                                  <option value="30">Wonder-Treasure</option>
                                  <option value="50">Master-Treasure</option>
                                  <option value="100">Expert-Treasure</option>
                                  <option value="150">Billionaire-Treasure</option>
                                  <option value="200">Legend-Treasure</option>
                                  <option value="300">Fasttrack-Treasure</option>
                                  <option value="500">Diamond-Treasure</option>
                                  <option value="750">Double-Diamond-Treasure</option>
                                  <option value="1000">Triple-Diamond-Treasure</option>
                                </select>
                          </div>

                          <div style={{display:"flex",margin:"2%"}}>
                           
                             <input  className="form-control"  value="Quantity" disabled></input>
                            <input className="form-control" value={this.state.quantity1} required name="_Quantity1" min='0' max="1" type="number" onChange={(e)=> this.changehandle1(e)}></input>
                          </div>
                         
                             

                          <div style={{display:"flex",margin:"2%"}}>
                           
                           <input  className="form-control" readOnly value="Transition Password" disabled></input>
                          <input className="form-control" required id="treasure_password" name="_Password1" type={this.state.passwordVisible?"text":"password"}  ></input>

                        </div>

                       <div>
                              
                            <p className="btn btn-link" 
                              onMouseOver={()=> this.setState({passwordVisible:true})}
                              onMouseOut={() => this.setState({passwordVisible:false})}>View Password</p>
                                 <h6>Total : {"$"+(this.state.multiplyWith*this.state.quantity1)}</h6>
                            </div>
                            <div id="ERR_MSG1"></div>

                        <button
                        type="submit"
                        disabled={this.state.LoadingTreasurePins}
                        className="btn btn-success"
                        >
                           {this.state.LoadingTreasurePins ? (<div> <Loader type="ThreeDots" color="#FFF" height={30} width={30} /></div>) : "Generate Pin"}
                        </button>
                    </form>
                      </div>

                        </div>
                        </Paper>
                        </Grid>
                    {/* </Grid> */}
                    
            </div>
    
  
    </div>

    

</div>)
   }
   else
   {
    return(

      <div style={{ width: "100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"5%",
      color:"black",
      backgroundColor:"red"}}>

              Low Balance
          
      </div>

)
   }
  }
}

export default GeneratePin;