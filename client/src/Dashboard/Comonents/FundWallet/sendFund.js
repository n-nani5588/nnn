import React from 'react';
import './fundWallet.css'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import axios from  'axios';

class SendFund extends React.Component{


    constructor(){
        super();
        this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
        console.log(this.userdata);
        this.state = {
            sendMnyFrom:this.userdata._id,
            user_ID : this.userdata.userId,
            levelIncome: parseFloat( this.userdata.levelIncome.$numberDecimal),
            autoPoolIncome: parseFloat( this.userdata.autoPoolIncome.$numberDecimal),
            fundSharingIncome: parseFloat( this.userdata.fundSharingIncome.$numberDecimal),
            recievedIncome: parseFloat( this.userdata.recievedIncome.$numberDecimal),
            _level:0.00,
            _autopool:0.00,
            _fund:0.00,
            _recieved:0.00,
            buttondisable:false,
            buttondisablemember:false,
            disableCanclebutton:true,
            memberName:"",
            memberId:"",
            sendMnyTo:'',
            sendUserDetails:"",
            disablememberfield:false
        }
    }

    componentDidMount(){

        const Available = parseFloat( this.userdata.levelIncome.$numberDecimal) + 
                          parseFloat( this.userdata.autoPoolIncome.$numberDecimal)+
                          parseFloat( this.userdata.fundSharingIncome.$numberDecimal)+
                          parseFloat( this.userdata.recievedIncome.$numberDecimal)
                          console.log(Available);
    
     if(parseFloat(Available) > parseFloat(0.00)){
          
        // const memberName = document.getElementById('Member_Name').value;
        //  if(!memberName){
        //     this.setState({buttondisable:true})
        //     const msg =  document.getElementById('Update_Msg');
        //     msg.innerHTML = "Please Enter \"Member Id\" and click on Get details";
        //     msg.style.display = "block";
        //  }
        this.setState({
            buttondisable: true,
            disablememberfield: false,
            buttondisablemember: false,
            disableCanclebutton: true

        })
      
    }
      else{
        this.setState({buttondisablemember:true,buttondisable:true})
        const msg =  document.getElementById('Update_Msg');
        msg.innerHTML = "SORYY ! can't transfer money due to low balance";
        msg.style.display = "block";
      }
        
    }

    handleChange = (e) => {
 
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleCheck = (e)=> {

        const AvailableBalance = document.getElementById('Available_Balance').value
        console.log("in check:"+AvailableBalance);
        if( parseFloat(0.00) > parseFloat(e.target.value)  ){
            if(parseFloat(e.target.value) <= parseFloat(AvailableBalance)){
             //await code

              document.getElementById('ERR_MSG').innerHTML = ""
            }
        }else{
           
         document.getElementById('ERR_MSG').innerHTML = "please enter valid Amount !"
        }

    }

    handleSubmit = async (e)=> {
            e.preventDefault();
            const id = document.getElementById('Member_Id').value
            
            if(id === this.state.memberId){
               
                if( parseFloat(0.00) < parseFloat(e.target._Send.value)  ){
                    
                    if(parseFloat(e.target._Send.value) <= parseFloat(e.target._Available.value)){
                     //await code
                     console.log("in axios");
                      document.getElementById('ERR_MSG').innerHTML = "";
                      await axios.post('/api/users/sendFund/update',{
                        
                        //updating Values
                        sendMnyTo:this.state.sendMnyTo,
                        sendMnyToDetails: this.state.sendUserDetails,
                        from: this.state.user_ID,
                        total:e.target._Send.value,
                        sendMnyFrom:this.state.sendMnyFrom,
                        levelamount:e.target._level.value,
                        autoamount:e.target._autopool.value,
                        fundamount:e.target._fund.value,
                        recievedamount:e.target._recieved.value,

                      }).then(res => {

                        if(parseInt(res.data.status) === parseInt(1)){
                             sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.user));
                             const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                             this.setState({
                                sendMnyFrom:userdata._id,
                                levelIncome: parseFloat( userdata.levelIncome.$numberDecimal),
                                autoPoolIncome: parseFloat( userdata.autoPoolIncome.$numberDecimal),
                                fundSharingIncome: parseFloat( userdata.fundSharingIncome.$numberDecimal),
                                recievedIncome: parseFloat( userdata.recievedIncome.$numberDecimal),
                                _level:0.00,
                                _autopool:0.00,
                                _fund:0.00,
                                _recieved:0.00,
                            })
                        }else{
                           
                        }
                      })

                    }else{console.log("3");document.getElementById('ERR_MSG').innerHTML = "please enter valid Amount !"}

                }else{
                    console.log("2");
                 document.getElementById('ERR_MSG').innerHTML = "please enter valid Amount !"
                }


            }else{
                document.getElementById('ERR_MSG').innerHTML = "Member id changed !"
                console.log("1");
            }
            

    }

    handleMemberId = async (e) => {
    
        e.preventDefault();
        const id = e.target._memberID.value;
        if(id === this.userdata.userId){
            document.getElementById('Update_Msg').innerHTML = "Can't Transfer to self Account"
            document.getElementById('Update_Msg').style.display = "block"
        }else{
            await axios.get(`/api/users/sendFund/${id}` ).then(res => {
                if(parseInt(res.data.status) === parseInt(1)){
                    console.log(res.data.user);
                    this.setState({
                                sendUserDetails: res.data.user,
                                memberName : res.data.user.firstName+""+res.data.user.lastName,
                                memberId: res.data.user.userId,
                                sendMnyTo: res.data.user._id,
                                buttondisable:false,
                                disablememberfield:true,
                                buttondisablemember:true,
                                disableCanclebutton:false

                    })
                    document.getElementById('Update_Msg').innerHTML = "Enter Amount"
                    document.getElementById('Update_Msg').style.display = "block"
                }else{
                    document.getElementById('Update_Msg').innerHTML = "Enter valid MemberId and click Get details !"
                    document.getElementById('Update_Msg').style.display = "block"
                }
            })
        }
        
    }

    handleCancel=() =>{
        this.setState({
            buttondisable: true,
            disablememberfield: false,
            buttondisablemember: false,
            disableCanclebutton: true
        })
    }


    render()
    {
        return(
        <div style={{margin:"0px",padding:"2% 10%"}}>
            <div className="Send_Fund_Container">

                <div className="Send_Fund_header" >
                     Fund Transfer
                </div>

                <div id="Update_Msg"  style={{color:"black",display:"none",borderRadius:"3px",backgroundColor:"white",padding:"10px 5px"}}>
                  
              </div>

                   <div className="Send_Fund_body">
                       
                       <Grid  container xs={12} >
                            <div  >
                            <p style={{fontSize:"10px"}}>*Be aware of spaces while entering 
                                        member id</p>
                            <form className="Send_Fund_body_ID" onSubmit={(e) => this.handleMemberId(e)}>
                                       <Grid item xs={12} sm={6} >
                                        
                                        <p> Member Id : </p>
                                            <input required disabled={this.state.disablememberfield} name="_memberID" id="Member_Id" type="text" className="form-control"></input>
                                        </Grid>
                                        <Grid item xs={12} sm={6} >
                                        <p> Member details :</p>
                                            <input id="Member_Name" type="text" disabled value={this.state.memberName} className="form-control"></input>
                                        </Grid>
                                        <Grid item xs={12} sm={6} >
                                        <div style={{display:"flex",justifyContent:"flex-start",padding:"10px"}}>
                                            <button
                                            type="submit"
                                            className="btn  btn-sm"
                                            disabled={this.state.buttondisablemember}
                                            >
                                                Get Details
                                            </button>

                                            <button
                                             onClick={() => this.handleCancel()}
                                            disabled={this.state.disableCanclebutton}
                                            className="btn btn-sm"
                                            >
                                               change id
                                            </button>
                                        </div>
                                        </Grid>
                          </form>
                            </div>
                       </Grid>
<div style={{padding:"20px 0px"}}>
{/* <Divider/> */}
</div>
                     <form onSubmit={(e) => this.handleSubmit(e)}>
                        <Grid container xs={12} spacing={2}>
                                <div className="Send_Fund_body_ID" >
                                    <div className="Send_Fund_body_wallet">

                                    <input type="text" disabled value="LEVEL INCOME" className="form-control"></input>
                                    <input type="text" readOnly value={this.state.levelIncome} className="form-control"></input>
                                    <input type="number" required min="0" step="any" max={this.state.levelIncome} name="_level" onChange={(e) => this.handleChange(e)} value={this.state._level} className="form-control"></input>

                                    </div >
                                    <div className="Send_Fund_body_wallet">

                                    <input type="text" readOnly value="AUTOPOOL INCOME" className="form-control"></input>
                                    <input type="text" readOnly value={this.state.autoPoolIncome} className="form-control"></input>
                                    <input type="number" required min="0" step="any" max={this.state.autoPoolIncome} name="_autopool" onChange={(e) => this.handleChange(e)} value={this.state._autopool} className="form-control"></input>

                                    </div>
                                    <div className="Send_Fund_body_wallet">

                                    <input type="text" readOnly value="FSI" className="form-control"></input>
                                    <input type="text" readOnly value={this.state.fundSharingIncome} className="form-control"></input>
                                    <input type="number" required min="0" step="any" max={this.state.fundSharingIncome} name="_fund" onChange={(e) => this.handleChange(e)} value={this.state._fund} className="form-control"></input>

                                    </div>

                                    <div className="Send_Fund_body_wallet">

                                    <input type="text" readOnly value="WALLET INCOME" className="form-control"></input>
                                    <input type="text" readOnly value={this.state.recievedIncome} className="form-control"></input>
                                    <input type="number" required min="0" step="any" max={this.state.recievedIncome} name="_recieved" onChange={(e) => this.handleChange(e)} value={this.state._recieved} className="form-control"></input>

                                    </div>

                                    <div className="Send_Fund_body_Total">

                                    <input type="text" readOnly value="AVAILBLE FUND" className="form-control"></input>
                                    <input type="text" name="_Available" id="Available_Balance" value={(parseFloat(this.state.recievedIncome)+parseFloat(this.state.fundSharingIncome)+parseFloat(this.state.levelIncome)+parseFloat(this.state.autoPoolIncome))} disabled className="form-control"></input>
                                  

                                    </div>
                                    <div id="ERR_MSG"></div>
                                    <div className="Send_Fund_body_Total">

                                    <input type="text" readOnly value="TRANSFER FUND" className="form-control"></input>
                                    <input type="text" readOnly name="_Send" value={parseFloat(this.state._recieved)+parseFloat(this.state._fund)+parseFloat(this.state._level)+parseFloat(this.state._autopool)} className="form-control"></input>


                                    </div>
                                    <div className="Send_Fund_body_Total">

                                        <button 
                                        className="btn btn-success" 
                                        type = "submit"
                                        disabled={this.state.buttondisable}
                                        >Transfer</button>
                                     </div>
                                </div>
                        </Grid>
                    </form>
                   </div>


           </div>
        </div>
      
      )
    }
}

export default SendFund;