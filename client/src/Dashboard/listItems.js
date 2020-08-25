import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './Dashboard.css'
import ListItemTwo from './listitem_two'

export const mainListItems = (
  <div>
    {/* <div className="middle">
         <div className="menu">

            <li className="item1" id="Dashboard">
                <a href="#Dashboard" className="btn1">
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                      Profile
                </a> 
                <div className="smenu">
                  <a href="#">Posts</a>
                  <a href="#">Pictures</a>
                </div> 
            </li>

            <li className="item1" id="messages">
                <a href="#messages" className="btn1"><i class="far fa-user"></i>menus</a> 
                <div className="smenu">
                  <a href="#">Posts</a>
                  <a href="#">Pictures</a>
                  <a href="#">Price</a>
                  <a href="#">Posts</a>
                </div> 
            </li>

            <li className="item1" id="Item_03">
                <a href="#Item_03" className="btn1"><i class="far fa-user"></i>settings</a> 
                <div className="smenu">
                  <a href="#">Posts</a>
                  <a href="#">Pictures</a>
                </div> 
            </li>

            <li className="item1" id="Item_04">
                <a href="#Item_04" className="btn1"><i class="far fa-user"></i>Profile</a> 
                <div className="smenu">
                  <a href="#">Posts</a>
                  <a href="#">Pictures</a>
                </div> 
            </li>

            <li className="item1" id="Item_05">
                <a href="#Item_05" className="btn1"><i class="far fa-user"></i>Logout</a>
            </li>
         </div>

    </div>
      */}

    <ListItemTwo></ListItemTwo>
   
 </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
     {/* Dashboard*/}
     <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem> 
    {/* My Account */}
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    {/* My Team */}
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="My Team" />
    </ListItem>
    {/* Top Up */}
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Top Up" />
    </ListItem>
    {/* Activation Key */}
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Activation Key" />
    </ListItem>
    
    {/* Withdraw */}
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Withdraw" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button> 
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>*/}
  </div>
);