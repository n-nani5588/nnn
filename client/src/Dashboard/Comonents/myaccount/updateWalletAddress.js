import React from 'react';
import './profile_component.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from 'axios';


import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

var interval;

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

 const paper = {
    padding: "5%",
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }

class UpdateWalletAddress extends React.Component {
  constructor(){
    super();
    this.userdetails = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
    this.state = {
      id:this.userdetails._id,
      viewpass: false,
      Address: {
        value: "",
        valid: false
      },
      Password: {
        value: "",
        valid: false
      },
      Loading : false,
      Err_message: "something",
      open: false,
     
    }

  }

  handleViewPassword = () => {
    this.setState({
            viewpass: !this.state.viewpass
    })
  }

  handleClose = () =>{
    this.setState({
      open: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ Loading : true })
    try{
            axios.post('/api/users/walletAddress',{
                id:this.state.id,
                walletAddress: e.target.Address.value,
                oldPassword: e.target.Password.value
            }).then(res => {

              if(parseInt(res.data.status) === 1){

                      sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                      // const msg=  document.getElementById('Update_Msg');
                      // msg.innerHTML = "Update Succesfull !"
                      // msg.style.display = "block"
                      // interval = setTimeout(() => {
                      //     msg.style.display = "none"
                      //   }, 3000);

                        this.setState({
                          Address : {value:"",valid:false},
                          Password: { value:"",valid:false},
                          Loading : false,
                          Err_message: "Update Succesfull !",
                          open: true,
                        })
                    
              }
              else
              {
                        // const msg=  document.getElementById('Update_Msg');
                        // msg.innerHTML = "Wrong password Entered !"
                        this.setState({
                          Loading : false,
                          Err_message: "Wrong password Entered !",
                          open: true,
                        })
                        // msg.style.display = "block"
                        // interval = setTimeout(() => {
                        //   msg.style.display = "none"
                        // }, 3000);
              }
            }).catch(res => {

              console.log(" ");
            
            })
            
       }
       catch(err)
       {
         console.log(" ");
       }

  }

  componentWillUnmount(){
    clearTimeout(interval);
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };

    render(){
      return(
        <div style={{margin:"0px",display:"flex",textTransform:"uppercase",justifyContent:"center",padding:"100px 0px",color:"white"}}>
            
    
        <Container maxWidth="lg" >
            <Grid container spacing={3}>
  
            <div id="Update_Msg"   style={{
              fontFamily:"sans-serif",
              fontWeight:"500",
              color:"green",
              display:"none",
              textAlign:"center",
              backgroundColor:"#ccc",
              borderRadius:"8px",
              padding:"10px 50px",
              margin:"5% 0%",
              width:"100%"
              }}>
            </div>
         
            <Snackbar
        
              autoHideDuration={3000}
              open={this.state.open}
              onClose={() => this.handleClose()}
              message={this.state.Err_message}
              action={
                <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={() => this.handleClose()}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>                         
              }
            />
            {/* News Report */}
            {/* <div>
              <Grid item xs={12}>
                
              </Grid>
            </div> */}
  
             
             
                       
              
                    
            
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid> */}
  
            
  
  
  
  
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={paper}>
                    <div style={{padding:"20px"}}>
                        <h3>Update Wallet Address</h3>
                        <div style={{border:"2px solid blue",margin:"30px 0px"}}>  </div>
                        <div >

         <form onSubmit={(e) => this.handleSubmit(e)}>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
               Wallet Address
              </label>
              <input
                value={this.state.Address.value}
                className={this.state.Address.valid ? "form-control is-valid" : "form-control is-invalid"}
                name="Address"
                pattern="[^' ']+"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                placeholder="WALLET ADDRESS"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Enter Transaction Password
              </label>
              <input
                value={this.state.Password.value}
                className={this.state.Password.valid ? "form-control is-valid" : "form-control is-invalid"}
                name="Password"
                pattern="[^' ']+"
                onChange={this.changeHandler}
                type={this.state.viewpass?"text":"password"}
                id="defaultFormRegisterEmailEx2"
                placeholder="ENTER TRANSACTION PASSWORD"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          
          </MDBRow>
          
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <button 
            className="btn btn-link"
            onMouseOver={() => this.handleViewPassword()}
            onMouseOut={() => this.handleViewPassword()}
            > show password</button>
          
            </div>
         
         
          <MDBBtn color="primary" disabled={this.state.Loading} type="submit">
          {this.state.Loading ? (
            <div>
                Loading...
            </div>
            ) : "update" } 
          </MDBBtn>
        </form>


                        </div>
                    </div>
                </Paper>
              </Grid>
            </Grid>


            {/* <Box pt={4}>
              <Copyright />
            </Box> */}
            
          </Container>
         
         
        
      </div>
      )
    }
}

export default UpdateWalletAddress;