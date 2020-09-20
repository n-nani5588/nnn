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
      },
      Loading : false
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
    this.setState({
      Loading : true
    })

    try{

                axios.post('/api/users/profileUpdate',{
                  id: this.state.id,
                  firstName: this.state.fname.value,
                  lastName: this.state.lname.value,
                  mailId: this.state.email.value,
                  country: document.getElementById('country-select').value
               })
               .then(res => { 
                   
                  console.log(res.data)

                  if(parseInt(res.data.status) === parseInt(200))
                  {

                              sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                              this.setState({
                                Loading : false,
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


                  }
                  else
                  {
                              document.getElementById('UPD_SG').innerHTML= "Update UnSuccessful !"
                              document.getElementById('UPD_SG').style.display = "block"
            
                              interval =   setTimeout(() => {
                                document.getElementById('UPD_SG').innerHTML= " "
                                document.getElementById('UPD_SG').style.display = "none"
                              }, 3000);

                              this.setState({Loading : false})
                    
                  }

                
             
             
                 }).catch(err => {
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
//.replace(/^[a-zA-Z]+$/gi, "")
    render(){
      return(
        <div style={{margin:"0px",display:"flex",justifyContent:"center",padding:"100px 0px",backgroundColor:"#fffff",color:"white",textTransform:"uppercase"}}>
        
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
                pattern="^[a-zA-Z]+$"
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
                pattern="^[a-zA-Z]+$"
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
                        <option value="Afganistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bonaire">Bonaire</option>
                              <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                              <option value="Botswana">Botswana</option>
                              <option value="Brazil">Brazil</option>
                              <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Canary Islands">Canary Islands</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Cayman Islands">Cayman Islands</option>
                              <option value="Central African Republic">Central African Republic</option>
                              <option value="Chad">Chad</option>
                              <option value="Channel Islands">Channel Islands</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Christmas Island">Christmas Island</option>
                              <option value="Cocos Island">Cocos Island</option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Cook Islands">Cook Islands</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Cote DIvoire">Cote DIvoire</option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Curaco">Curacao</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">Czech Republic</option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">Dominican Republic</option>
                              <option value="East Timor">East Timor</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">Equatorial Guinea</option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Falkland Islands">Falkland Islands</option>
                              <option value="Faroe Islands">Faroe Islands</option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="French Guiana">French Guiana</option>
                              <option value="French Polynesia">French Polynesia</option>
                              <option value="French Southern Ter">French Southern Ter</option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Gibraltar">Gibraltar</option>
                              <option value="Great Britain">Great Britain</option>
                              <option value="Greece">Greece</option>
                              <option value="Greenland">Greenland</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadeloupe">Guadeloupe</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Hawaii">Hawaii</option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="India">India</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Isle of Man">Isle of Man</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option value="Korea North">Korea North</option>
                              <option value="Korea Sout">Korea South</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Laos">Laos</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libya">Libya</option>
                              <option value="Liechtenstein">Liechtenstein</option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macau">Macau</option>
                              <option value="Macedonia">Macedonia</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Marshall Islands">Marshall Islands</option>
                              <option value="Martinique">Martinique</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mayotte">Mayotte</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Midway Islands">Midway Islands</option>
                              <option value="Moldova">Moldova</option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montserrat">Montserrat</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Nambia">Nambia</option>
                              <option value="Nauru">Nauru</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherland Antilles">Netherland Antilles</option>
                              <option value="Netherlands">Netherlands (Holland, Europe)</option>
                              <option value="Nevis">Nevis</option>
                              <option value="New Caledonia">New Caledonia</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Niue">Niue</option>
                              <option value="Norfolk Island">Norfolk Island</option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau Island">Palau Island</option>
                              <option value="Palestine">Palestine</option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">Papua New Guinea</option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Phillipines">Philippines</option>
                              <option value="Pitcairn Island">Pitcairn Island</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Republic of Montenegro">Republic of Montenegro</option>
                              <option value="Republic of Serbia">Republic of Serbia</option>
                              <option value="Reunion">Reunion</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russia</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="St Barthelemy">St Barthelemy</option>
                              <option value="St Eustatius">St Eustatius</option>
                              <option value="St Helena">St Helena</option>
                              <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                              <option value="St Lucia">St Lucia</option>
                              <option value="St Maarten">St Maarten</option>
                              <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                              <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                              <option value="Saipan">Saipan</option>
                              <option value="Samoa">Samoa</option>
                              <option value="Samoa American">Samoa American</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra Leone">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon Islands">Solomon Islands</option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Spain">Spain</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syria">Syria</option>
                              <option value="Tahiti">Tahiti</option>
                              <option value="Taiwan">Taiwan</option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania">Tanzania</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Togo">Togo</option>
                              <option value="Tokelau">Tokelau</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Erimates">United Arab Emirates</option>
                              <option value="United States of America">United States of America</option>
                              <option value="Uraguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Vatican City State">Vatican City State</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                              <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                              <option value="Wake Island">Wake Island</option>
                              <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zaire">Zaire</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
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
         
      
          <MDBBtn color="primary" disabled={this.state.Loading} type="submit">
            {this.state.Loading ? (
            <div>
                Loading...
            </div>
            ) : "Submit Form" } 
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