import  React  from "react";
import Footer from '../component/footer'
import { Grid } from "@material-ui/core";
import './about.css';

export default class About extends React.Component{
    render(){
        return(
          <div>
              <Grid xs={12}>
                   <div className="background_img">
                      <span style={{fontSize:"40px",fontWeight:"bold",letterSpacing:"4px"}}>
                          About us                    
                      </span> 
                      <span style={{margin:"20px",fontSize:"16px",letterSpacing:"2px",fontWeight:"200"}}>
                            {"Home"}&nbsp;{">"}&nbsp;{"About us"}
                      </span>
                   </div>
              </Grid>
             {/*       about us matter         */}
             <div >
                        
                        <Grid container>
                        <div style={{width:"100%",padding:"5% 10%"}}
                        >
                        <Grid xs={12} >
                        <img src={process.env.PUBLIC_URL + '/images/imgqw.jpg'} style={{width:"500px",height:"300px",float:"right",margin:"10px 0px 12px 30px"}}></img>
                        </Grid>
                        <h2 style={{fontWeight:"bold"}}> HOW&nbsp; WE&nbsp; ARE </h2>
                        <p style={{textAlign:"justify",letterSpacing:"1px",fontWeight:"thin"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        
                        <p style={{textAlign:"justify",letterSpacing:"1px",fontWeight:"thin"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                        
                        <p style={{textAlign:"justify",letterSpacing:"1px",fontWeight:"thin"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                        
                        </div>

                        </Grid>
                    
            </div>
   
              <Footer></Footer>
          </div>
        );
    }
}