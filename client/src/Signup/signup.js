import React ,{Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import SignupPart1 from './Signup1';
import SignupPart2 from './Signup2';
import './signup.css';



 class Signup extends Component{

  constructor(props){
   super(props);
   this.state = {
     password:"",
     confirmPassword:"",
     First_Name:"",
     Last_Name:"",
     _email:"",
      details: "",
     display: false,

   }
  }


  handleEnter = () => {

    document.getElementById('id02').style.display='block'
    // Get the modal
   //  var window1 = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   console.log(event.target);
    //   if (event.target == window1) {
    //     window1.style.display = "none";
    //   }
    // }

    this.setState({
      display: false,
      details : ""
    })

  }

  render(){
    return(
      <div>
         <Button size="small"  style={{padding:"0px 20px"}} 
           onClick={() => this.handleEnter()} 
           color="inherit">Sign up</Button>
       
          {/* <!-- The Modal --> */}
          <div id="id02" className="modalSignup">
            <span onClick={() => document.getElementById('id02').style.display='none'}
            className="close" title="Close Modal">&times;</span>

           {  
          
                !this.state.display && <SignupPart1 changes={(data) => this.setState({display : true,details : data })}></SignupPart1>
          
           }

    {  
          
          this.state.display && <SignupPart2 data={this.state.details}> </SignupPart2> 
    
     }
          
          </div>
    
      </div>
    )
  }
}
export default Signup;





 