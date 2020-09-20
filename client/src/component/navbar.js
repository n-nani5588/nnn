import React, { Component } from 'react';
import Header from './header'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './css/navbar.css';
import SignUp from '../Signup';
import Login from '../Login/login'


class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (


            
<nav style={{backgroundColor:"#24355C"}} className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">

<div className="container">

    {/* <!-- Navbar brand --> */}
    <a className="navbar-brand" href="#">GENIEE TREASURES</a>

    {/* <!-- Collapse button --> */}
    <button className="navbar-toggler" onClick={() => this.handleNav()}  type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    {/* <!-- Collapsible content --> */}
    <div className="collapse navbar-collapse" id="basicExampleNav">

        {/* <!-- Links --> */}
        <ul className="navbar-nav mr-auto smooth-scroll">
            <li className="nav-item">
                <a className="nav-link" href="#About" onClick={() => this.props.onClick1()}>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#best-features" onClick={() => this.props.onClick2()}>About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#examples" onClick={() => this.props.onClick3()}>Bussiness Plan</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#gallery">{this.props.Signup}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">{this.props.Login}</a>
            </li>
        </ul>
        {/* <!-- Links --> */}

        {/* <!-- Social Icon  --> */}
        <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
                <a className="nav-link"><i class="fab fa-facebook"></i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><i class="fab fa-twitter"></i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>
    </div>
    {/* <!-- Collapsible content --> */}

</div>

</nav>


        //   <div>
        //         <nav style={{width:"100%",height:"6%"}}>
        //              <Grid container >
        //                  <Grid item xs={12} sm={4} justifyContent="center">
        //                     <div className="containertext" > 
        //                         <span className="Containertext-span">
        //                             FACebook
        //                         </span>
        //                     </div>
        //                  </Grid >
        //                  <Grid item xs={12} sm={8} >
        //                      <Header></Header>
        //                  </Grid>
        //                  <Grid item xs={12} sm={12}>
        //                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"10vh"}}>
                                 
        //                    <div className="NavButtoncontainer red topBotomBordersOut">
                            
        //                     {/* <Link to="/"  >  */}
        //                     <span onClick={() => this.props.onClick1()}>HOME</span>
        //                     {/* </Link> */}
        //                     </div>

        //                     <div className="NavButtoncontainer red topBotomBordersOut">
        //                     {/* <Link to="/About" >  */}
        //                     <span onClick={() => this.props.onClick2()}>ABOUT</span>
        //                     {/* </Link> */}
        //                     </div>
                          
        //                     <div className="NavButtoncontainer red topBotomBordersOut">
        //                     {/* <Link to="/Plan" >  */}
        //                     <span onClick={() => this.props.onClick3()}>Bussiness Plan</span>
        //                     {/* </Link> */}
        //                     </div>

        //                     {/* <div className="NavButtoncontainer red topBotomBordersOut">
        //                     <Link to="/Contact" > 
        //                     <span>Contact Us</span>
        //                     </Link>
        //                     </div> */}
                                 
        //                    {this.props.Signup}
                                
                          
        //                     {this.props.Login}
                          
                          
        //                    </div>
        //                 </Grid>
        //             </Grid> 
        //         </nav>
        //   </div>
       
       );
    }
}

export default Navbar;