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
     Total:0
   }

 }

 changehandle= (e) => {

      this.setState({
             quantity: e.target.value,
      })

 }



 handleSubmit= (e)=> {

  e.preventDefault();
  
  console.log(e.target._Quantity.value,e.target.Pin_Balance.value,e.target._Password.value);
  const total = (15*e.target._Quantity.value);
  console.log(total);
 
  if(parseInt(0) < parseInt(total)){

    if( parseInt(total) <=  parseInt(e.target.Pin_Balance.value)){

         Axios.post('/api/users/generatePin',{

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
                Total:0
              })
             console.log("success");
              
            }else { 
              document.getElementById('ERR_MSG').innerHTML = "Wrong Password"

            }
            
         })

    }else{
    console.log("2");

      document.getElementById('ERR_MSG').innerHTML = "Does not have Enough Balance to Buy!"
    }

  }
  else{
    console.log("1");
        document.getElementById('ERR_MSG').innerHTML = "invalid Amount"
  }

 }

  render(){
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
                            <input className="form-control" value={this.state.quantity} required name="_Quantity" min='0' max="10" type="number" onChange={(e)=> this.changehandle(e)}></input>
                          </div>
                         
                             

                          <div style={{display:"flex",margin:"2%"}}>
                           
                           <input  className="form-control" readOnly value="Transition Password" disabled></input>
                          <input className="form-control" required name="_Password" type={this.state.passwordVisible?"text":"password"}  ></input>

                        </div>

                            <div>
                              
                            <p className="btn btn-link" 
                              onMouseOver={()=> this.setState({passwordVisible:true})}
                              onMouseOut={() => this.setState({passwordVisible:false})}>View Password</p>
                                 <h6>Total : {15*this.state.quantity}</h6>
                            </div>
                            <div id="ERR_MSG"></div>
                        <button
                        type="submit"
                        className="btn btn-success"
                        >
                          Generate Pin
                        </button>
                    </form>
                      </div>

                        </div>
                        </Paper>
                        </Grid>
                    {/* </Grid> */}
                    <Box pt={4}>
                        <Copyright />
                    </Box>
            </div>
    </div>
</div>)

  }
}

export default GeneratePin;