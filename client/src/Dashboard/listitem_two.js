import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import Divider from '@material-ui/core/Divider';
import { colors } from '@material-ui/core';




export default class ListItem_Two extends React.Component {

  constructor(props){
    super(props);
  }

componentDidMount(){
  
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
      }
      }

 handleLogout = () => {
   console.log("logout");

  sessionStorage.setItem("LOGIN",JSON.stringify(false));
  
  window.location.reload()

  }

render (){
    return(
        <div className="Side_Nav_Scroll_Control" >
         
          {/* Slide start */}
          <div className="side_bar"> 

             {/* Dashboard */}
             <Link to="/App"> <div  className="div_tag bodder_left_2">
              <span style={{color:"#006B94"}}><DashboardRoundedIcon fontSize="large"/></span> 
              <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Dashboard</span>
             </div>
             </Link> 
            <Divider/>
            
            {/* My Account */}
             <div className="dropdown-btn div_tag bodder_left_1">
               {/* <i className="fas fa-cogs"></i> */}
               <span style={{color:"#006B94"}}><AccountBoxRoundedIcon fontSize="large"/></span>
               <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>My Account</span>
             </div>
             <div className="dropdown-container">
                          <Link to="/App/profile">   <span className="div_tag">Profile</span> </Link>
                          <Link to="/App/update_password">   <span className="div_tag">Update Password</span></Link>
                          <Link to="/App/update_Transition_Password">   <span className="div_tag" style={{lineHeight:"25px"}}>Update Transaction <br/>- Password</span></Link>
                          <Link to="/App/update_wallet_address">   <span className="div_tag">Update Wallet address</span></Link>
             </div> 
            <Divider/>

             {/* My Team */}
             <div  className="dropdown-btn div_tag bodder_left_3">
               {/* <i className="fas fa-table"></i> */}
               <span style={{color:"#006B94"}}><SupervisorAccountIcon fontSize="large"/ ></span>
               <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>My Team</span>
             </div>
             <div className="dropdown-container ">
                          <Link to="/App/Direct_members">  <span className="div_tag">Direct Team</span></Link>
                          <Link to="/App/All_members">     <span className="div_tag">All Team</span></Link>
                          <Link to="/App/Pool_team">  <span className="div_tag">Treasure </span></Link>
                          </div>
             <Divider/>

              {/* Fund Wallet */}
              <div  className="dropdown-btn div_tag bodder_left_3">
               {/* <i className="fas fa-table"></i> */}
               <span style={{color:"#006B94"}}><AccountBalanceWalletRoundedIcon fontSize="large"/ ></span>
               <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Fund Wallet</span>
             </div>
              <div className="dropdown-container ">
                          <Link to="/App/Send_Fund">  <span className="div_tag">Send Fund</span></Link>
                          <Link to="/App/Send_Fund_To_Pin_Wallet">     <span className="div_tag">send fund to pin wallet</span></Link>
                          <Link to="/App/Fund_Statement">  <span className="div_tag">statement</span></Link>
                          <Link to="/App/Fung_Sharing">     <span className="div_tag">Fund sharing</span></Link>
                      
                       </div>
              <Divider/>

               {/* Deposit */}
               <div  className="dropdown-btn div_tag bodder_left_3">
               {/* <i className="fas fa-table"></i> */}
               <span style={{color:"#006B94"}}><SaveAltIcon fontSize="large"/ ></span>
               <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Deposit</span>
             </div>
               <div className="dropdown-container ">
                          <Link to="/App/Direct_Deposit">  <span className="div_tag">Direct Deposit</span></Link>
                          <Link to="/App/Deposit_statement">     <span className="div_tag">History</span></Link>
                      
                       </div>
               <Divider/>
             {/* Pool Team 
             <div className="dropdown-btn div_tag bodder_left_4">
               {/* <i className="fas fa-th">
                 </i> */}
                 {/* <span style={{color:"#006B94"}}><SupervisedUserCircleIcon fontSize="large"/></span>
                 <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Pool Team</span>
             </div>
             <div className="dropdown-container">
                            <Link> <span className="div_tag">Profile</span></Link>
                            <Link><span className="div_tag">Update Password</span></Link>
                            <Link><span className="div_tag">Update Transition password</span></Link>
                            <Link> <span className="div_tag">Update Wallet address</span></Link>
                          </div>
                          <Divider/> */}

             {/* Pin Wallet */}
             <div  className="dropdown-btn div_tag bodder_left_5">
               {/* <i className="fas fa-info-circle"></i> */}
               <span style={{color:"#006B94"}}><VpnKeyIcon fontSize="large"/></span>
               <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Pin Wallet</span>
            </div>
             <div  className="dropdown-container">
                          <Link to="/App/Activate">  <span className="div_tag">Activate</span></Link>
                          <Link to="/App/Generate_Pin">  <span className="div_tag">Generate Pin</span></Link>
                          <Link to="/App/Available_Pins">  <span className="div_tag">Available Pins</span></Link>
                          <Link to="/App/Pin_Balance">  <span className="div_tag">Pin Balance</span></Link>
              </div>
<Divider/>

             {/* Withdraw */}
             <div className="dropdown-btn div_tag bodder_left_6">
               {/* <i className="fas fa-slider-h"></i> */}
              <span style={{color:"#006B94"}}><MonetizationOnIcon fontSize="large"/></span> 
               <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Withdraw</span>
             </div>
             <div className="dropdown-container">
              <Link to="/App/Withdraw"> <span className="div_tag">Withdraw</span></Link>
              <Link to="/App/Withdraw_statement">  <span className="div_tag">Withdraw statement</span></Link>
                
              </div>
              <Divider/>

            
             {/* Tickets */}
             <div className="dropdown-btn div_tag bodder_left_6">
               {/* <i className="fas fa-slider-h"></i> */}
              <span style={{color:"#006B94"}}><MonetizationOnIcon fontSize="large"/></span> 
               <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Raise Tickets</span>
             </div>
             <div className="dropdown-container">
              <Link to="/App/Raise_Tickets"> <span className="div_tag">Raise Tickets</span></Link>
              <Link to="/App/Old_Tickets">  <span className="div_tag">Old Tickets</span></Link>
                
              </div>
              <Divider/>
            
             {/* Logout */}
{/*              
              <div  className="div_tag bodder_left_2" onClick={() => this.props.click()}>
              <span style={{color:"#006B94"}}><DashboardRoundedIcon fontSize="large"/></span> 
              <span style={{textAlign:"center",paddingLeft:"22px",fontSize:"16px",fontWeight:"500"}}>Logout</span>
             </div> */}
            
             
            <Divider/>
         
          </div>
          {/* Slide End */}
        
        
        </div>   
    )
}
}