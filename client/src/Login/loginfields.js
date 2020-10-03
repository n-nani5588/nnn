import React ,{Component } from 'react';
import './login.css';
import Loader from 'react-loader-spinner';

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
                      <input type="text" pattern="[^' ']+" required id="login" className="fadeIn second inputtext-type" name="login" placeholder="User ID" />
                      <input type="password"  pattern="[^' ']+" required id="password" className="fadeIn third inputtext-type" name="password" placeholder="Password" />
                    
                      {/* <div className="fadeIn fourth" style={{width:"100%",justifyContent:"center",color:"white"}}>*spaces are not allowed</div> */}
                    
                      <button type="submit" disabled={this.props.Loading} className="fadeIn fourth Button-submit"  >

                      {this.props.Loading ? (<div> <Loader type="ThreeDots" color="#FFF" height={15} width={15} /></div>) : "Login"}
             
                      </button>
                    

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