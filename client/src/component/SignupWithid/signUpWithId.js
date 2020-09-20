import React ,{Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import SignupPart1 from './Signup_pat1';
import SignupPart2 from './signUp_part2';
import { useHistory } from 'react-router-dom';



 class SignupWithId extends Component{

  constructor(){
   super();
   this.state = {
      details: "",
     display: false,

   }
  }

  componentDidMount(){

    document.getElementById('id023').style.display='block'

    console.log(this.props.match.params.id);

    this.setState({
        display: false,
        details : ""
      })

  }


  handleEnter = () => {

    
    // Get the modal
   //  var window1 = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   console.log(event.target);
    //   if (event.target == window1) {
    //     window1.style.display = "none";
    //   }
    // }

    

  }

  render(){
    return(
      <div>
         {/* <Button size="small"  style={{padding:"0px 20px"}} 
           onClick={() => this.handleEnter()} 
           color="inherit">Sign up</Button> */}
       
          {/* <!-- The Modal --> */}
          <div id="id023" className="modalSignup">
            <span onClick={() => {
                document.getElementById('id023').style.display='none'

            }}
            className="close" title="Close Modal">&times;</span>

           {  
          
                !this.state.display && <SignupPart1 referalId={this.props.match.params.id} changes={(data) => this.setState({display : true,details : data })}></SignupPart1>
          
           }

    {  
          
          this.state.display && <SignupPart2 data={this.state.details}> </SignupPart2> 
    
     }
          
          </div>
    
      </div>
    )
  }
}
export default SignupWithId;





 