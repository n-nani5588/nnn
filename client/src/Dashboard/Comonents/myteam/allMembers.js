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
        label: 'Name',
        field: 'Name',
        
      },
      {
        label: 'Mail',
        field: 'Mail',
        
      },
      {
        label: 'Joining date',
        field: 'Date',
        sort: 'desc'
      },
      {
        label: 'Deposit',
        field: 'Deposit',
        
      }
    ],
    rows:[]
  };
 
  let levelArray = [];


class AllMembers extends React.Component {


  async componentDidMount(){

    const members = JSON.parse(sessionStorage.getItem("DIRECT_MEMBERS"));
    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
    console.log(members);

    if(!members){
      await Axios.post('/api/users/Direct_Members',{userid: userdata.userId})
      .then(res => {
        console.log(res.data.users);
        if(parseInt(res.data.status) === 1){
          sessionStorage.setItem("DIRECT_MEMBERS",JSON.stringify(res.data.users));
        }
        
      })
    }
    this.createTable(members);

}

createTable = (members)=> {
  let i = 0;
  
{members && members.map(Direct => {
        i++
        const obj = {
          Sno: i,
          userId:Direct.userId,
          Name: Direct.firstName+Direct.lastName,
          Mail: Direct.mailId,
          Date: new Date(Direct.joiningDate).toLocaleDateString(),
          Deposit:parseInt(Direct.autoPoolIncome.$numberDecimal)+parseInt(Direct.fundSharingIncome.$numberDecimal)+parseInt(Direct.levelIncome.$numberDecimal)+parseInt(Direct.recievedIncome.$numberDecimal)
        }

         data.rows.push(obj)
         levelArray.push(Direct.userId);
} )
}

}

    render(){
        return(
          <div style={{margin:"0px",padding:"0px",backgroundColor:"#fff",color:"black"}}>
          <Container maxWidth="lg" className={classes.container}>
               <div style={{display:"flex",justifyContent:"center",margin:"30px",fontSize:"30px",fontWeight:"600",letterSpacing:"2px"}}>
                   <div style={{borderBottom:"1px solid green"}}>All Team</div>
               </div>
    
    
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
            </Container> 
          
        </div>
        )
      }
}

export default AllMembers;