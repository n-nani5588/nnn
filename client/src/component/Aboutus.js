import React from'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
export default class extends React.Component{
    render(){
        return(
          <div >
                        <div style={{width:"100%",marginTop:"70px "}}>
                                  <header class="section-header">
                                    <h3>About Us</h3>
                                  </header>
                        </div>
                        <Grid container>
                        <div style={{width:"100%",padding:"0% 10% 8% 10%"}}
                        >
                        {/* <Grid xs={12} >
                        <img src={process.env.PUBLIC_URL + '/images/imgqw.jpg'} style={{width:"450px",height:"250px",float:"left",margin:"22px 30px 12px 0px"}}></img>
                        </Grid> */}
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
                    
              {/* <div class=" about-cols" style={{display:"flex"}}>
            
                <div class="col-md-4 wow fadeInUp">
                  <div class="about-col">
                    <div class="img">
                      <img src="img/about-mission.jpg" alt="" class="img-fluid"/>
                      <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Mission</a></h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
      
                <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="about-col">
                    <div class="img">
                      <img src="img/about-plan.jpg" alt="" class="img-fluid"/>
                      <div class="icon"><i class="ion-ios-list-outline"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Plan</a></h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
      
                <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                  <div class="about-col">
                    <div class="img">
                      <img src="img/about-vision.jpg" alt="" class="img-fluid"/>
                      <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                    </div>
                    <h2 class="title"><a href="#">Our Vision</a></h2>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                    </p>
                  </div>
                </div>
      
              </div>
       */}

                
          
            </div>
        )
    }
}