import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MailIcon from '@material-ui/icons/Mail'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../Dashboard/listItems';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import DashboardComponent from './Comonents/Dashboard_component';
import { BrowserRouter as Router,Route,Switch, BrowserRouter } from "react-router-dom";
import './Comonents/Dashboard_component.css';
import LastItemTwo from './listitem_two'; 
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';


import Profile from './Comonents/myaccount/profile_component';
import UpdatePassword from './Comonents/myaccount/updatepassword';
import UpdateTransitionPassword from './Comonents/myaccount/updateTransitionPsd';
import UpdateWalletAddress from './Comonents/myaccount/updateWalletAddress';

import AllMembers from "./Comonents/myteam/allMembers";
import DirectMembers from "./Comonents/myteam/directMembers";
import PoolTeam from './Comonents/myteam/poolTeam';

import WithdrawStatement from "./Comonents/withdraw/withdrawStatement";
import Withdrawal from "./Comonents/withdraw/withdrawal";

import  Activate  from "./Comonents/PinWallet/activate";
import  PinBalance from "./Comonents/PinWallet/pinBalance";
import  GeneratePin from "./Comonents/PinWallet/generatePin";
import  AvailablePins  from "./Comonents/PinWallet/availablePins";

import SendFund from './Comonents/FundWallet/sendFund';
import FundStatement from './Comonents/FundWallet/fundStatment';
import FundSharing from './Comonents/FundWallet/fundSharing';
import SendFundToPinWallet from './Comonents/FundWallet/sendFundToPinWallet';

import DirectDeposit from './Comonents/Deposit/directDeposit';
import DepositStatement from './Comonents/Deposit/depositStatement'; 

import Oldtickets from './Comonents/Tickets/oldtickets';
import Tickets from './Comonents/Tickets/tickets';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#0c2233",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    backgroundColor:"#0c2233",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    border:0,

    
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor:"white",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  
  // ---------------------------------------------
 // --------- START MENU OPTIONS -----------------

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  
  // --------------------END------------
   
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
       <BrowserRouter>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow}></div>
          <div className={classes.sectionDesktop}>
{/*           
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            
            
            </IconButton>
            <i className="fa fa-logout"></i>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={(e) => handleMobileMenuOpen(e)}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            {renderMobileMenu}
            {renderMenu}
          </div>
          {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography> */}
          {/* <IconButton color="inherit" > */}
            {/* <div onClick={()=> alert("hi")}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
            </div>
            <div>
            <Badge badgeContent={4} color="secondary">
                <MailIcon />
            </Badge>
            </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
      
      <div  >
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div>
        <div className="py-4 px-3  bg-light">
              <div className="media d-flex align-items-center">
                <img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"/>
                <div className="media-body">
                  <h4 className="m-0" style={{fontSize:"small"}}>{props.data.userId} </h4>
                  <p className="font-weight-light text-muted mb-0">Member</p>
                </div>
              </div>
            </div>  
        </div>
        {/* <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List> */}
       
        <LastItemTwo
        
        
        ></LastItemTwo>
       
        
         
        
         <Divider />
      </Drawer>
      </div>

        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/* <div class="">
                  <div class="row">
                      <div class="col-md-4 col-xl-3">
                          <div class="card bg-c-blue order-card">
                              <div class="card-block">
                                  <h6 class="m-b-20">Orders Received</h6>
                                  <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>486</span></h2>
                                  <p class="m-b-0">Completed Orders<span class="f-right">351</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
          */}
          
          <Switch>
              <Route path='/' exact component={DashboardComponent} />
              <Route path='/App' exact component={DashboardComponent} />
              <Route path="/App/profile" exact component={Profile}/>
              <Route path="/App/update_password" component={UpdatePassword} />
              <Route path="/App/update_Transition_Password" component={UpdateTransitionPassword} />
              <Route path="/App/update_wallet_address" component={UpdateWalletAddress} />              <Route path="/Direct_members" component={DirectMembers}></Route>
             
              <Route path="/App/All_members" component={AllMembers} />
              <Route path="/App/Direct_members" component={DirectMembers} />
              <Route path="/App/Pool_team" component={PoolTeam} />
              
              <Route path="/App/Activate" component={Activate} />
              <Route path="/App/Generate_Pin" component={GeneratePin} />
              <Route path="/App/Available_Pins" component={AvailablePins} />
              <Route path="/App/Pin_Balance" component={PinBalance} />
              
              <Route path="/App/Send_Fund" component={SendFund} />
              <Route path="/App/Send_Fund_To_Pin_Wallet" component={SendFundToPinWallet} />
              <Route path="/App/Fund_Statement" component={FundStatement} />
              <Route path="/App/Fung_Sharing" component={FundSharing}/>
              
              <Route path="/App/Withdraw" component={Withdrawal} />
              <Route path="/App/Withdraw_statement" component={WithdrawStatement} />

              <Route path="/App/Raise_Tickets" component={Tickets} />
              <Route path="/App/Old_Tickets" component={Oldtickets} />
              
              <Route path="/App/Direct_Deposit" component={DirectDeposit} />
              <Route path="/App/Deposit_statement" component={DepositStatement} />
        </Switch>
         

      </main>
      </BrowserRouter>
    </div>
  );
}