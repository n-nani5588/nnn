import React from 'react';
import './fundWallet.css'
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
import Axios from 'axios';

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
        label: 'user Id',
        field: 'userId',
      },
      {
        label: 'Send To',
        field: 'sendto',
      },
      {
        label: 'Received from',
        field: 'recfrom',
      },
      {
        label: 'Name',
        field: 'Name',
      },
      {
        label: 'Email',
        field: 'Mail',
      },
      {
        label: 'Date',
        field: 'Date',
        sort: 'desc'
      },
      {
        label: 'Amount',
        field: 'Amount',
      }
    ],
    rows:[]
  };
 

class FundStatement extends React.Component{

  constructor(){
    super();
    this.state={
      data1:{},
      Loading : false
    }
     
  }


  async componentDidMount(){

    this.setState({
      Loading : true
    })

    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
    const row = data.rows;

    console.log(row);

    try{
              await Axios.post('/api/users/Fund_Statement',{userid: userdata.userId})
              .then(res => {

                      console.log(res.data.users);
                      if(parseInt(res.data.status) === parseInt(1)){
                        this.createTable(res.data.users);
                          console.log(data);
                          this.setState({data1:data ,Loading : false})
                      }
                      else
                      {
                        this.setState({data1:data ,Loading : false})
                      }
                      
              }).catch(err =>{

                   this.setState({data1:data ,Loading : false})

              })
      }
      catch(err)
      {
           console.log(" ");
           this.setState({data1:data ,Loading : false})
      }    
}

createTable= (members)=> {
  let i = 0;
  data.rows=[];
     members.map(Direct => {
        i++
        const obj = {
          Sno: i,
          userId:Direct.userId,
          sendto: Direct.Sendto,
          recfrom : Direct.RecievedFrom,
          Name: Direct.firstName+Direct.lastName,
          Mail: Direct.mailId,
          Date: new Date(Direct.joiningDate).toLocaleDateString(),
          Amount: Direct.Amount.$numberDecimal
      }

         data.rows.push(obj)
} )

}

    render()
    {
        return(   <div style={{margin:"0px",padding:"2% 10%"}}>
                    <div className="Send_Fund_Container">
                            <div className="Send_Fund_header" >
                                Fund statement
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
                                    <Box pt={4}>
                                        <Copyright />
                                    </Box>
                            </div>
                    </div>
        </div>)
    }
}

export default FundStatement;