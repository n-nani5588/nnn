import React from 'react';
import './App.css';
import './Login/login.css'
 import Typography from '@material-ui/core/Typography';
 import Grid from '@material-ui/core/Grid'
 import Aboutus from './component/Aboutus'
 import Dashboard from './Dashboard/Dashboard';
 import DashboardMain from './Dashboard/DashboardMain';
 import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
 import About from './About';
 import Signup from './Signup';
 import Login from './Login/login'
import Home from './component/Home/Home';
import Paper from '@material-ui/core/Paper'
import Navbar from './component/navbar'
import Bussiness_plan from './Bussiness_Plan/bussiness_plan'
// import Login from './Login/login'
import { connect } from 'react-redux';
import Admin from './Admin/index';
import axios from 'axios';
import ErrorBoundry from './component/ErrorBoundary';
import NavbarPage from './component/newNav';

import Deleteit from './deleteit';

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      render: <Home></Home>,
      login:"",
      toggle: false
    }
  }

 componentDidMount(){
   //login 
   const login = JSON.parse(sessionStorage.getItem('LOGIN'))
   const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
   console.log(userdata);


   if(login){

     this.setState({
          login: true,
          render: <DashboardMain data={userdata}></DashboardMain>,
      })
      

   }
   else
   {
    this.setState({
      login: false,
    })
   }
  
   
 }

 handleNav = () => {

   document.getElementById("basicExampleNav").style.display = !this.state.toggle? "block" : "none"
    this.setState({ toggle: !this.state.toggle })
 }

 componentWillUnmount(){
  sessionStorage.clear();
}

 handleLogin = () => {
   sessionStorage.setItem("LOGIN",JSON.stringify(true));
   this.setState({login: JSON.parse(sessionStorage.getItem('LOGIN')), render: <DashboardMain></DashboardMain> })
 }

  
  render(){
      return (

        <div style={{margin:"0px",padding:"0px",backgroundColor:"white"}}>

         {/* Header Div */}
         {/* {!this.props._login && <div>  */}
        {/* <Router>
           <div> */}
              {/* <Navbar></Navbar>   */}
              {/* <Switch>
                  <Route path="/Admin/c91eb3dc-1ad7-489a-9465-8f5b815b8d50" exact component={Admin}/>
                  <Route path="/About"  component={About}/>
                  <Route path="/Plan" component={Bussiness_plan}></Route> 
                 <Route path="/Signup/:username" exact component={Signup}/>
              </Switch>
           </div>  
     </Router>  */}
      {/*  </div> } */}
        {/* {!this.state.login && <Navbar 
            onClick1={(e) =>  this.setState({ render: <Home></Home>})}
            onClick2={(e) => this.setState({ render: <About></About>})}
            onClick3={(e) => this.setState({ render: <Bussiness_plan></Bussiness_plan>})}
            Signup={ <Signup ></Signup>}
            Login={ <Login ></Login>}
         
        ></Navbar>} */}
         {!this.state.login &&    <NavbarPage 
            onClick1={(e) =>  this.setState({ render: <Home></Home>})}
            onClick2={(e) => this.setState({ render: <About></About>})}
            onClick3={(e) => this.setState({ render: <Bussiness_plan></Bussiness_plan>})}
            Signup={ <Signup ></Signup>}
            Login={ <Login ></Login>}
         ></NavbarPage> }


            {/* ========================================================================== */}

            {/* =========================================================================== */}

          <ErrorBoundry>
        {!this.state.login &&   <div style={{width:"100%",marginTop:"6%"}}></div> }
            {this.state.render}
          </ErrorBoundry>
         {/* {this.props._login && <div> <Dashboard></Dashboard></div> }  */}
          {/* // <Dashboard></Dashboard> */}
          
          {/* <Deleteit></Deleteit> */}
        </div>
      
      );
  }
}

export default App;

