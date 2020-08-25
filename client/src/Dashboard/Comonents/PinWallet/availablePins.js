import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { MDBDataTable } from 'mdbreact';


const classes = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(4),
      },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
  }));

  function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
        sort: "asc",
        width: 150
      },
      {
        label: 'Pin',
        field: 'Pins',
        sort: 'asc',
        width: 270
      }
      
    ],
    rows:[]
  };
 

class AvailablePins extends React.Component {


  componentDidMount(){

    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
    this.createTable(userdata.availablePins);
  }

  createTable= (members)=> {
    let i = 0;
   
  members.map(Direct => {
          i++
          const obj = {
            Sno: i,
            Pins : Direct
          }
  
           data.rows.push(obj)
  } )
  
  }

  componentWillUnmount(){
    data.rows = [];
 }

    render(){
      return(   <div style={{margin:"0px",padding:"2% 10%"}}>
      <div className="Send_Fund_Container">
              <div className="Send_Fund_header" >
                 Available Pins
              </div>
              <div className="Send_Fund_body">
                {/* Recent Orders */}
                          <Grid item xs={12}>
                          <Paper className={classes.paper} elevate={3}>
                          <div style={{padding:"3%"}}>
                          <React.Fragment>
                  
          
                              <MDBDataTable
                              striped
                              bordered
                              sortable={false}
                              theadColor="#fff"
                              entries={7}
                              small
                              noBottomColumns
                              responsiveSm
                              responsiveMd
                              
                              data={data}
                              />
                              {/* <div className={classes.seeMore}>
                              
                                  <Link color="primary" href="#" >
                                  See more orders
                                  </Link>
                              </div> */}
                              </React.Fragment>
                          </div>
                          </Paper>
                          </Grid>
                      {/* </Grid> */}
                      <Box pt={4}>
                          <Copyright />
                      </Box>
              </div>
      </div>
</div>)

    }
}

export default AvailablePins;