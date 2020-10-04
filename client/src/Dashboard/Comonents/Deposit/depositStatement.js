import React from 'react';
import './deposit.css';
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
import axios from 'axios';


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
  
  let data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'Date',
        field: 'date',
      },
      {
        label: 'User Id',
        field: 'userid',
      },
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Amount',
        field: 'amount',
      },
      {
        label: 'Send To',
        field: 'send',
      },
      {
        label: 'Hash Code',
        field: 'hash',
      },
      {
        label: 'Status',
        field: 'status',
      },
    ],
    rows: []
  };
 


class DepositStatement extends React.Component{

    constructor(){
      super();
      this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
      this.state = {
        data1: "",
        Loading: false,
      }
    }

    componentDidMount(){

      this.setState({
        Loading: true
      })

     try{
              axios.get( `/api/users/DepositStatment/${this.userdata.userId}`)
              .then(res => {
                if(parseInt(res.data.status) === parseInt(1))
                {
                    this.createTable(res.data.statements)
                }
                else
                {
                    this.setState({data1 : data ,Loading: false})
                }
              }).catch(err => {
                    this.setState({data1 : data ,Loading: false})
              })
        }
        catch(err)
        {
               this.setState({data1 : data ,Loading: false})
        }
    }

    createTable = (members) => {

      let i = 0;
      data.rows = [];

      {members && members.map(Direct => {
            i++
          const obj = {

                Sno : i,
                amount : Direct.Amount,
                name: Direct.Name,
                date: new Date(Direct.date).toLocaleDateString(),
                send : Direct.SentBTCaddress,
                hash : Direct.HashCode,
                userid: Direct.userId,
                status : Direct.success

          }

          data.rows.push(obj)

      })}

      this.setState({
        data1 : data,
        Loading : false
      })

    }

    render()
    {
        return(   <div style={{margin:"0px",padding:"2% 10%"}}>
                    <div className="Send_Fund_Container">
                            <div className="Send_Fund_header" >
                               Deposit History
                            </div>
                            <div className="Send_Fund_body">
                              {/* Recent Orders */}
                                        <Grid item xs={12}>
                                        <Paper className={classes.paper} elevate={3}>
                                        <div style={{padding:"3%"}}>
                                        <React.Fragment>
                                
                        {this.state.Loading ? 

                        (<div style={{
                          width:"100%",
                          display: "flex",
                          justifyContent:"center",
                          alignItems:"center",
                          padding: "2% 0%",
  
                        }}>
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

export default DepositStatement;