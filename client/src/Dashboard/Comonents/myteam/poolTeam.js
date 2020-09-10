import React from 'react';
import './myteam.css';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import { ThemeProvider } from '@material-ui/core';



export default class PoolTeam extends React.Component {

    constructor(){
        super();
        this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
        this.state = {
            userdata : this.userdata,
            Active: this.userdata.Active === "false"?false:true,
            pool1pins_length: this.userdata.poolOnePins.length > 0?true:false,
            pool2pins_length:  this.userdata.poolTwoPins.length > 0?true:false,
            pool3pins_length: this.userdata.poolThreePins.length > 0?true:false,
            pool4pins_length:  this.userdata.poolFourPins.length > 0?true:false,
            pool5pins_length:  this.userdata.poolFivePins.length > 0?true:false,
            pool6pins_length:  this.userdata.poolSixPins.length > 0?true:false,
            pool7pins_length:  this.userdata.poolSevenPins.length > 0?true:false,
            pool8pins_length:  this.userdata.poolEightPins.length > 0?true:false,
            pool9pins_length:  this.userdata.poolNinePins.length > 0?true:false,
            pool10pins_length:  this.userdata.poolTenPins.length > 0?true:false,
            pool1Details : "",
            pool2Details : "",
            pool3Details : "",
            pool4Details : "",
            pool5Details : "",
            pool6Details : "",
            pool7Details : "",
            pool8Details : "",
            pool9Details : "",
            pool10Details : "",
        }
    }

   async componentDidMount(){

        
        if(this.userdata.poolOne){
            console.log("one");
          await  Axios.get(`/api/users/getUserAutopoolOneDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data.user1);
                this.setState({
                    pool1Details: res.data.user1
                })
            })
        }

        if(this.userdata.poolTwo){
            console.log("2");
         await   Axios.get(`/api/users/getUserAutopoolTwoDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                     pool2Details: res.data.user2
                })
            })
        }

        if(this.userdata.poolThree){
            console.log("3");
          await  Axios.get(`/api/users/getUserAutopoolThreeDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool3Details : res.data.user3
                })
            })
        }

        if(this.userdata.poolFour){
            console.log("4");
          await  Axios.get(`/api/users/getUserAutopoolFourDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool4Details: res.data.user4
                })
            })
        }

        if(this.userdata.poolFive){
            console.log("5");
           await Axios.get(`/api/users/getUserAutopoolFiveDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool5Details : res.data.user5
                })
            })
        }

        if(this.userdata.poolSix){
            console.log("6");
          await  Axios.get(`/api/users/getUserAutopoolSixDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool6Details : res.data.user6
                })
            })
        }

        if(this.userdata.poolSeven){
            console.log("7");
          await  Axios.get(`/api/users/getUserAutopoolSevenDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool7Details : res.data.user7
                })
            })
        }

        if(this.userdata.poolEight){
            console.log("8");
           await Axios.get(`/api/users/getUserAutopoolEightDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool8Details : res.data.user8
                })
            })
        }

        if(this.userdata.poolNine){
            console.log("9");
          await  Axios.get(`/api/users/getUserAutopoolNineDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool9Details : res.data.user9
                })
            })
        }

        if(this.userdata.poolTen){
            console.log("10");
          await  Axios.get(`/api/users/getUserAutopoolTenDetails/${this.userdata.userId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pool10Details : res.data.user10
                })
            })
        }

    }

    handlePoolOne=()=>{
        const pin = document.getElementById('pool_One_Pin').value;
        console.log("One :",pin);

        Axios.post('/api/users/poolOneUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })

    }

    handlePoolTwo=()=>{
        const pin = document.getElementById('pool_Two_Pin').value;
        console.log("Two :",pin);

        Axios.post('/api/users/poolTwoUpdate',{
            _id: this.userdata._id,
            pins: pin,
            userid: this.userdata.userId,
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolThree=()=>{
        const pin = document.getElementById('pool_Three_Pin').value;
        console.log("3 :",pin);

        Axios.post('/api/users/poolThreeUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolFour=()=>{
        const pin = document.getElementById('pool_Four_Pin').value;
        console.log("4 :",pin);

        Axios.post('/api/users/poolFourUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolFive=()=>{
        const pin = document.getElementById('pool_Five_Pin').value;
        console.log("5 ",pin);

        Axios.post('/api/users/poolFiveUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolSix=()=>{
        const pin = document.getElementById('pool_Six_Pin').value;
        console.log("6 :",pin);

        Axios.post('/api/users/poolSixUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolSeven=()=>{
        const pin = document.getElementById('pool_Seven_Pin').value;
        console.log("7 :",pin);

        Axios.post('/api/users/poolSevenUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolEight=()=>{
        const pin = document.getElementById('pool_Eight_Pin').value;
        console.log("8 :", pin);

        Axios.post('/api/users/poolEightUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolNine=()=>{
        const pin = document.getElementById('pool_Nine_Pin').value;
        console.log("9 :",pin);

        Axios.post('/api/users/poolNineUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    handlePoolTen=()=>{
        const pin = document.getElementById('pool_Ten_Pin').value;
        console.log("10 :",pin);
        Axios.post('/api/users/poolTenUpdate',{
            _id: this.userdata._id,
            userid: this.userdata.userId,
            pins: pin
        }).then(res =>{
            console.log(res.data.userdetails);
            
            if( parseInt(res.data.status) === parseInt(1) ){
                 sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.userdetails));
                 console.log(this.state.userdata);
                 this.setState({
                     userdata:   JSON.parse(sessionStorage.getItem('USER_DETAILS'))
                 })
                
            }
        })
    }

    render(){
        let i1 = 0,i2= 0, i3 =0,i4 =0,i5 =0,i6 =0,i7 =0,i8 =0,i9 =0,i10 =0;      
        console.log('renser');
        return(
            <div style={{width:"100%",padding:"5%",textTransform:"uppercase"}}>
                 
                 <div style={{width:"100%",padding:"1%",fontSize:"20px",fontWeight:"500"}}>
                     {this.userdata.Active=== "false"? "Please Active Your Account": "WIN BIG HERE"}
                 </div>

                <div style={{width:"100%",margin:"20px 0px",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around"}}>
                   
                    {/* pool-1-table  */}

                    <div style={{margin:"2% 0%"}}>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    Rising Treasure

                    </div>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"10px",color:"black"}}>
                        {!this.state.userdata.poolOne?this.state.pool1pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                               <td colspan={8}> {this.state.userdata.poolOne?"Running...":"Join"}</td>
                            </tr>
                        </thead>
                        <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                        
                            {
                                
                                this.state.pool1Details && this.state.pool1Details.map(pool1 => 
                                     
                                    <tr>
                                    <td>{++i1}</td>
                                    <td>
                                        {this.userdata.poolOne?pool1.levelOne:0}
                                    </td>
                                    <td>
                                        {this.userdata.poolOne?"$"+(pool1.levelOneIncome):"$0"}
                                    </td>
                                     
                                    <td>
                                       {this.userdata.poolOne?pool1.levelTwo:0}
                                    </td>
                                    <td>
                                       {this.userdata.poolOne?"$"+(pool1.levelTwoIncome):"$0"} 
                                    </td>
                                    <td>
                                       {this.userdata.poolOne?pool1.levelThree:0}
                                    </td>
                                    <td>
                                        {this.userdata.poolOne?"$"+(pool1.levelThreeIncome):"$0"}
                                    </td>
                                    <td>{this.userdata.poolOne?"$"+
                                     (parseInt(pool1.levelThreeIncome)+parseInt(pool1.levelTwoIncome)+parseInt(pool1.levelOneIncome))
                                    :"$0"}</td>
                                </tr>
                               
                               )
                                    
                            }
                            
                        </tbody>
                    </table>

                    <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                        <button
                        disabled={!this.state.Active || this.state.userdata.poolOne || !this.state.pool1pins_length }
                        className="btn btn-sm btn-primary"
                        onClick={() => this.handlePoolOne()}
                        >
                            Join
                        </button>
                       
                       <select id="pool_One_Pin" style={{fontSize:"10px"}} className="form-control ">
                            {
                                this.state.userdata.poolOnePins && this.state.userdata.poolOnePins.map(pin =>
                                <option value={pin}>{pin}</option>
                                )
                            }
                        </select>

                    </div>
                   
                    </div>

                     {/*  pool-2-table */}
                    <div style={{margin:"2% 0%"}}>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    WONDER TREASURE

                    </div>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                     fontSize:"10px",color:"black"}}>
                        {!this.state.userdata.poolTwo?this.state.pool2pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                                 <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                            </tr>
                            <tr >
                               <td colspan={8}> {this.state.userdata.poolTwo?"Running...":"Join"}</td>
                            </tr>
                        </thead>
                        <tbody style={{maxHeight:"100px",overflow:"scroll"}}>

                            {this.state.pool2Details && this.state.pool2Details.map(poo2 => 
                                
                                
                             <tr>
                             <td>{++i2}</td>
                             <td>
                                 {this.userdata.poolTwo?poo2.levelOne:0}
                             </td>
                             <td>
                                 {this.userdata.poolTwo?"$"+(poo2.levelOneIncome):"$0"}
                             </td>
                      
                             <td>
                                 {this.userdata.poolTwo?poo2.levelTwo:0}
                             </td>
                             <td>
                                 {this.userdata.poolTwo?"$"+(poo2.levelTwoIncome):"$0"}
                             </td>
                        
                             <td>
                                 {this.userdata.poolTwo?poo2.levelThree:0}
                             </td>
                             <td>
                                 {this.userdata.poolTwo?"$"+(poo2.levelThreeIncome):"$0"}
                             </td>
                       
                             <td>
                                {this.userdata.poolTwo?"$"+
                                (parseFloat(poo2.levelThreeIncome)+parseFloat(poo2.levelTwoIncome)+parseFloat(poo2.levelOneIncome))
                                :"$0"}
                             </td>
                         </tr>
                   
                                
                                )}
                        </tbody>
                    </table>

                    <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                        <button
                        disabled={ !this.state.Active || this.state.userdata.poolTwo || !this.state.pool2pins_length }
                        onClick={() => this.handlePoolTwo()}
                        className="btn btn-sm btn-primary"
                        >
                            Join
                        </button>
                       
                       <select id="pool_Two_Pin" style={{fontSize:"10px"}} className="form-control ">
                            {
                                this.state.userdata.poolTwoPins && this.state.userdata.poolTwoPins.map(pin =>
                                <option value={pin}>{pin}</option>
                                )
                            }
                        </select>

                    </div>
                   
                    </div>


                </div>

                <div style={{width:"100%",margin:"20px 0px",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around"}}>
                   

                    {/* pool-3-table */}
                    <div style={{margin:"2% 0%"}}>
                    
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    MASTER TREASURE

                    </div>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"10px",color:"black"}}>
                        {!this.state.userdata.poolThree?this.state.pool3pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                            <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                            </tr>
                            <tr >
                               <td colspan={8}> {this.state.userdata.poolThree?"Running...":"Join"}</td>
                            </tr>
                        </thead>
                        <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                            {this.state.pool3Details && this.state.pool3Details.map(pool3 => 
                                
                                
                             <tr>
                             <td>{++i3}</td>

                             <td>
                                 {this.userdata.poolThree?pool3.levelOne:0}
                             </td>
                             <td>{this.userdata.poolThree?"$"+(pool3.levelOneIncome):"$0"}</td>
                        
                             <td>{this.userdata.poolThree?pool3.levelTwo:0}</td>
                             <td>{this.userdata.poolThree?"$"+(pool3.levelTwoIncome):"$0"}</td>
                        
                             <td>{this.userdata.poolThree?pool3.levelThree:0}</td>
                             <td>{this.userdata.poolThree?"$"+(pool3.levelThreeIncome):"$0"}</td>
                        
                             <td>
                                 {this.userdata.poolThree?"$"+
                                 (parseFloat(pool3.levelThreeIncome)+parseFloat(pool3.levelTwoIncome)+parseFloat(pool3.levelOneIncome))
                                 :"$0"}
                             </td>
                         </tr>
                   

                                )} 
                                
                       </tbody>
                    </table>

                    <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                        <button
                        disabled={!this.state.Active || this.state.userdata.poolThree || !this.state.pool3pins_length }
                        className="btn btn-sm btn-primary"
                        onClick={() => this.handlePoolThree()}
                        >
                            Join
                        </button>
                       
                       <select id="pool_Three_Pin" style={{fontSize:"10px"}} className="form-control ">
                            {
                                this.state.userdata.poolThreePins && this.state.userdata.poolThreePins.map(pin =>
                                <option value={pin}>{pin}</option>
                                )
                            }
                        </select>

                    </div>
                   
                    </div>

                            {/* pool-4-table */}
                    <div style={{margin:"2% 0%"}}>
                    
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    EXPERT TREASURE

                    </div>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"10px",color:"black"}}>
                        {!this.state.userdata.poolFour?this.state.pool4pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                            <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                            </tr>
                            <tr >
                               <td colspan={8}> {this.state.userdata.poolFour?"Running...":"Join"}</td>
                            </tr>
                        </thead>
                        <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                            {
                                this.state.pool4Details && this.state.pool4Details.map(pool4 => 
                                
                                    
                             <tr>
                             <td>{++i4}</td>

                             <td>{this.userdata.poolFour?pool4.levelOne:0}</td>
                             <td>{this.userdata.poolFour?"$"+(pool4.levelOneIncome):"$0"}</td>
                         
                             <td>{this.userdata.poolFour?pool4.levelTwo:0}</td>
                             <td>{this.userdata.poolFour?"$"+(pool4.levelTwoIncome):"$0"}</td>
                        
                             <td>{this.userdata.poolFour?pool4.levelThree:0}</td>
                             <td>{this.userdata.poolFour?"$"+(pool4.levelThreeIncome):"$0"}</td>
                        
                             <td>
                             {this.userdata.poolFour?"$"+
                                 (parseFloat(pool4.levelThreeIncome)+parseFloat(pool4.levelTwoIncome)+parseFloat(pool4.levelOneIncome))
                                 :"$0"}
                             </td>
                         </tr>
                    
                                
                                    )
                            }</tbody>
                    </table>

                    <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                        <button
                        disabled={!this.state.Active || this.state.userdata.poolFour || !this.state.pool4pins_length }
                        className="btn btn-sm"
                        onClick={() => this.handlePoolFour()}
                        >
                            Join
                        </button>
                       
                       <select id="pool_Four_Pin" style={{fontSize:"10px"}} className="form-control ">
                            {
                                this.state.userdata.poolFourPins && this.state.userdata.poolFourPins.map(pin =>
                                <option value={pin}>{pin}</option>
                                )
                            }
                        </select>

                    </div>
                   
                    </div>


                </div>


                <div style={{width:"100%",margin:"20px 0px",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around"}}>
                   

                    {/* pool-5-table */}
                    <div style={{margin:"2% 0%"}}>
                    
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    BILLIONAIRE TREASURE

                    </div>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"10px",color:"black"}}>
                        {!this.state.userdata.poolFive?this.state.pool5pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                            <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                            </tr>
                            <tr >
                               <td colspan={8}> {this.state.userdata.poolFive?"Running...":"Join"}</td>
                            </tr>
                        </thead>
                        <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                            {
                                this.state.pool5Details && this.state.pool4Details.map(pool5 => 
                                    
                                    
                             <tr>
                             <td>{++i5}</td>

                             <td>{this.userdata.poolFive?pool5.levelOne:0}</td>
                             <td>{this.userdata.poolFive?"$"+(pool5.levelOneIncome):"$0"}</td>
                         
                             <td>{this.userdata.poolFive?pool5.levelTwo:0}</td>
                             <td>{this.userdata.poolFive?"$"+(pool5.levelTwoIncome):"$0"}</td>
                         
                             <td>{this.userdata.poolFive?pool5.levelThree:0}</td>
                             <td>{this.userdata.poolFive?"$"+(pool5.levelThreeIncome):"$0"}</td>
                         
                             <td>
                             {this.userdata.poolFive?"$"+
                                 (parseFloat(pool5.levelThreeIncome)+parseFloat(pool5.levelTwoIncome)+parseFloat(pool5.levelOneIncome))
                                 :"$0"}
                             </td>
                         </tr>
                   

                                    )
                            } </tbody>
                    </table>

                    <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                        <button
                        disabled={!this.state.Active || this.state.userdata.poolFive || !this.state.pool5pins_length }
                        className="btn btn-sm"
                        onClick={() => this.handlePoolFive()}
                        >
                            Join
                        </button>
                       
                       <select id="pool_Five_Pin" style={{fontSize:"10px"}} className="form-control ">
                            {
                                this.state.userdata.poolFivePins && this.state.userdata.poolFivePins.map(pin =>
                                <option value={pin}>{pin}</option>
                                )
                            }
                        </select>

                    </div>
                   
                    </div>

                            {/* pool-6-table */}
                    <div style={{margin:"2% 0%"}}>
                    
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    LEGEND TREASURE

                    </div>

                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:"10px",color:"black"}}>
                        {!this.state.userdata.poolSix?this.state.pool6pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                    </div>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                            </tr>
                            <tr >
                               <td colspan={8}> {this.state.userdata.poolSix?"Running...":"Join"}</td>
                            </tr>
                        </thead>
                        <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                            {
                                this.state.pool6Details && this.state.pool6Details.map(pool6 => 
                                    
                                    
                             <tr>
                             <td>{++i6}</td>

                             <td>{this.userdata.poolSix?pool6.levelOne:0}</td>
                             <td>{this.userdata.poolSix?"$"+(pool6.levelOneIncome):"$0"}</td>
                      
                             <td>{this.userdata.poolSix?pool6.levelTwo:0}</td>
                             <td>{this.userdata.poolSix?"$"+(pool6.levelTwoIncome):"$0"}</td>
                      
                             <td>{this.userdata.poolSix?pool6.levelThree:0}</td>
                             <td>{this.userdata.poolSix?"$"+(pool6.levelThree):"$0"}</td>
                         
                             <td>
                             {this.userdata.poolSix?"$"+
                                 (parseFloat(pool6.levelThreeIncome)+parseFloat(pool6.levelTwoIncome)+parseFloat(pool6.levelOneIncome))
                                 :"$0"}
                             </td>
                         </tr>
                   

                                    )
                            } </tbody>
                    </table>

                    <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                        <button
                        disabled={!this.state.Active || this.state.userdata.poolSix || !this.state.pool6pins_length }
                        className="btn btn-sm"
                        onClick={() => this.handlePoolSix()}
                        >
                            Join
                        </button>
                       
                       <select id="pool_Six_Pin" style={{fontSize:"10px"}} className="form-control ">
                            {
                                this.state.userdata.poolSixPins && this.state.userdata.poolSixPins.map(pin =>
                                <option value={pin}>{pin}</option>
                                )
                            }
                        </select>

                    </div>
                   
                    </div>


                </div>

                            
                <div style={{width:"100%",margin:"20px 0px",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around"}}>
                   

                    {/* pool-7-table */}
                   <div style={{margin:"2% 0%"}}>
                   
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    FAST TRACK TREASURE

                    </div>

                   <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
               fontSize:"10px",color:"black"}}>
                       {!this.state.userdata.poolSeven?this.state.pool7pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                   </div>
                   <table id="customers">
                       <thead>
                           <tr>
                                <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                           </tr>
                           <tr >
                              <td colspan={8}> {this.state.userdata.poolSeven?"Running...":"Join"}</td>
                           </tr>
                       </thead>
                       <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                           {
                               this.state.pool7Details && this.state.pool7Details.map(pool7 => 
                                
                               
                            <tr>
                            <td>{++i7}</td>

                            <td>{this.userdata.poolSeven?pool7.levelOne:0}</td>
                            <td>{this.userdata.poolSeven?"$"+(pool7.levelOneIncome):"$0"}</td>
                        
                            <td>{this.userdata.poolSeven?pool7.levelTwo:0}</td>
                            <td>{this.userdata.poolSeven?"$"+(pool7.levelTwoIncome):"$0"}</td>
                        
                            <td>{this.userdata.poolSeven?pool7.levelThree:0}</td>
                            <td>{this.userdata.poolSeven?"$"+(pool7.levelThreeIncome):"$0"}</td>
                       
                            <td>
                            {this.userdata.poolSeven?"$"+
                                 (parseFloat(pool7.levelThreeIncome)+parseFloat(pool7.levelTwoIncome)+parseFloat(pool7.levelOneIncome))
                                 :"$0"}
                            </td>
                        </tr>
                 
                               
                                )
                           }  </tbody>
                   </table>

                   <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                       <button
                       disabled={ !this.state.Active || this.state.userdata.poolSeven || !this.state.pool7pins_length }
                       className="btn btn-sm"
                       onClick={() => this.handlePoolSeven()}
                       >
                           Join
                       </button>
                      
                      <select id="pool_Seven_Pin" style={{fontSize:"10px"}} className="form-control ">
                           {
                               this.state.userdata.poolSevenPins && this.state.userdata.poolSevenPins.map(pin =>
                               <option value={pin}>{pin}</option>
                               )
                           }
                       </select>

                   </div>
                  
                   </div>

                           {/* pool-8-table */}
                   <div style={{margin:"2% 0%"}}>
                   
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    DIAMOND TREASURE

                    </div>

                   <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
               fontSize:"10px",color:"black"}}>
                       {!this.state.userdata.poolEight?this.state.pool8pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                   </div>
                   <table id="customers">
                       <thead>
                           <tr>
                                <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                           </tr>
                           <tr >
                              <td colspan={8}> {this.state.userdata.poolEight?"Running...":"Join"}</td>
                           </tr>
                       </thead>
                       <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                           {
                               this.state.pool8Details && this.state.pool8Details.map(
                                   pool8 =>
                                   
                            <tr>
                            <td>{++i8}</td>
                            <td>{this.userdata.poolEight?pool8.levelOne:0}</td>
                            <td>{this.userdata.poolEight?"$"+(pool8.levelOneIncome):"$0"}</td>
                        
                            <td>{this.userdata.poolEight?pool8.levelTwo:0}</td>
                            <td>{this.userdata.poolEight?"$"+(pool8.levelTwoIncome):"$0"}</td>
                        
                        
                            <td>{this.userdata.poolEight?pool8.levelThree:0}</td>
                            <td>{this.userdata.poolEight?"$"+(pool8.levelThreeIncome):"$0"}</td>
                     
                       
                            
                            <td>
                            {this.userdata.poolEight?"$"+
                                 (parseFloat(pool8.levelThreeIncome)+parseFloat(pool8.levelTwoIncome)+parseFloat(pool8.levelOneIncome))
                                 :"$0"}
                            </td>
                        </tr>
                       

                               )
                           }
                           
                       </tbody>
                   </table>

                   <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                       <button
                       disabled={!this.state.Active || this.state.userdata.poolEight || !this.state.pool8pins_length }
                       className="btn btn-sm"
                       onClick={() => this.handlePoolEight()}
                       >
                           Join
                       </button>
                      
                      <select id="pool_Eight_Pin" style={{fontSize:"10px"}} className="form-control ">
                           {
                               this.state.userdata.poolEightPins && this.state.userdata.poolEightPins.map(pin =>
                               <option value={pin}>{pin}</option>
                               )
                           }
                       </select>

                   </div>
                  
                   </div>


               </div>
                    
               <div style={{width:"100%",margin:"20px 0px",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around"}}>
                   

                    {/* pool-9-table */}
                   <div style={{margin:"2% 0%"}}>
                   
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black"}}>

                                    DOUBLE DIAMOND TREASURE

                    </div>

                   <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
               fontSize:"10px",color:"black"}}>
                       {!this.state.userdata.poolNine?this.state.pool9pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                   </div>
                   <table id="customers">
                       <thead>
                           <tr>
                                <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                           </tr>
                           <tr >
                              <td colspan={8}> {this.state.userdata.poolNine?"Running...":"Join"}</td>
                           </tr>
                       </thead>
                       <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                           {
                               this.state.pool9Details && this.state.pool9Details.map(pool9 =>
                                
                                
                            <tr>
                            <td>{++i9}</td>

                            <td>{this.userdata.poolNine?pool9.levelOne:0}</td>
                            <td>{this.userdata.poolNine?"$"+(pool9.levelOneIncome):"$0"}</td>
                        
                            <td>{this.userdata.poolNine?pool9.levelTwo:0}</td>
                            <td>{this.userdata.poolNine?"$"+(pool9.levelTwoIncome):"$0"}</td>
                        
                            <td>{this.userdata.poolNine?pool9.levelThree:0}</td>
                            <td>{this.userdata.poolNine?"$"+(pool9.levelThreeIncome):"$0"}</td>
                        
                            <td>
                            {this.userdata.poolNine?"$"+
                                 (parseFloat(pool9.levelThreeIncome)+parseFloat(pool9.levelTwoIncome)+parseFloat(pool9.levelOneIncome))
                                 :"$0"}
                            </td>
                        </tr>
                  
                                )
                           } </tbody>
                   </table>

                   <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                       <button
                       disabled={!this.state.Active || this.state.userdata.poolNine || !this.state.pool9pins_length }
                       className="btn btn-sm"
                       onClick={() => this.handlePoolNine()}
                       >
                           Join
                       </button>
                      
                      <select id="pool_Nine_Pin" style={{fontSize:"10px"}} className="form-control ">
                           {
                               this.state.userdata.poolNinePins && this.state.userdata.poolNinePins.map(pin =>
                               <option value={pin}>{pin}</option>
                               )
                           }
                       </select>

                   </div>
                  
                   </div>

                    {/* pool-10-table */}
                   <div style={{margin:"2% 0%"}}>
                   
                    <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"16px",color:"black",}}>

                                    TRIPLE DIAMOND TREASURE

                    </div>

                   <div style={{padding:"1% 0px",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"10px",color:"black"}}>
                       {!this.state.userdata.poolTen?this.state.pool10pins_length?"Don't Wait Join Now":"Buy Pins To Join":" In Progress "}
                   </div>
                   <table id="customers">
                       <thead>
                           <tr>
                                <th>Sno</th>
                                <th>L-1-M</th>
                                <th>L-1-A</th>
                                <th>L-2-M</th>
                                <th>L-2-A</th>
                                <th>L-3-M</th>
                                <th>L-3-A</th>
                                <th>Total</th>
                           </tr>
                           <tr >
                              <td colspan={8}> {this.state.userdata.poolTen?"Running...":"Join"}</td>
                           </tr>
                       </thead>
                       <tbody style={{maxHeight:"100px",overflow:"scroll"}}>
                           {
                               this.state.pool10Details && this.state.pool10Details.map(pool10 => 

                                
                            <tr>
                            <td>{++i10}</td>
                            <td>{this.userdata.poolTen?pool10.levelOne:0}</td>
                            <td>{this.userdata.poolTen?"$"+(pool10.levelOneIncome):"$0"}</td>
                       
                            
                            <td>{this.userdata.poolTen?pool10.levelTwo:0}</td>
                            <td>{this.userdata.poolTen?"$"+(pool10.levelTwoIncome):"$0"}</td>
                        
                           
                            <td>{this.userdata.poolTen?pool10.levelThree:0}</td>
                            <td>{this.userdata.poolTen?"$"+(pool10.levelThreeIncome):"$0"}</td>
                        
                            <td>
                            {this.userdata.poolTen?"$"+
                                 (parseFloat(pool10.levelThreeIncome)+parseFloat(pool10.levelTwoIncome)+parseFloat(pool10.levelOneIncome))
                                 :"$0"}
                            </td>
                       
                        </tr>
                        

                                )
                           }
                       </tbody>
                   </table>

                   <div style={{margin:"1% 0px",padding:"1% 0px",display:"flex",alignItems:"center"}}>
                       <button
                       disabled={!this.state.Active || this.state.userdata.poolTen || !this.state.pool10pins_length }
                       className="btn btn-sm"
                       onClick={() => this.handlePoolTen()}
                       >
                           Join
                       </button>
                      
                      <select id="pool_Ten_Pin" style={{fontSize:"10px"}} className="form-control ">
                           {
                               this.state.userdata.poolTenPins && this.state.userdata.poolTenPins.map(pin =>
                               <option value={pin}>{pin}</option>
                               )
                           }
                       </select>

                   </div>
                  
                   </div>


               </div>

               

              </div>
        )
    }
}