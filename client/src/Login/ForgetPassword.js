import React from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';

class ForgotPassword extends React.Component {

    constructor(){
        super();
        this.state = {
            userid:"",
            mail:"",
            Loading: false
        }
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault();

        this.setState({
            Loading: true
        })

            Axios.post('/api/users/ForgotPassword',{
                userid: e.target.userid.value,
                mail: e.target.mail.value
            })
            .then(res => {
                console.log(res.data);
                if(parseInt(res.data.status) === parseInt(1) ){
                    document.getElementById('ERR_MSG').innerHTML = "MAIL SENT"
                    this.setState({
                        mail:"",
                        userid:"",
                        Loading: false
                    })
                }else{
                    document.getElementById('ERR_MSG').innerHTML = "Invalid User Id"
                    this.setState({
                        Loading: false
                    })
                }

            });

      

    }


    render(){
        return(
            <div>

           <div className="wrapper">
                  <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                        {/* <!-- Icon --> */}
                        <div className="fadeIn first">
                        <h2>Forgot Password</h2>
                        </div>

                      {/* <!-- Login Form --> */}
                      <form onSubmit={
                          (e) => this.handleSubmit(e)
                      }>
                      <input type="text" onChange={(e) => this.handleChange(e)} required value={this.state.userid} className="fadeIn form-control second inputtext-type" name="userid" placeholder="Enter User Id" />
                      <input type="email" onChange={(e) => this.handleChange(e)} required className="form-control fadeIn second inputtext-type" value={this.state.mail} name="mail" placeholder="Enter Mail"></input>
                      <button type="submit" disabled={this.state.Loading} className="fadeIn fourth Button-submit">
                         
                              {this.state.Loading ? (<div> <Loader type="ThreeDots" color="#FFF" height={15} width={15} /></div>) : "send mail"}
                      </button>
                      </form>
                    

                    {/* <!-- Remind Passowrd --> */}
                      <div id="ERR_MSG" style={{color:"white"}}>
                 
                      </div>
                      <div id="formFooter">
                      <a className="underlineHover" onClick={() => this.props.forgotpassword1()} > Back</a>
                      </div>
                  </div>
                </div>
            

            </div>
        )
    }
}
export default ForgotPassword;