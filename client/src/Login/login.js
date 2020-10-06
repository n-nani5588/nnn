import React ,{Component } from 'react';
import Button from '@material-ui/core/Button';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Action from '../actions/userActions';
import Loginfield from './loginfields';
import ForgotPassword from './ForgetPassword';


let interval;

 class Login extends Component{

  constructor(){
    super();
    this.state = {
      login :"",
      forgotpassword:false,
      Loading: false
    }
  }
  

  componentDidMount(){

    // Get the modal
     var modal = document.getElementById('id01');
     var window1 =document.getElementById("id02")
    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }else if (event.target == window1) {
        window1.style.display = "none"
      }
    }
  }

  handleLogin = () =>{
    console.log("logged in");
    
  }
  

submitLogin = async (e) => {

  e.preventDefault();

  this.setState({
    Loading : true
  })
 try{
          await axios.post('/api/users/login', { userid: e.target.login.value.toUpperCase() , password: e.target.password.value})
            .then(res => {
                      if(parseInt(res.data.status) === parseInt(200)){

                              console.log(res.data.userdetails);
                              sessionStorage.setItem('LOGIN',JSON.stringify(true));
                              sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                              this.setState({
                                Loading : false
                              })
                              window.location.reload()

                      }else if(parseInt(res.data.status) === parseInt(101)){
                                document.getElementById('ERR_MSG').innerHTML = res.data.msg

                                this.setState({
                                  Loading : false
                                })

                                interval = setTimeout(() => {
                                  document.getElementById('ERR_MSG').innerHTML = ""
                                }, 3000);

                                console.log(res.data.status);
                      }else{
                                document.getElementById('ERR_MSG').innerHTML = res.data.msg

                                this.setState({
                                  Loading : false
                                })
                                interval = setTimeout(() => {
                                  document.getElementById('ERR_MSG').innerHTML = ""
                                }, 3000);
                                console.log(res.data.status);
                      }
            })
            .catch(err => {
               console.log(" ");
               this.setState({ Loading: false })
            })
   
   }
   catch(err)
   {
       console.log(" ");
       this.setState({ Loading: false})
   }
      
}

handleforgot = ()=>{
  this.setState({
    forgotpassword:!this.state.forgotpassword
  })
}

componentWillUnmount(){
  clearTimeout(interval)
}

  render(){
    return(
      <div>
         <div style={{padding:"5px 0px 0px 0px ",color:"white"}} onClick={() => document.getElementById('id01').style.display='block'} color="inherit">LOGIN</div>
        <span id="login_id" onClick={() => this.handleLogin()}></span>
          {/* <!-- The Modal --> */}
          <div id="id01" className="modal">
          
          
            <span onClick={() => document.getElementById('id01').style.display='none'}
          className="close" title="Close Modal">&times;</span>

            {/* <!-- Modal Content --> */}
          
          
          {!this.state.forgotpassword &&  <Loginfield forgotpassword={() => this.handleforgot()} Loading={this.state.Loading} submitLogin={(e) => this.submitLogin(e)}></Loginfield>
  }

        {this.state.forgotpassword &&  <ForgotPassword forgotpassword1={() => this.handleforgot()}></ForgotPassword>
          }


            {/* <form className="modal-contentlogin animate body1" onSubmit={(e) => this.submitLogin(e)}>
             

              <div className="wrapper">
                  <div id="formContent"> */}
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    {/* <div className="fadeIn first">
                      <h2>Login</h2>
                    </div> */}

                    {/* <!-- Login Form --> */}
                      {/* <input type="text" required id="login" className="fadeIn second inputtext-type" name="login" placeholder="User ID" />
                      <input type="password" required id="password" className="fadeIn third inputtext-type" name="password" placeholder="Password" />
                      <input type="submit" className="fadeIn fourth Button-submit" value="Log In" />
                     */}

                    {/* <!-- Remind Passowrd --> */}
                      {/* <div id="ERR_MSG" style={{color:"white"}}>
                 
                      </div>
                      <div id="formFooter">
                      <a className="underlineHover" href="#">Forgot Password?</a>
                      </div>
                  </div>
                </div>
            </form> */}

          </div>

      </div>
    )
  }
}

export default Login;