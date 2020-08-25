import React ,{Component } from 'react';
import './login.css';

 class Loginfields extends Component{

    constructor(props){
        super(props);
    }


  render(){
    return(
      <div>

            {/* <!-- Modal Content --> */}
            <form className="modal-contentlogin animate body1" onSubmit={(e) => this.props.submitLogin(e)}>
             

              <div className="wrapper">
                  <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                      <h2>Login</h2>
                    </div>

                    {/* <!-- Login Form --> */}
                      <input type="text" required id="login" className="fadeIn second inputtext-type" name="login" placeholder="User ID" />
                      <input type="password" required id="password" className="fadeIn third inputtext-type" name="password" placeholder="Password" />
                      <input type="submit" className="fadeIn fourth Button-submit" value="Log In" />
                    

                    {/* <!-- Remind Passowrd --> */}
                      <div id="ERR_MSG" style={{color:"white"}}>
                 
                      </div>
                      <div id="formFooter">
                      <a className="underlineHover" onClick={() => this.props.forgotpassword()} >Forgot Password?</a>
                      </div>
                  </div>
                </div>
            </form>
      </div>
    )
  }
}

export default Loginfields;