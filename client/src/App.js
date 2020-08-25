import React from 'react';
import './App.css';
import './Login/login.css'
 import Typography from '@material-ui/core/Typography';
 import Grid from '@material-ui/core/Grid'
 import Aboutus from './component/Aboutus'
 import Dashboard from './Dashboard/Dashboard';
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

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      render: <Home></Home>,
      login:""
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
      render: <Dashboard data={userdata}></Dashboard>
    })
   }else{
    this.setState({
      login: false,
    })
   }
  
   
 }

 componentWillUnmount(){
   sessionStorage.clear();
 }

 handleLogin = () => {
   sessionStorage.setItem("LOGIN",JSON.stringify(true));
   this.setState({login: JSON.parse(sessionStorage.getItem('LOGIN')), render: <Dashboard></Dashboard> })
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
    {!this.state.login && <Navbar 
        onClick1={(e) =>  this.setState({ render: <Home></Home>})}
        onClick2={(e) => this.setState({ render: <About></About>})}
        onClick3={(e) => this.setState({ render: <Bussiness_plan></Bussiness_plan>})}
        Signup={ <Signup ></Signup>}
        Login={ <Login ></Login>}
     
        ></Navbar>}
        {this.state.render}

     {/* {this.props._login && <div> <Dashboard></Dashboard></div> }  */}
      {/* // <Dashboard></Dashboard> */}
    </div>
  );
  }
}
const mapStateToProps = (state) => {
  return {
    _login: state.login,
  }
}
export default App;

