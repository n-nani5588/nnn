import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './deposit.css';
import Axios from 'axios';


class  DirectDeposit extends React.Component {

    constructor(){
        super();
        this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
        this.state = {
            QrImage : "",
            _bitAddress : "",
            _Amount : "" ,
            _hashCode :"",
            _transactionPassword : ""
        }
    }

    componentDidMount(){
        
        Axios.get('/api/Admin/getNews')
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){
                console.log(res.data.news);
                this.setState({ 
                    QrImage : res.data.news[0].QRimage[0].img,
                    _bitAddress : res.data.news[0].QRimage[0].btcAddress
                })
                console.log(this.state.currentNews);
            }
        })
        
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }

    handleFormSubmit = (e) => {

        e.preventDefault()

        Axios.post('/api/users/SubmitDeposit',{

            amount : e.target._Amount.value,
            sendtobtcaddress : e.target._bitAddress.value,
            hashcode : e.target._hashCode.value,
            userid : this.userdata.userId,
            name : this.userdata.firstName+" "+ this.userdata.lastName,
            transactionPassword : e.target._transactionPassword.value,
            
        }).then(res => {
            if(parseInt(res.data.status) === parseInt(1))
            {
                    this.setState({

                        _Amount : "" ,
                        _hashCode :"",
                        _transactionPassword : ""
                        

                    })
            }
            else
            {
                   document.getElementById('Msg_disp').innerHTML = "Update Successful"
            }
        })

    }

    render(){
        return(
            <div style={{margin:"0px",padding:"2% 5%"}}>
                <div className="Send_Fund_Container_deposit">
    
                    <div className="Send_Fund_header_deposit" >
                        Deposit
                    </div>
    
                    <div id="Msg_disp">

                    </div>

                       <div className="Send_Fund_body_deposit">
                           <Grid  container xs={12} spacing={2}>
                                <div className="Send_Fund_body_ID_deposit" >
                                    <form onSubmit={(e) => this.handleFormSubmit(e)}>
                                           <Grid item xs={12} >

                                                <label>Amount :</label>
                                                <input type="text" name="_Amount" 
                                                required
                                                value={this.state._Amount}
                                                onChange={(e) => this.handleChange(e)}
                                                className="form-control"></input>

                                                <div style={{width:"100%",display:"flex",justifyContent:"center",margin:"1% 0%"}}>
                                                <img src={this.state.QrImage} style={{height:"50%",width:"50%"}}></img>
                                                </div>

                                                
                                                <label>BTC Address :</label>
                                                <input type="text" name="_bitAddress" value={this.state._bitAddress}
                                                disabled
                                                className="form-control"></input>

                                                
                                                <label>Enter Hash Code :</label>
                                                <input type="text" name="_hashCode" 
                                                required
                                                value={this.state._hashCode}
                                                onChange={(e) => this.handleChange(e)}
                                                className="form-control"></input>
 
                                                
                                                <label>Transaction Password :</label>
                                                <input type="password" name="_transactionPassword"
                                                required 
                                                value={this.state._transactionPassword}
                                                onChange={(e) => this.handleChange(e)}
                                                className="form-control"></input>
                                                                                                
                                            </Grid>
                                            <div className="Send_Fund_body_Total_deposit">
    
                                                <button type="submit" className="btn btn-success" >Deposit</button>
                                            </div>
                                        </form>    
                                </div>
                               
                           </Grid>
                          
                       </div>
    
    
               </div>
            </div>
          
          )
    }
}

export default DirectDeposit;