import React from'react';
import Grid from '@material-ui/core/Grid'
import './values.css';


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
                                    <span class="fa fa-eye"></span>
                                    <h2>VISION</h2>
                                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                  </div>
                                  <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                                    <span class="fa fa-sitemap"></span>
                                    <h2>MISSION </h2>
                                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                                  </div>
                                  {/* <div class="clearfix visible-md-block visible-sm-block"></div> */}
                                  <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                                    <span class="fa fa-thumbs-up"></span>
                                    <h2>CORE VALUES</h2>
                                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
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