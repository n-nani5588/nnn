import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './withdraw.css';
import Axios from 'axios';
import Loader from 'react-loader-spinner';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Withdrawal extends React.Component {


    constructor(){
        super();
        this.userdata =  JSON.parse(sessionStorage.getItem('USER_DETAILS'));
        this.state = {
            levelIncome: parseFloat( this.userdata.levelIncome.$numberDecimal),
            autoPoolIncome: parseFloat( this.userdata.autoPoolIncome.$numberDecimal),
            fundSharingIncome: parseFloat( this.userdata.fundSharingIncome.$numberDecimal),
            recievedIncome: parseFloat( this.userdata.recievedIncome.$numberDecimal),
            Active : this.userdata.Active.toLowerCase() === "true" ? true : false,
            _level: parseFloat(0.00),
            _autopool:parseFloat(0.00),
            _fund:parseFloat(0.00),
            _recieved:parseFloat(0.00),
            address: this.userdata.bitAddress,
            disablebutton: false,
            Level : this.userdata.levelTeam,
            Loading : false,
            Err_message: "something",
            open: false,
        }

    }

    componentDidMount(){

         if(!this.state.address)
        {
            // document.getElementById("_MSG").innerHTML = "please add address"
            this.setState({
                disablebutton:true,
            })
        }
    }

    handleChange = (e)=>{

        this.setState({
            [e.target.name]: e.target.value
        })

    }


    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            Loading: true
        })

        try{
                if(parseFloat(e.target.Send_fund.value) >  parseFloat(30)){

                    if(parseFloat(e.target.Send_fund.value) <= parseFloat(e.target.Available_fund.value) ){

                        Axios.post('/api/Statement/withdraw',{

                            _id: this.userdata._id,
                            fname: this.userdata.firstName,
                            lname: this.userdata.lastName,
                            level: e.target._level.value,
                            auto: e.target._autopool.value,
                            fund: e.target._fund.value,
                            recieve: e.target._recieved.value,
                            userId: this.userdata.userId,
                            Amount: e.target.Send_fund.value,
                            Address: this.userdata.bitAddress,
                            total: e.target._total.value

                        }).then(res =>{
                            console.log(res.data.user);
                                        if(parseInt(res.data.status) === parseInt(1)){
                                            sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.user));
                                            this.setState({

                                                levelIncome: parseFloat( res.data.user.levelIncome.$numberDecimal ),
                                                autoPoolIncome: parseFloat( res.data.user.autoPoolIncome.$numberDecimal),
                                                fundSharingIncome: parseFloat( res.data.user.fundSharingIncome.$numberDecimal),
                                                recievedIncome: parseFloat( res.data.user.recievedIncome.$numberDecimal),
                                                _level: parseFloat(0.00),
                                                _autopool:parseFloat(0.00),
                                                _fund:parseFloat(0.00),
                                                _recieved:parseFloat(0.00),
                                                address: res.data.user.bitAddress,
                                                Loading: false,
                                                Err_message : "Withdraw Request Sent !",
                                                open : true, 
                                            })
                                        }
                                        else
                                        {
                                            this.setState({
                                                Loading: false
                                            })
                                        }
                        } ).catch(err => {

                            this.setState({
                                Loading: false
                            })

                        })

                    }
                    else{
                      //  document.getElementById('UpD_Msg').innerHTML = "Invalid Amount"
                        this.setState({ Loading: false ,  Err_message : "Invalid Amount",
                        open : true, })
                    }


                }else{
                 //   document.getElementById('UpD_Msg').innerHTML = "Minium Amount should be $30"
                    this.setState({ Loading: false ,
                        Err_message : "Minium Amount should be $30",
                        open : true, })
                }
            }
            catch(err)
            {
                 console.log(" ");
                 this.setState({ Loading: false })
            }
      
    }

    handleClose = () =>{
        this.setState({
          open: false
        })
      }


    render(){

      
            if(!this.state.Active) {  
                return(
                <div style={{ width: "100%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"5%",
                    color:"black",
                    backgroundColor:"red"}}>

                            PLEASE ACTIVATE YOUR ACCOUNT
                        
                    </div>
                )
            }
            else if(this.state.Level.length < 4)
            {
                return(

                    <div style={{ width: "100%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"5%",
                    color:"black",
                    backgroundColor:"red"}}>

                            PLEASE JOIN 4 MEMBERS TO WITHDRAW MONEY
                        
                    </div>

                     )
            }else{



                return(
                    <div style={{margin:"0px",padding:"2% 10%"}}>
                        <div className="Send_Fund_Container">
            
                            <div className="Send_Fund_header" >
                                Withdraw
                            </div>

                            <div id="UpD_Msg"></div>
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
            
                            <div className="Send_Fund_body">
                                <Grid  container xs={12} spacing={2}>
                                        <div className="Send_Fund_body_ID" >
                                                <Grid item xs={12} >
                                                    <p> Bitcoin Address : </p>
                                                    <input type="text" disabled value={this.state.address} className="form-control"></input>
                                                    </Grid>
                                                    
                                        </div>
                                </Grid>
                                    <div style={{padding:"20px 0px",fontSize:"20px",fontWeight:"500"}}>
                                    {/* <Divider/> */}Available Amount to withdraw
                                    </div>
                                    <div id="_MSG"></div>
                                    <Grid container xs={12} spacing={2}>
                                        <form onSubmit={(e) => this.handleSubmit(e)}>
                                            <div className="Send_Fund_body_ID" >
                                                <div className="Send_Fund_body_wallet">
            
                                                <input type="text" disabled value="LEVEL INCOME" className="form-control"></input>
                                                <input type="text"  value={this.state.levelIncome} disabled className="form-control"></input>
                                                <input type="number" value={this.state._level} onChange={(e)=> this.handleChange(e)} required name="_level" min="0" step="any" max={-this.state.levelIncome}  className="form-control"></input>
            
                                                </div >
                                                <div className="Send_Fund_body_wallet">
            
                                                <input type="text" readOnly value="AUTOPOOL INCOME" className="form-control"></input>
                                                <input type="text"  value={this.state.autoPoolIncome} disabled className="form-control"></input>
                                                <input type="number" value={this.state._autopool} onChange={(e)=> this.handleChange(e)} required name="_autopool" min="0" step="any" max={this.state.autoPoolIncome}  className="form-control"></input>
            
                                                </div>
                                                <div className="Send_Fund_body_wallet">
            
                                                <input type="text" readOnly value="FUND SHARING INCOME" className="form-control"></input>
                                                <input type="text"  value={this.state.fundSharingIncome} disabled className="form-control"></input>
                                                <input type="number" value={this.state._fund} onChange={(e)=> this.handleChange(e)} required name="_fund" min="0" step="any" max={this.state.fundSharingIncome}  className="form-control"></input>
            
                                                </div>
                                                <div className="Send_Fund_body_wallet">
            
                                                <input type="text" readOnly value="RECIEVED INCOME" className="form-control"></input>
                                                <input type="text"  value={this.state.recievedIncome} disabled className="form-control"></input>
                                                <input type="number" value={this.state._recieved} onChange={(e)=> this.handleChange(e)} required name="_recieved" min="0" step="any" max={this.state.recievedIncome}  className="form-control"></input>

                                                </div>
                                                <div className="Send_Fund_body_Total">
            
                                                <input type="text" readOnly value="AVAILABLE INCOME" className="form-control"></input>
                                                <input type="text"
                                                value={(this.state.recievedIncome+this.state.fundSharingIncome+this.state.autoPoolIncome+this.state.levelIncome)}
                                                disabled 
                                                name="Available_fund"
                                                className="form-control"></input>
            
                                                </div>


                                                <div className="Send_Fund_body_Total">
                                            
                                                <input type="text" readOnly value="TRANSFER FUND" className="form-control"></input>
                                                <input type="text"
                                                name="Send_fund"
                                                value={parseFloat(this.state._level)+parseFloat(this.state._recieved)+parseFloat(this.state._fund)+parseFloat(this.state._autopool)}
                                                disabled
                                                className="form-control"></input>
                                                </div>

                                                
                                                <div>*15% will be DEDUCTed FROM WITHDRAW AMOUNT</div>

                                                <div className="Send_Fund_body_Total">
                                            
                                                <input type="text" readOnly value="TOTAL" className="form-control"></input>
                                                <input type="text"
                                                name="_total"
                                                value={(parseFloat(this.state._level)+parseFloat(this.state._recieved)+parseFloat(this.state._fund)+parseFloat(this.state._autopool))-parseFloat((parseFloat(this.state._level)+parseFloat(this.state._recieved)+parseFloat(this.state._fund)+parseFloat(this.state._autopool))*0.15)}
                                                disabled
                                                className="form-control"></input>
                                                </div>


                                                <div className="Send_Fund_body_Total">
                                                    <button 
                                                    type="submit"
                                                    className="btn btn-success"
                                                    disabled={this.state.disablebutton || this.state.Loading}
                                                    >
                                                    {this.state.Loading ? (<div> <Loader type="ThreeDots" color="#FFF" height={30} width={30} /></div>) : "Request Withdraw"}  
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </Grid>
                            </div>
            
            
                    </div>
                    </div>
                
                )



            }
   

    }
}

export default Withdrawal;