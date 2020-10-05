import React from 'react';
import axios from 'axios';
import './admin.css'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={ 
            visible_Password:false,
        }
    }

    handleClick= ()=> {
        console.log("in_School");
        axios.post('/api/Admin/Auth',{
            _id: document.getElementById('Admin_select').value,
            Pass: document.getElementById('_Password').value
        }).then(res => {

                    if(parseInt(res.data.status) === parseInt(1)){
                        
                        document.getElementById('MSG_ERR').innerHTML = "Succesffunl!"
                        this.props.login();
                    }else{
                        document.getElementById('MSG_ERR').innerHTML = "Password Wrong !"
                    }

        })

    }

    render(){
        return(
            <div className="Main_div">

             
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    margin:"0px 20%"}}
                    >
                          <h1 style={{
                                color:"#564147",
                                fontWeight:700,
                                margin:"2%"
                        }}>Admin</h1>

                        <div id="MSG_ERR" style={{color:"#ccc"}}></div>

                    <select className="form-control Margin" id="Admin_select" >
                        <option value="5f7b0a8b3b4adfda64cffeac">Admin1</option>
                        <option value="5f7b0ac2e75bdd6fe8c6f978">Admin2</option>
                        <option value="5f7b0a9b4df4d4cb107ae0fb">Admin3</option>
                     
                    </select>

                    <input
                    type={this.state.visible_Password?"text":"password"}
                    className="form-control Margin"
                    id="_Password"
                    >

                    </input>
                    <div 
                     style={{color:"white",padding:"10px 10px"}}
                     onMouseOver={()=> this.setState({visible_Password:true})}
                     onMouseOut={()=> this.setState({visible_Password:false})}>
                    <i className="fa fa-eye"></i>
                     view Password
                    </div>
                    <button
                    className="btn btn-primary"
                    onClick={() => this.handleClick()}
                    >
                     
                      {"> "+" >>"}
                    </button>




                </div>


            </div>
        )
    }
}

export default Login;