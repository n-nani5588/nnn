import React from 'react';
import short from 'short-uuid';
import axios from 'axios';

export default class Generatepin extends React.Component{

    constructor(){
        super();
        this.state={
            Generatedpin:"",
            userid:"",
            id:"",
            active:"",
            pin:"",
            fname:"",
            lname:"",
            country:"",
            mailid:"",
            fund:"",
            recieve:"",
            level:"",
            recieve:"",
            pinbalance:"",
            bitaddress:"",
        }
    }

    handleGeneratepin = () =>{
            const key =short.generate()
        this.setState({
            Generatedpin: key
        })

    }

    handleSendpin =async ()=>{

        const pin1 = this.state.Generatedpin;
        const id = this.state.id

        await axios.post('/api/Admin/sendPinToUser',{
            _id: id,
            pin: pin1
        }).then(res => {

            if( parseInt(res.data.status) === parseInt(1)){
                this.setState({
                    Generatedpin:"",
                    userid:"",
                    id:"",
                    active:"",
                    pin:"",
                    fname:"",
                    lname:"",
                    country:"",
                    mailid:"",
                    fund:"",
                    recieve:"",
                    level:"",
                    recieve:"",
                    pinbalance:"",
                    bitaddress:"",
                })
                document.getElementById('UP_MSG').innerHTML = "Update Successful !"
            }else{
                document.getElementById('UP_MSG').innerHTML = " Something went wrong !"

            }

        })

    }

    getUserDetails = async (e) => {

        console.log(e.target.value);

        e.preventDefault()

       await axios.get(`/api/Admin/getUserForPin/${e.target.USRID.value}`)
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){

                this.setState({
                    userid:res.data.user.userid,
                    id:res.data.user._id,
                    active: res.data.user.Active,
                    pin: res.data.user.availablePins,
                    fname: res.data.user.firstName,
                    lname: res.data.user.lastName,
                    country: res.data.user.country,
                    mailid: res.data.user.mailId,
                    fund: res.data.user.fundSharingIncome.$numberDecimal,
                    autoPool: res.data.user.autoPoolIncome.$numberDecimal,
                    level: res.data.user.levelIncome.$numberDecimal,
                    recieve: res.data.user.recievedIncome.$numberDecimal,
                    pinbalance: res.data.user.pinBalance.$numberDecimal,
                    bitaddress: res.data.user.bitAddress,
                    date: res.data.user.joiningDate,
                    referedby: res.data.user.referedBy,
                })
            }
            else{
                document.getElementById('UP_MSG').innerHTML = "User Not Found!"
            }
           
        })

    }

    render(){
        return(
            <div>
            
            {/*  Generate ppin section */}
            <div>
                <div >
                    Generate pin :
                    <input readOnly name="Generated_Pin" size="30" value={this.state.Generatedpin}></input>
                </div> 

                {/* Error Msg */}
                <div id="UP_MSG">

                </div>
                
            {/* Button to generate pin */}
                <div>

                    <button
                    className="btn btn-primary"
                    onClick={() => this.handleGeneratepin()}
                    >
                        Generate Pin
                    </button>

                </div>
            </div>
        
             {/* show member details */}
                <div>
                    {/* get member */}
                    <form onSubmit={(e) => this.getUserDetails(e)}>
                    <div>
                        <input
                         placeholder="enter userId"
                         name="USRID"
                        >
                        </input>
                        
                        {/*  submit button */}
                        <button 
                        className="btn btn-primary"
                        type="submit"
                        >

                            Get user details

                        </button>

                        {/* Details of user */}

                        <label>UserId</label>
                        <input value={this.state.userid} readOnly></input>

                        <label>Id</label>
                        <input value={this.state.id} readOnly></input>

                        <label>joining date</label>
                        <input value={this.state.date} readOnly></input>

                        <label>Active</label>
                        <input value={this.state.active} readOnly></input>

                        <label>availablePins</label>
                        <select>
                            {this.state.pin && this.state.pin.map(pin =>
                                <option value={pin}>{pin}</option>
                            )}
                        </select>

                        <label>firstName</label>
                        <input value={this.state.fname} readOnly></input>

                        <label>lastName</label>
                        <input value={this.state.lname} readOnly></input>

                        <label>country</label>
                        <input value={this.state.country} readOnly></input>
                        
                        <label>mailId</label>
                        <input value={this.state.mailid} readOnly></input>

                        <label>referedBy</label>
                        <input value={this.state.referedby} readOnly></input>

                        <label>levelIncome</label>
                        <input value={this.state.level} readOnly></input>

                        <label>fundSharingIncome</label>
                        <input value={this.state.fund} readOnly></input>

                        <label>recievedIncome</label>
                        <input value={this.state.recieve} readOnly></input>

                        <label>pinBalance</label>
                        <input value={this.state.pinbalance} readOnly></input>

                        <label>bitAddress</label>
                        <input value={this.state.bitaddress} readOnly></input>
                    </div>
                    </form>
                </div>

             {/* send pin to the user */}
             <div >

                 <button
                 className="btn btn-primary"
                 onClick={()=> this.handleSendpin()}
                 >
                     send pin
                 </button>

             </div>
            
            </div>
        )
    }
}