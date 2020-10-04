import React from'react';
import Grid from '@material-ui/core/Grid'
import './values.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({})

export default class extends React.Component{
    render(){
        return(
          <div >
                        <div style={{width:"100%",marginTop:"70px "}}>
                              <section class="text-center about">
                              <header class="section-header">
                                    <h3>Our Values</h3>
                              </header>
                              <div style={{marginTop:"70px"}}>
                              <div  style={{display:'flex',justifyContent:"space-evenly",alignContent:"center"}}>
                                <div class="row">
                               
                                    <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
                               <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                      <span class="fa fa-eye"></span>
                                      <h2>VISION</h2>
                                      <p class="lead">To make people's much better than we found them.To make people's lives better everyday.To care for the world we live in, from the oppurtunity we make to the ways in which we give back to society.</p>
                                    </div>
                                </div>
                                  <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                                  <div data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <span class="fa fa-sitemap"></span>
                                    <h2>MISSION </h2>
                                    <p class="lead">To become World No.1 Crowd funding Company. Provides Best Quality Leadership in the world who will lead business Company. Better Lives Everyday A positive performance depends on several factors.</p>
                                  </div>
                                  </div>
                                  {/* <div class="clearfix visible-md-block visible-sm-block"></div> */}
                                  <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                                  <div data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                    <span class="fa fa-thumbs-up"></span>
                                    <h2>CORE VALUES</h2>
                                    <p class="lead">To Industrilize Our World With Our Natural Resourcefullness .To Bring Wealth & Happiness to Reality for Mankind.To Provide the Best Customer Service Possible from over the Internet using a web browser.</p>
                                  </div>
                                  </div>
                                </div>
                                
                              </div>
                           
                              </div>                           
                              </section>
                            
                        </div>
          
            </div>
        )
    }
}