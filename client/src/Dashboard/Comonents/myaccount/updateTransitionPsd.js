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

class UpdateTransitionPassword extends React.Component {
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
      Loading : false,
      
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
    this.setState({ Loading : true })
    
    if((e.target.newPassword.value).toString() === (e.target.confirm.value).toString()){
        
      try{
              axios.post('/api/users/changeTransitionPassword',{
                id: this.state.id,
                newPassword: this.state.newPassword.value,
                oldPassword: this.state.oldPassword.value 
              }).then(res => 
              {

                if(parseInt(res.data.status) === parseInt(1)){

                          const msg=  document.getElementById('Update_Msg');
                          msg.innerHTML = "Update Succesfull !"
                      
                          this.setState({
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
                            Loading : false
                          })
                        
                          msg.style.display = "block"
                            interval = setTimeout(() => {
                              msg.style.display = "none"
                            }, 3000);


                }else{

                          const msg=  document.getElementById('Update_Msg');
                          this.setState({
                            Loading : false
                          })
                          msg.innerHTML = "Wrong password Entered !"
                          msg.style.display = "block"
                          interval = setTimeout(() => {
                            msg.style.display = "none"
                          }, 3000);
                }
              
              }).catch(err => {

                  console.log(" ");
              
              })
     }
     catch(err)
     {
           console.log(" ");
     }
           
    }else{

          document.getElementById('emailHelp').innerHTML = "password not matched";
          this.setState({
            Loading : false,
            confirm: { valid : false }
          })

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
        <div style={{margin:"0px",display:"flex",justifyContent:"center",padding:"100px 0px",backgroundColor:"#ffffff",color:"white",textTransform:"uppercase"}}>
            
    
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
                        <h3>Update Transaction Password</h3>
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
                pattern="[^' ']+"
                onChange={this.changeHandler}
                type={this.state.viewpass?"text":"password"}
                id="defaultFormRegisterNameEx"
                placeholder="ENTER OLD PASSWORD"
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
                pattern="[^' ']+"
                onChange={this.changeHandler}
                type={this.state.viewpass?"text":"password"}
                id="defaultFormRegisterEmailEx2"
                placeholder="NEW PASSWORD"
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
                value={this.state.confirm.value}
                className={this.state.confirm.valid ? "form-control is-valid" : "form-control is-invalid"}
                onChange={(e) => this.handleConfirm(e)}
                type={this.state.viewpass?"text":"password"}
                pattern="[^' ']+"
                id="defaultFormRegisterConfirmEx3"
                name="confirm"
                placeholder="CONFIRM PASSWORD"
              />
              <small id="emailHelp"  className="form-text text-muted">
              
              </small>
            </MDBCol>
          </MDBRow>
         
         
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <button 
            type="button"
            className="btn btn-link"
            onMouseOver={() => this.handleViewPassword()}
            onMouseOut={() => this.handleViewPassword()}
            >show
            </button>
              
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


            <Box pt={4}>
              <Copyright />
            </Box>
            
          </Container>
         
         
        
      </div>
      )
    }
}

export default UpdateTransitionPassword;