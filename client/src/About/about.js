import  React  from "react";
import Footer from '../component/footer'
import { Grid } from "@material-ui/core";
import './about.css';
import Zoom from 'react-reveal/Zoom';
import Corousel from '../component/Home/Corousel'

export default class About extends React.Component{
    render(){
        return(
         <div>   
          <div className="abtqwe">  
          <div >
              <Grid xs={12}>
              
              <Grid item >
                    {/* Displays Corousel component */}
                    <div style={{width:"100%"}}>
                     <Corousel></Corousel>
                     </div>
                </Grid>
                   <div className="background_img">
                   <Zoom>
                      <span style={{fontSize:"40px",fontWeight:"bold",letterSpacing:"4px"}}>
                          About us                    
                      </span> 
                      <span style={{margin:"20px",fontSize:"16px",letterSpacing:"2px",fontWeight:"200"}}>
                            {"Home"}&nbsp;{">"}&nbsp;{"About us"}
                      </span>
                 </Zoom>
                   </div>

                
              </Grid>
             {/*       about us matter         */}
             <div >
                        
                        <Grid container>
                        <div style={{width:"100%",padding:"3% 10%"}}
                        >

                        <Grid xs={12} >
                        {/* <img src={process.env.PUBLIC_URL + '/images/imgqw.jpg'} style={{width:"500px",height:"300px",float:"right",margin:"10px 0px 12px 30px"}}></img> */}
                        </Grid>

                        {/* <h2 style={{fontWeight:"bold"}}> HOW&nbsp; WE&nbsp; ARE </h2> */}
                        <p style={{letterSpacing:"2px",fontSize:"18px",textAlign:"justify",fontWeight:"bold",color:"white"}}>
                            GENIE TREASURES is a best experienced people's community 
                            where we build social platform and provides best opportunity 
                            to you and your career, if you just help enough people get what 
                            they need. We live by this easy yet powerful philosophy and that we
                             invite you to embrace it so as to realize all of your dreams.
                              It's great pleasure for us that you have simply chosen us for your 
                              financial freedom. We will assist you to get higher business, 
                              make money, happiness and prosperity in your life. 
                              We are supporting you with a chance to enjoy wealth
                               and successful future. This success isn't only
                                for you and for all of your relations . 
                                You do not get any sort of risk during this
                                 business and you'll do this business without leaving your own profession. 
                                 It's going to be an additional huge income for you to satisfy all of your needs 
                                 and interests for an honest standard of living.
                        </p>

                  
                 
                        </div>

                        </Grid>
                    
            </div>

   
             
          </div>
          </div>
          <Footer></Footer>
          </div>
        );
    }
}