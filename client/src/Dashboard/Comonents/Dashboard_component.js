import React,{ useState } from 'react';
 import Typography from '@material-ui/core/Typography';
 import Link from '@material-ui/core/Link';
 import Grid from '@material-ui/core/Grid';
 import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { MDBInput } from "mdbreact";
import './Dashboard_component.css';
import Deposits from '../Deposits';
import Orders from '../Orders';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import clsx from 'clsx';
import Displaynews from '../../Admin/displayNews';
import axios from 'axios'
import { MDBAnimation } from "mdbreact";

function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          GENIE TREASURES
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  const useStyles = makeStyles((theme) => ({
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
    fixedHeight: {
      height: 240,
    },
  
  }));
  
  function Copy_function() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  

 }

  function getNews(){
   let news1 ;
    
  
  }

 async function get(){
   return await getNews();
  }

let count = 0;
let newsnew ;

 function Dashboard_component(props) {
 
    
    const classes = useStyles();    
    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
    console.log(userdata);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div style={{margin:"0px",padding:"0px",backgroundColor:"#fff",color:"black",textTransform:"uppercase"}}>
      <Container maxWidth="lg" className={classes.container}>

     {/* Jubotron */}
      <div className="py-2">
        <div className="jumbotron effect7 text-white jumbotron-image shadow" style={{padding:"20px 5% 5% 5%",width:"100%",backgroundImage: "url(https://cdn.pixabay.com/photo/2016/11/10/05/11/bitcoin-1813505_960_720.jpg"}}>
          <div 
          style={{width:"100%",paddingBottom:"30px",display:"flex",justifyContent:"flex-end"}}>
            <i className="fa fa-circle" style={{color:"green",fontSize:"10px",paddingRight:"5px",paddingTop:"4px"}} aria-hidden="true"></i>Online</div>
          <h2 className="mb-4">
          <MDBAnimation type="fadeInLeft" duration="1s">
            Welcome, {userdata.firstName} !
          </MDBAnimation>
          </h2>
          {/* <p className="mb-4"> */}
          {/* YOU ARE IN :  Rank #2
          </p> */}
        </div>
        <div>
          </div>
        
      </div>
     
     <Grid container spacing={2}>
       <Grid item xs={12} justify="center" sm={11}>
           <input className="_input_class form-control sm" value={`http://app-d2fb78f3-b28e-4d2d-ac89-da3d2f8c5f0a.cleverapps.io/Reffer/${userdata.userId}`} id="myInput"/>
       </Grid>
       <Grid item xs={12} sm={1}>
       <span> <button className="btn btn-sm" onClick={() => Copy_function()}>Copy</button></span>
       </Grid>
     </Grid>
     
      <Grid container spacing={2}> 
                          <Grid item xs={12} sm={4} md={4} lg={3}>
                      <MDBAnimation type="zoomIn" duration="1s" delay="0s">
                        <div class="card bg-c-blue order-card">
                       
                              <div className="card-block">
                                  <h6 className="m-b-20">Wallet Income</h6>
                                  <h2 className="text-right"><i  className="fa fa-user f-left"></i><span>${userdata.recievedIncome.$numberDecimal}</span></h2>
                                  {/* <p className="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                              </div>
                    
                          </div>
                      </MDBAnimation>
                         </Grid>
                          <Grid item xs={12} sm={4} md={4} lg={3}>
                          <MDBAnimation type="zoomIn" duration="1s" delay="500ms">
                          <div className="card bg-c-pink order-card">
                              <div className="card-block">
                                  <h6 className="m-b-20">Level Income</h6>
                                  <h2 className="text-right"><i className="fa fa-users f-left"></i><span>${userdata.levelIncome.$numberDecimal}</span></h2>
                                  {/* <p className="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                              </div>
                          </div>
                          </MDBAnimation>
                          </Grid>
                          <Grid item xs={12} sm={4} md={4} lg={3}>
                          <MDBAnimation type="zoomIn" duration="1s" delay="1s">
                          <div className="card bg-c-green order-card">
                              <div className="card-block">
                                  <h6 className="m-b-20">Treasure Income</h6>
                                  <h2 className="text-right"><i class="fa fa-money-bill-wave f-left"></i><span>${userdata.autoPoolIncome.$numberDecimal}</span></h2>
                                  {/* <p className="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                              </div>
                          </div>
                          </MDBAnimation>
                          </Grid>

                          <Grid item xs={12} sm={4} md={4} lg={3}>
                          <MDBAnimation type="zoomIn" duration="1s" delay="1.5s">
                          <div className="card bg-c-yellow order-card">
                              <div className="card-block">
                                  <h6 className="m-b-20">Fund Sharing Income</h6>
                                  <h2 className="text-right"><i class="fa fa-cart-plus f-left"></i><span>${userdata.fundSharingIncome.$numberDecimal}</span></h2>
                                  {/* <p className="m-b-0">Completed Orders<span class="f-right">351</span></p> */}
                              </div>
                          </div>
                          </MDBAnimation>
                          </Grid>
                          </Grid>
                        
                          <Grid item xs={12}>
                        <Displaynews></Displaynews>
              </Grid>
          
         
          {/* <Grid container spacing={3}>  */}

          {/* copytext */}
           {/* <div>
           <Grid item xs={12}>
           <input type="text" value="Signup" id="myInput"/>
           <button onClick={() => Copy_function()}>Copy text</button>
           </Grid>
           </div> */}

          {/* News Report */}
          {/* <div>
            <Grid item xs={12}>
              <div className="Newsfooter divNews">
              <div className="news divNews">
                <span><b>News</b></span>
                </div>
              <p className="Newstext">
              <marquee direction = "left">
              <span>• Coronavirus pandemic is going to get worse and worse and worse: WHO chieft</span>
              <span> &nbsp;• ‘Everyone is lying’: Trump undercuts public health officials in fresh attacks</span>
              <span> &nbsp;• Tesla’s Elon Musk Nears $2.4 Billion Haul as Stock Keeps Soaring</span>
              <span> &nbsp;•  SpaceX test-fires rocket for South Korean military satellite launch this week</span>
                </marquee>
              </p>
              </div>
              </Grid>
            </div> */}

            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}> */}
                {/* <Chart /> */}
              {/* </Paper>
            </Grid> */}
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}> */}
                {/* <Deposits /> */}
                
                     
                          {/* <div class="card bg-c-blue order-card">
                              <div class="card-block">
                                  <h6 class="m-b-20">Orders Received</h6>
                                  <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>486</span></h2>
                                  <p class="m-b-0">Completed Orders<span class="f-right">351</span></p>
                              </div>
                          </div> */}
                    
                  
              {/* </Paper>
            </Grid> */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>

           */}


           <Divider/>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              
                   <Orders />
              </Paper>
            </Grid>
          {/* </Grid> */}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container> 
      
    </div>
  );
}

export default Dashboard_component;
