import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MailTwoTone';
import Button from '@material-ui/core/Button';
import './header.css';
import Login from '../Login/login'
import {Link} from 'react-router-dom';
import SignUp from '../Signup';

const useStyles = makeStyles((theme) => ({
  appbar:{
    backgroundColor:" #01416F",
    justifyContent:"right",
    color:"#ffdf00"
    
  },
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  
      <AppBar position="static" justifyContent="end" className={classes.appbar}>
        <Toolbar variant="dense">
         
          <MenuIcon />
          <Typography variant="h6" color="inherit" >
           Facebook@gmail.com
          </Typography>
          {/* <Link to="/"  > 
              <span  style={{color:"white",padding:"0px 20px",fontSize:"12px",fontWeight:"bold",fontFamily:"roboto"}}>
               Home
              </span>
           </Link>
          <Link to="/About" > 
              <span  style={{color:"white",padding:"0px 20px",fontSize:"12px",fontWeight:"bold",fontFamily:"roboto"}}>
                ABOUT
              </span> 
          </Link>
          <SignUp></SignUp>
          <Login></Login>
          */}
          </Toolbar> 
      </AppBar>
</div>
  );
}
