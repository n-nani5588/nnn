import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './deposit.css';
import Axios from 'axios';
import Loader from 'react-loader-spinner';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class  DirectDeposit extends React.Component {

    constructor(){
        super();
        this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
        this.state = {
            QrImage : "",
            _bitAddress : "",
            _Amount : "" ,
            _hashCode :"",
            _transactionPassword : "",
            Loading : false,
            Loading_btn : false,
            Err_message: "something",
            open: false,
        }
    }

    componentDidMount(){
        
        this.setState({
            Loading : true
        })

        Axios.get('/api/Admin/getNews')
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){
                console.log(res.data.news);
                this.setState({ 
                    QrImage : res.data.news[0].QRimage[0].img,
                    _bitAddress : res.data.news[0].QRimage[0].btcAddress,
                    Loading: false
                })
                console.log(this.state.currentNews);
            }else{
                this.setState({
                    Loading: false
                })
            }
        })
        
    }
    
    handleClose = () =>{
        this.setState({
          open: false
        })
      }

    handleChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }

    handleFormSubmit = (e) => {

        this.setState({
            Loading_btn : true
        })

        e.preventDefault()

        try{

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
                                        _transactionPassword : "",
                                        Loading_btn: false,
                                        Err_message : "Deposit Request Sent !",
                                        open : true, 

                                    })
                                //    document.getElementById('Msg_disp').innerHTML = "Update Successful"
                            }
                            else
                            {
                                //    document.getElementById('Msg_disp').innerHTML = "Wrong Password !!"
                                    this.setState({
                                        Loading_btn : false,
                                        Err_message : "Wrong Password !",
                                        open : true, 
                                    })
                            }
                        }).catch(err => {

                                    this.setState({
                                        Loading_btn : false
                                    })

                        })
            }
            catch(err)
            {
                        this.setState({
                            Loading_btn : false
                        })
            }

    }

    render(){

        if(this.state.Loading)
        {
            return(
                <div style={{margin:"0px",padding:"0px",backgroundColor:"#fff",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                     
                     <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      
                </div>
              )

        }
        else
        {
        return(
            <div style={{margin:"0px",padding:"2% 5%"}}>
                <div className="Send_Fund_Container_deposit">
    
                    <div className="Send_Fund_header_deposit" >
                        Deposit
                    </div>
    
                    <div id="Msg_disp">

                    </div>
                    <Snackbar
        
                    autoHideDuration={3000}
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    message={this.state.Err_message}
                    action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={() => this.handleClose()}>
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>                         
                    }
                />

                       <div className="Send_Fund_body_deposit">
                           <Grid  container xs={12} spacing={2}>
                                <div className="Send_Fund_body_ID_deposit" >
                                    <form onSubmit={(e) => this.handleFormSubmit(e)}>
                                           <Grid item xs={12} >

                                                <label>Amount :</label>
                                                <input type="text" 
                                                pattern="[0-9]+"
                                                name="_Amount" 
                                                required
                                                value={this.state._Amount}
                                                onChange={(e) => this.handleChange(e)}
                                                className="form-control"></input>

                                                <div style={{width:"100%",display:"flex",justifyContent:"center",margin:"1% 0%"}}>
                                                <img src={this.state.QrImage} style={{height:"50%",width:"50%"}}></img>
                                                </div>

                                         <div style={{padding:"10px"}}>   
                                                <label>BTC Address :</label>
                                                <input type="text" name="_bitAddress" value={this.state._bitAddress}
                                                disabled
                                                className="form-control"></input>
                                            </div> 

                                             <div style={{padding:"10px"}}> 
                                                <label>Enter Hash Code :</label>
                                                <input type="text" name="_hashCode" 
                                                required
                                                value={this.state._hashCode}
                                                onChange={(e) => this.handleChange(e)}
                                                className="form-control"></input>
                                            </div>
                                               <div style={{padding:"10px"}}> 
                                                <label>Transaction Password :</label>
                                                <input type="password" name="_transactionPassword"
                                                required 
                                                pattern="[^' ']+"
                                                value={this.state._transactionPassword}
                                                onChange={(e) => this.handleChange(e)}
                                                className="form-control"></input>
                                                </div>                                            
                                            </Grid>
                                            <div className="Send_Fund_body_Total_deposit">
    
                                                <button type="submit" disabled={this.state.Loading_btn} className="btn btn-success" >
                                                {this.state.Loading_btn ? (<div> <Loader type="ThreeDots" color="#FFF" height={15} width={15} /></div>) : "Deposit"}
                                                </button>
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
}

export default DirectDeposit;