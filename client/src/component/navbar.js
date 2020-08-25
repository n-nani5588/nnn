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
          <div>
                <nav style={{width:"100%",height:"6%"}}>
                     <Grid container >
                         <Grid item xs={12} sm={4} justifyContent="center">
                            <div className="containertext" > 
                                <span className="Containertext-span">
                                    FACebook
                                </span>
                            </div>
                         </Grid >
                         <Grid item xs={12} sm={8} >
                             <Header></Header>
                         </Grid>
                         <Grid item xs={12} sm={12}>
                           <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"10vh"}}>
                                 
                           <div className="NavButtoncontainer red topBotomBordersOut">
                            
                            {/* <Link to="/"  >  */}
                            <span onClick={() => this.props.onClick1()}>HOME</span>
                            {/* </Link> */}
                            </div>

                            <div className="NavButtoncontainer red topBotomBordersOut">
                            {/* <Link to="/About" >  */}
                            <span onClick={() => this.props.onClick2()}>ABOUT</span>
                            {/* </Link> */}
                            </div>
                          
                            <div className="NavButtoncontainer red topBotomBordersOut">
                            {/* <Link to="/Plan" >  */}
                            <span onClick={() => this.props.onClick3()}>Bussiness Plan</span>
                            {/* </Link> */}
                            </div>

                            {/* <div className="NavButtoncontainer red topBotomBordersOut">
                            <Link to="/Contact" > 
                            <span>Contact Us</span>
                            </Link>
                            </div> */}
                                 
                           {this.props.Signup}
                                
                          
                            {this.props.Login}
                          
                          
                           </div>
                        </Grid>
                    </Grid> 
                </nav>
          </div>
        );
    }
}

export default Navbar;