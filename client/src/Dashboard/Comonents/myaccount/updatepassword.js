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
      Loading : false,
      
    }

  }

  changeHandler = e => {
   
    this.setState({
      [e.target.name]:{ value : e.target.value , valid : !!e.target.value }
    })

    // const eed = e.target.value.toString()
    // const vsd = this.state.confirm.value.toString()

    // if( eed === vsd){

    //   document.getElementById('emailHelp').innerHTML = "password matched";
    //   this.setState({confirm:{valid:true}})

    // }
    // else
    // {

    //   document.getElementById('emailHelp').innerHTML = "password not matched";
    //   this.setState({confirm:{valid:false}})

    // }


  };

  handleViewPassword = () => {
    this.setState({
            viewpass: !this.state.viewpass
    })
  }

  handleSubmit = (e) => {
    
    e.preventDefault();
    this.setState({ Loading : true})
    
    if((e.target.newPassword.value).toString() === (e.target.confirm.value).toString()){

      try{
     
                axios.post('/api/users/changePassword',{
                  id: this.state.id,
                  newPassword: this.state.newPassword.value,
                  oldPassword: this.state.oldPassword.value 
                }).then(res => 
                  {
                  if(parseInt(res.data.status) === parseInt(1)){
                    
                    const msg=  document.getElementById('Update_Msg');

                    this.setState({
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
                    })
                    document.getElementById('emailHelp').innerHTML = " ";
                      msg.innerHTML = "Update Succesfull !"
                      msg.style.display = "block"
                        interval = setTimeout(() => {
                          msg.style.display = "none"
                        }, 3000);


                  }else{
                    const msg=  document.getElementById('Update_Msg');
                    
                    this.setState({
                    
                      Loading : false,
                    })

                    msg.innerHTML = "Wrong password Entered !"
                    msg.style.display = "block"
                    interval = setTimeout(() => {
                      msg.style.display = "none"
                    }, 3000);
                  }
               
                }) .catch(res => {
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
            confirm: {valid: false}
          })
    }

  }

  componentWillUnmount(){
    clearTimeout(interval);
  }

handleConfirm = (e) => {
  
  this.setState({ [e.target.name]: { value: e.target.value, valid: !!e.target.value } });

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
        <div style={{margin:"0px",display:"flex",justifyContent:"center",padding:"100px 0px",backgroundColor:"#fffff",color:"white",textTransform:"uppercase"}}>
            
    
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
                        <h3>UPDATE PASSWORD</h3>
                        <div style={{border:"2px solid blue",margin:"30px 0px",backgroundColor:"blue"}}>  </div>
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
                pattern="[^' ']+"
                name="oldPassword"
                onChange={(e) => this.setState({  oldPassword: { value: e.target.value, valid: !!e.target.value } })} 
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
                pattern="[^' ']+"
                name="newPassword"
                onChange={(e) => this.changeHandler(e)}
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
                pattern="[^' ']+"
                type={this.state.viewpass?"text":"password"}
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


         
            
          </Container>
         
         
        
      </div>
      )
    }
}

export default UpdatePassword;