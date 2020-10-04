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
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import './fundWallet.css'

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
      },
      // {
      //   label: 'Message',
      //   field: 'message',
      // },
      {
        label: 'Amount',
        field: 'amount',
      },
      {
        label: 'Date',
        field: 'date',
      },
    ],
    rows: []
  };
 



class FundSharing extends React.Component{

  constructor(){
    super();
    this.state={
      data1:{},
      Loading: false
    }
     
  }

  async componentDidMount(){

    this.setState(
      {
        Loading : true
      }
    )

    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
    const row = data.rows;
  
           console.log(row);
  
     try{  
                await axios.post('/api/users/GetFundSharing',{userid: userdata.userId})
                .then(res => {

                          console.log(res.data.users);
                          if(parseInt(res.data.status) === parseInt(1)){
                                this.createTable(res.data.users);
                                console.log(data);
                                this.setState({data1:data , Loading: false})
                          }
                          else
                          {
                             this.setState({data1:data , Loading: false})
                          }
                  
                }).catch(err => {
                    this.setState({data1:data , Loading: false})
                })
      }
      catch(err)
      {
            
           console.log(" ");
           this.setState({data1:data , Loading: false})

      }
        
  
    }

    createTable= (members)=> {
      let i = 0;
      console.log(members);
      data.rows = []
    members.map(Direct => {
            i++
            const obj = {
              Sno: i,
             
              date: new Date(Direct.Date).toLocaleDateString(),
              amount: Direct.Amount.$numberDecimal
            }

             data.rows.push(obj)
    } )
  
}

    render()
    {
        
            return(   <div style={{margin:"0px",padding:"2% 10%"}}>
                    <div className="Send_Fund_Container">
                            <div className="Send_Fund_header" >
                                Fund Sharing income
                            </div>
                            <div className="Send_Fund_body">
                              {/* Recent Orders */}
                                        <Grid item xs={12}>
                                        <Paper className={classes.paper} elevate={3}>
                                        <div style={{padding:"3%"}}>
                                        <React.Fragment>
                                
                        
                      {this.state.Loading ? 
                        
                        (<div style={
                          {
                           width:"100%",
                           display: "flex",
                           justifyContent:"center",
                           alignItems:"center",
                           padding: "2% 0%"
                          }
                        }>
                           Loading...
                        </div>)
                        :
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
                               
                               data={this.state.data1}
                               />
                        
                        }
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
                                   
                            </div>
                    </div>
        </div>)
   
        
    }
}

export default FundSharing;