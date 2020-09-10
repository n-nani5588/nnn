import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

let interval;

class SignupPart1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          password:"",
          confirmPassword:"",
          First_Name:"",
          Last_Name:"",
          _email:"",
     
        }
       }

    
  handlePassword = (e) => {
    this.setState({
      password:e.target.value
    })
  }

  confirmPassword = (e)=> {
    if(this.state.password === e.target.value){
      document.getElementById('Error_Msg').innerHTML = "password  Matched"
    }else {
      document.getElementById('Error_Msg').innerHTML = "password Not Matched"
    }
    this.setState({confirmPassword: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.Password.value, e.target.Confirm_Password.value);

    if((e.target.Password.value).toString() === (e.target.Confirm_Password.value).toString()){
     
      console.log(e.target);
      axios.post('/api/users/Signup_User',{ 
        firstName: e.target.First_Name.value,
        lastName:e.target.Last_Name.value,
        password: e.target.Password.value,
        mailId: e.target._Email.value,
        referedBy: e.target.Referal_Id.value,
        country:document.getElementById('country-select').value
      })
      .then(res => {
        console.log(res.data)
        if(parseInt(res.data.status) === parseInt(1)){
          document.getElementById('Error_Msg').innerHTML = "Sign up Successfull !"
          this.setState({
            password: "",
            confirmPassword:""
          })

          document.getElementById('First_Name').value = ""
          document.getElementById('Last_Name').value = ""
          document.getElementById('country-select').value = "india"
          document.getElementById('_email').value = ""
          document.getElementById('_password').value = ""
          document.getElementById('_confirmPassword').value = ""
          document.getElementById('_referalId').value = ""
          // document.getElementById('_referalName').value = ""

          this.props.changes(res.data.user)

        }else  if(parseInt(res.data.status) === parseInt(3)){
          document.getElementById('Error_Msg').innerHTML = "Enter Valid Referal ID !"
        }
        // this.props.onClick4()
      })
      .catch(err => console.log(err))
   
    }
    else{
      document.getElementById('Error_Msg').innerHTML = "password Not Match"

      interval = setTimeout(() => {
        document.getElementById('Error_Msg').innerHTML = " "
      }, 4000);

    }
  }


    render(){
        return(
            <div>
                  {/* <!-- Modal Content --> */}
            
            <form className="modal-contentSignup animate body1" onSubmit={(e) => this.handleSubmit(e)} >
             

             <div className="wrapper">
                 <div id="formContent">
                   {/* <!-- Tabs Titles --> */}

                   {/* <!-- Icon --> */}
                   <div className="fadeIn first">
                     <h2 className="h2_text ">Sign Up</h2>
                   </div>

                   {/* <!-- Login Form --> */}
                     <div style={{display:"flex",padding:"10px"}}>
                     
                     <input 
                     type="text" 
                     required 
                     id="First_Name" 
                     className="fadeIn first inputtext-type_Signup "
                     name="First_Name"
                     placeholder="Firstname"
                     >
                       
                    </input>
                     <input 
                     type="text" 
                     required 
                     id="Last_Name" 
                     className="fadeIn first inputtext-type_Signup" 
                     name="Last_Name" 
                     placeholder="Lastname" 
                     />

                     
                    
                     </div>
                     <select id="country-select" style={{margin:"5px",width:'93%'}} className="browser-default custom-select ">
                        
                        <option value="india">india</option>
                        <option value="japan">japan</option>
                        <option value="china">china</option>
                      </select>
                   
                     <input 
                     type="email" 
                     id="_email"
                     required 
                     className="fadeIn first inputtext-type_Signup" 
                     name="_Email"
                     placeholder="Email"
                     ></input>
                     
                     {/* <div className="Signup_Row">
                   
                     <input type="tel" id="First_Name" className="fadeIn first inputtext-type_Signup" name="First_Name" placeholder="Phone Number" />
                   
                     <input type="date" id="Last_Name" className="fadeIn first inputtext-type_Signup" name="Last_Name" placeholder="DOB" />
                  
                     </div> */}
                     <input 
                     type="password" 
                     required 
                     id="_password"
                     className="fadeIn first inputtext-type_Signup" 
                     value={this.state.password}
                     onChange={(e) => this.handlePassword(e)}
                     name="Password"
                     placeholder="Password"
                     ></input>

                    <input 
                     type="password" 
                     required 
                     id="_confirmPassword"
                     className="fadeIn first inputtext-type_Signup"
                     value={this.state.confirmPassword}
                     onChange={(e) => this.confirmPassword(e)}
                     name="Confirm_Password" 
                     placeholder="Confirm Password"
                     />
                     <span id="MsgError"></span>

                     <input 
                     type="text" 
                     required 
                     id="_referalId"
                     className="fadeIn first inputtext-type_Signup" 
                     name="Referal_Id"
                     placeholder="Referal Id"
                     >
                     </input>

                     {/* <input 
                     type="text" 
                     id="_referalName"
                     required 
                     disabled 
                     className="fadeIn first inputtext-type_Signup" 
                     placeholder="referal name"
                     ></input> */}
                    
                    <input 
                    type="submit" 
                    className="fadeIn fourth btn btn-primary" 
                    value="Sign Up" />
                   

                  {/* <!-- Remind Passowrd --> */}
                     
                     
                    
                  <div id="formFooter">
                     <a  href="#"><div id="Error_Msg" style={{color:"black"}}></div></a>
                     </div>

                 </div>
               </div>
           </form>

            </div>
        )
    }
}

export default SignupPart1;