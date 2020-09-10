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
        label: 'Status',
        field: 'status',
        
      }
    ],
    rows:[]
  };

class LevelNine extends React.Component {

    constructor(){
        super();
        this.state={
          data1:{},
    
        }
         
      }


      async componentDidMount(){

        const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
        console.log(this.props.data);
       
        if(this.props.data.length > 0){
          await Axios.post('/api/users/getLevelArrayDetails',
          {
              useridsArray: this.props.data
          })
          .then(res => {
            console.log(res.data.users);

           if(parseInt(res.data.status) === 1)
           {
             this.createTable(res.data.users);
               console.log(data);
              
           }
           
         })
       } 
       else
       {
         this.setState({
           data1: data
         })
       }
    
    }

    createTable = (members)=> {
      let i = 0;
      console.log(members);
    {members && members.map(Direct => {
            i++
            const obj = {
              Sno: i,
              userId:Direct.userId,
              Name: Direct.firstName+Direct.lastName,
              Mail: Direct.mailId,
              Date: new Date(Direct.joiningDate).toLocaleDateString(),
              status: Direct.Active === "true"?"Active":"Inactive"
            }
    
             data.rows.push(obj);
    } )
    }
    this.setState({data1:data})
    }

    render(){
        return(
            <div>

                    <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    margin:"2% 0%",
                    fontSize:"20px",
                    fontWeight:"500"
                    }}>
                            LEVEL NINE
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
                      
                      data={this.state.data1}
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
        )
    }

}

export default LevelNine;