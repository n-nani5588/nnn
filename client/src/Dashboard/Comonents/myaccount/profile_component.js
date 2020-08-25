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

class Profile extends React.Component {

  constructor(){
    super();
    this.state = {
      id:"",
      fname: {
        value: "",
        valid: false
      },
      lname: {
        value: "",
        valid: false
      },
      email: {
        value: "",
        valid: false
      },
      country: {
        value: "",
        valid: false
      },
      status: {
        value: "",
        valid: false
      }
    }

  }


  componentDidMount(){

     const userdata= JSON.parse(sessionStorage.getItem('USER_DETAILS'));
     this.setState({
       id:userdata._id,
       fname :{value: userdata.firstName,valid:userdata.firstName?true:false},
       lname: {value:userdata.lastName,valid:userdata.lastName?true:false},
       email: {value:userdata.mailId,valid:userdata.mailId?true:false},
       country: {value:userdata.country,valid:userdata.country?true:false},
       status: {value:userdata.Active.toLowerCase() == 'true' ? true : false,valid:userdata.Active.toLowerCase() == 'true' ? true : false}
     })

  }

  handleSubmit =(e)=> {

    e.preventDefault();

      axios.post('/api/users/profileUpdate',{
        id: this.state.id,
        firstName: this.state.fname.value,
        lastName: this.state.lname.value,
        mailId: this.state.email.value,
        country: document.getElementById('country-select').value
      }).then(res => { console.log(res.data);
        sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
        this.setState({
          fname :{value: res.data.userdetails.firstName,valid:res.data.userdetails.firstName?true:false},
          lname: {value:res.data.userdetails.lastName,valid:res.data.userdetails.lastName?true:false},
          email: {value:res.data.userdetails.mailId,valid:res.data.userdetails.mailId?true:false},
          country: {value:res.data.userdetails.country,valid:res.data.userdetails.country?true:false},
          status: {value:res.data.userdetails.Active.toLowerCase() == 'true' ? true : false ,valid:res.data.userdetails.Active.toLowerCase() == 'true' ? true : false}
        })
        document.getElementById('UPD_SG').innerHTML= "Update Successful !"
        document.getElementById('UPD_SG').style.display = "block"
       interval =   setTimeout(() => {
          document.getElementById('UPD_SG').innerHTML= " "
          document.getElementById('UPD_SG').style.display = "none"
        }, 3000);
      })
  }

  componentWillUnmount(){

    clearTimeout(interval);

  }
 
 
  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };

    render(){
      return(
        <div style={{margin:"0px",display:"flex",justifyContent:"center",padding:"100px 0px",backgroundColor:"#494949",color:"white"}}>
        
        <Container maxWidth="lg" >
            <Grid container spacing={3}>
      
            <div id="UPD_SG" style={{
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
                        <h3>Profile</h3>
                        <div style={{border:"2px solid blue",margin:"30px 0px"}}>  </div>
                        <div >

                         

      <form onSubmit={(e) => this.handleSubmit(e)}>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname.value}
                className={this.state.fname.valid ? "form-control is-valid" : "form-control is-invalid"}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname.value}
                className={this.state.lname.valid ? "form-control is-valid" : "form-control is-invalid"}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email.value}
                className={this.state.email.valid ? "form-control is-valid" : "form-control is-invalid"}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                name="email"
                placeholder="Your Email address"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Country
              </label>
              <select id="country-select"  className="browser-default custom-select ">
                        <option value={this.state.country.value}>{this.state.country.value}</option>
                        <option value="india">india</option>
                        <option value="japan">japan</option>
                        <option value="china">china</option>
              </select>
              {/* <input
                value={this.state.city.value}
                className={this.state.city.valid ? "form-control is-valid" : "form-control is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                name="city"
                placeholder="City"
                required
              /> */}
              <div className="invalid-feedback">
                Please provide a valid Country.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
           
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Status
              </label>
              <input
                value={this.state.status.value?"Active":"Inactive"}
                className={this.state.status.valid ? "form-control is-valid" : "form-control is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="status"
                disabled
               
              />
              <div className="invalid-feedback">
                Please Active your Account.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
         
      
          <MDBBtn color="primary" type="submit">
            Submit Form
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

export default Profile;