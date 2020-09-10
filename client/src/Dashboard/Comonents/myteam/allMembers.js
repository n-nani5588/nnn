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
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import LevelOne from './levelOne';
import  LevelTwo from './levelTwo';
import LevelThree from './levelThree';
import LevelFour from './levelFour';
import LevelFive from './levelFive';
import LevelSix from './levelSix';
import LevelSeven from './levelSeven';
import LevelEight from './levelEight';
import LevelNine from './levelNine';
import LevelTen from "./levelTen";

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
        
      },
      {
        label: 'Status',
        field: 'status',
        
      }
    ],
    rows:[]
  };
 
  let levelArray = [];


class AllMembers extends React.Component {

  constructor(){
    super();
    this.state={
      data1:{},
      display: "",
      l1: [],
      l2: [],
      l3: [],
      l4: [],
      l5: [],
      l6: [],
      l7: [],
      l8: [],
      l9: [],
      l10: [],
    }
     
  }

  async componentDidMount(){

    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
    const row = data.rows;
  
           console.log(row);
  
      if(row.length === 0){
      await Axios.post('/api/users/All_Members',{userid: userdata.userId})
      .then(res => {
        console.log(res.data.levels);
        if(parseInt(res.data.status) === 1){

          this.setState({
            l1:  res.data.levels[0],
            l2:  res.data.levels[1],
            l3:  res.data.levels[2],
            l4:  res.data.levels[3],
            l5:  res.data.levels[4],
            l6:  res.data.levels[5],
            l7:  res.data.levels[6],
            l8:  res.data.levels[7],
            l9:  res.data.levels[8],
            l10: res.data.levels[9]
          })
          
        }
        
      })
    } else{
      this.setState({
        data1: data
      })
    }

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
          Deposit:parseInt(Direct.autoPoolIncome.$numberDecimal)+parseInt(Direct.fundSharingIncome.$numberDecimal)+parseInt(Direct.levelIncome.$numberDecimal)+parseInt(Direct.recievedIncome.$numberDecimal),
          status: Direct.Active === "true"?"Active":"Inactive"
        }

         data.rows.push(obj);
} )
}

}

    render(){
        return(
          <div style={{margin:"0px",padding:"0px",backgroundColor:"#fff",textTransform:"uppercase",color:"black"}}>
          <Container maxWidth="lg" className={classes.container}>
               <div style={{display:"flex",justifyContent:"center",margin:"30px",fontSize:"30px",fontWeight:"600",letterSpacing:"2px"}}>
                   <div style={{borderBottom:"1px solid green"}}>All Team</div>
               </div>

               <div style={{
                 display:"flex",
                 justifyContent:"flex-start",
                 width:"100%",
                 borderBottom:"1px solid #ccc"}}>

               <MDBDropdown dropright  size="sm">
                  <MDBDropdownToggle caret color="primary">
                    Select Level
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                  <MDBDropdownItem header>LEVEL's</MDBDropdownItem>
                  <MDBDropdownItem divider />
               <MDBDropdownItem onClick={() => this.setState({display: <LevelTwo data={this.state.l2}></LevelTwo>})}>{"LEVEL 2"}</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelThree data={this.state.l3}></LevelThree>})}>{"LEVEL 3"}</MDBDropdownItem>
                   
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelFour data={this.state.l4}></LevelFour>})}>{"LEVEL 4"}</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelFive data={this.state.l5}></LevelFive>})}>{"LEVEL 5"}</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelSix data={this.state.l6}></LevelSix>})}>{"LEVEL 6"}</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelSeven data={this.state.l7}></LevelSeven>})}>{"LEVEL 7"}</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelEight data={this.state.l8}></LevelEight>})}>{"LEVEL 8"}</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelNine data={this.state.l9}></LevelNine>})}>{"LEVEL 9"}</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.setState({display: <LevelTen data={this.state.l10}></LevelTen>})}>{"LEVEL 10"}</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>

               </div>

               {this.state.display}
    
    
                {/* Recent Orders */}
                {/* <Grid item xs={12}>
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
                      </div> 
                      </React.Fragment>
                  </div>
                  </Paper>
                </Grid> */}
             
             
              {/* </Grid> */}
              {/* <Box pt={4}>
                <Copyright />
              </Box> */}
            </Container> 
          
        </div>
        )
      }
}

export default AllMembers;