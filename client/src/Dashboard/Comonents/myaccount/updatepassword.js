import React from 'react';
import './profile_component.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from 'axios'

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

class UpdatePassword extends React.Component {
  constructor(){
    super();
    this.userdetails = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
    this.state = {
      id:this.userdetails._id,
      viewpass: false,
      oldPassword: {
        value: "",
        valid: false
      },
      newPassword: {
        value: "",
        valid: false
      },
      confirm: {
        value: "",
        valid: false
      },
      
    }

  }
  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };

  handleViewPassword = () => {
    this.setState({
            viewpass: !this.state.viewpass
    })
  }

  handleSubmit = (e) => {
    
    e.preventDefault();
    
    if((e.target.newPassword.value).toString() === (e.target.confirm.value).toString()){
     
        axios.post('/api/users/changePassword',{
          id: this.state.id,
          newPassword: this.state.newPassword.value,
          oldPassword: this.state.oldPassword.value 
        }).then(res => {
          if(parseInt(res.data.status) === 1){
           const msg=  document.getElementById('Update_Msg');
           msg.innerHTML = "Update Succesfull !"
           msg.style.display = "block"
            interval = setTimeout(() => {
              msg.style.display = "none"
            }, 3000);


          }else{
            const msg=  document.getElementById('Update_Msg');
            msg.innerHTML = "Wrong password Entered !"
            msg.style.display = "block"
             interval = setTimeout(() => {
               msg.style.display = "none"
             }, 3000);
          }
        })
           
    }else{
          document.getElementById('emailHelp').innerHTML = "password not matched";
    }

  }

  componentWillUnmount(){
    clearTimeout(interval);
  }

handleConfirm = (e) => {
  if(e.target.value.toString() === this.state.newPassword.value.toString()){
    document.getElementById('emailHelp').innerHTML = "password matched";
    this.setState({confirm:{valid:true}})
  }else{
    document.getElementById('emailHelp').innerHTML = "password not matched";
    this.setState({confirm:{valid:false}})
  }
}
    render(){
      return(
        <div style={{margin:"0px",display:"flex",justifyContent:"center",padding:"100px 0px",backgroundColor:"#494949",color:"white"}}>
            
    
        <Container maxWidth="lg" >
            <Grid container spacing={3}>
   
              <div id="Update_Msg"  style={{
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
  
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={paper}>
                    <div style={{padding:"20px"}}>
                        <h3>Update Password</h3>
                        <div style={{border:"2px solid blue",margin:"30px 0px"}}>  </div>
                        <div >

          <form onSubmit={(e) => this.handleSubmit(e)}>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Old Password
              </label>
              <input
                value={this.state.oldPassword.value}
                className={this.state.oldPassword.valid ? "form-control is-valid" : "form-control is-invalid"}
                name="oldPassword"
                onChange={this.changeHandler}
                type={this.state.viewpass?"text":"password"}
                id="defaultFormRegisterNameEx"
                placeholder="Enter old password"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                New Password
              </label>
              <input
                value={this.state.newPassword.value}
                className={this.state.newPassword.valid ? "form-control is-valid" : "form-control is-invalid"}
                name="newPassword"
                onChange={this.changeHandler}
                type={this.state.viewpass?"text":"password"}
                id="defaultFormRegisterEmailEx2"
                placeholder="new password"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Confirm Password
              </label>
              <input
                
                className={this.state.confirm.valid ? "form-control is-valid" : "form-control is-invalid"}
                onChange={(e) => this.handleConfirm(e)}
                type={this.state.viewpass?"text":"password"}
                id="defaultFormRegisterConfirmEx3"
                name="confirm"
                placeholder="confirm password"
              />
              <small id="emailHelp"  className="form-text text-muted">
              
              </small>
            </MDBCol>
          </MDBRow>
         
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
            <button 
            className="btn btn-link"
            onMouseOver={() => this.handleViewPassword()}
            onMouseOut={() => this.handleViewPassword()}
            >view password 
            </button>
              
            </div>
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            Update
          </MDBBtn>
        </form>


                        </div>
                    </div>
                </Paper>
              </Grid>
            </Grid>


            <Box pt={4}>
              <Copyright />
            </Box>
            
          </Container>
         
         
        
      </div>
      )
    }
}

export default UpdatePassword;