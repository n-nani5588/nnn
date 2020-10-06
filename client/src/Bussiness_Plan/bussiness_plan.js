import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Footer from '../component/footer'
import './bussiness_plan.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({})



class Bussiness_Plan extends React.Component {

    render(){
        return (
            <div>
               <div className="Bussiness_Page"> 
                 <Grid xs={12}>
                   <div className="background_img">
                      <span style={{fontSize:"40px",fontWeight:"bold",letterSpacing:"4px"}}>
                          WORLD OF TREASURES              
                      </span> 
                      <span style={{margin:"20px",fontSize:"16px",letterSpacing:"2px",fontWeight:"200"}}>
                            {"Home"}&nbsp;{">"}&nbsp;{"Bussiness Plan"}
                      </span>
                   </div>
                 </Grid>
             </div>
                 <div style={{margin:"3% 6% 2% 6%",display:"flex",justifyContent:"center"}}>
                     <h1>TREASURES INCOME</h1>
                 </div>

                 <div style={{margin:"0% 6%",padding:"0px 30px"}}>
                     <Divider></Divider>
                 </div>

                 <Grid container justify="space-between" xs={12}>
                 <div style={{margin:"0% 6%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={6}>
                            <div style={{padding:"30px"}}>
                            <div data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                                <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700"}}>
                                    BRONZE TREASURE 
                                </div>
                            
                                <table id="table_01">
                                    <thead>
                                        <th>LEVEL</th>
                                        <th>AUTO POOL</th>
                                        <th>EARNING PER UNIT</th>
                                        <th>INCOME</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>$0.5</td>
                                            <td>$2</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>16</td>
                                            <td>$1</td>
                                            <td>$16</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>64</td>
                                            <td>$2</td>
                                            <td>$128</td>
                                        </tr>

                                    </tbody>
                                </table>
                                
                                <div style={{backgroundColor:"orange",
                                            marginTop:"20px",
                                            padding:"5px 10px"}}>
                                    <li>30$ AUTO DEBIT FOR REBIRTH</li>
                                </div>
                            </div>
                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <div style={{padding:"30px"}}>
                    <div data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                        <div style={{padding:"10px 0px",
                                     fontSize:"large",
                                     fontWeight:"700"}}>
                           SILVER TREASURE  
                        </div>
                       
                        <table id="table_01">
                             <thead>
                                 <th>LEVEL</th>
                                 <th>AUTO POOL</th>
                                 <th>EARNING PER UNIT</th>
                                 <th>INCOME</th>
                             </thead>
                             <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>4</td>
                                      <td>$8</td>
                                      <td>$32</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>16</td>
                                      <td>$8</td>
                                      <td>$128</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>64</td>
                                      <td>$8</td>
                                      <td>$512</td>
                                  </tr>
                             </tbody>
                         </table>
                         
                        <div style={{backgroundColor:"orange",
                                      marginTop:"20px",
                                      padding:"5px 10px"}}>
                            <li>60$ AUTO DEBIT FOR REBIRTH</li>
                         </div>
                     </div>
                    </div>
                    </Grid>
                 </div>
                 </Grid>

                 <Grid container justify="space-between" xs={12}>
                 <div style={{margin:"0% 6%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={6}>
                            <div style={{padding:"30px"}}>
                            <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                                <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700"}}>
                                GOLD TREASURE
                                </div>
                            
                                <table id="table_01">
                                    <thead>
                                        <th>LEVEL</th>
                                        <th>AUTO POOL</th>
                                        <th>EARNING PER UNIT</th>
                                        <th>INCOME</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>$13</td>
                                            <td>$52</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>16</td>
                                            <td>$13</td>
                                            <td>$208</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>64</td>
                                            <td>$13</td>
                                            <td>$832</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                
                                <div style={{backgroundColor:"orange",
                                            marginTop:"20px",
                                            padding:"5px 10px"}}>
                                    <li>100$ AUTO DEBIT FOR REBIRTH</li>
                                </div>
                            </div>
                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <div style={{padding:"30px"}}>
                    <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                        <div style={{padding:"10px 0px",
                                     fontSize:"large",
                                     fontWeight:"700"}}>
                           PLATINUM TREASURE 
                        </div>
                       
                        <table id="table_01">
                             <thead>
                                 <th>LEVEL</th>
                                 <th>AUTO POOL</th>
                                 <th>EARNING PER UNIT</th>
                                 <th>INCOME</th>
                             </thead>
                             <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>4</td>
                                      <td>$26</td>
                                      <td>$104</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>16</td>
                                      <td>$26</td>
                                      <td>$416</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>64</td>
                                      <td>$26</td>
                                      <td>$1664</td>
                                  </tr>
                                  
                             </tbody>
                         </table>
                         
                        <div style={{backgroundColor:"orange",
                                      marginTop:"20px",
                                      padding:"5px 10px"}}>
                            <li>200$ AUTO DEBIT FOR REBIRTH</li>
                         </div>
                     </div>
                    </div>
                    </Grid>
                 </div>
                 </Grid>

                 <Grid container justify="space-between" xs={12}>
                 <div style={{margin:"0% 6%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={6}>
                            <div style={{padding:"30px"}}>
                            <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                                <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700"}}>
                                DIAMOND TREASURE
                                </div>
                            
                                <table id="table_01">
                                    <thead>
                                        <th>LEVEL</th>
                                        <th>AUTO POOL</th>
                                        <th>EARNING PER UNIT</th>
                                        <th>INCOME</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>$40</td>
                                            <td>$160</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>16</td>
                                            <td>$40</td>
                                            <td>$640</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>64</td>
                                            <td>$40</td>
                                            <td>$2560</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <div style={{backgroundColor:"orange",
                                            marginTop:"20px",
                                            padding:"5px 10px"}}>
                                     <li>300$ AUTO DEBIT FOR REBIRTH</li>
                                                                    </div>
                            </div>
                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <div style={{padding:"30px"}}>
                    <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                        <div style={{padding:"10px 0px",
                                     fontSize:"large",
                                     fontWeight:"700"}}>
                           MILLION TREASURE
                        </div>
                       
                        <table id="table_01">
                             <thead>
                                 <th>LEVEL</th>
                                 <th>AUTO POOL</th>
                                 <th>EARNING PER UNIT</th>
                                 <th>INCOME</th>
                             </thead>
                             <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>4</td>
                                      <td>$53</td>
                                      <td>$212</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>16</td>
                                      <td>$53</td>
                                      <td>$848</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>64</td>
                                      <td>$53</td>
                                      <td>$3392</td>
                                  </tr>
                             </tbody>
                         </table>
                         
                        <div style={{backgroundColor:"orange",
                                      marginTop:"20px",
                                      padding:"5px 10px"}}>
                            <li>400$ AUTO DEBIT FOR REBIRTH</li>
                         </div>
                     </div>
                    </div>
                    </Grid>
                 </div>
                 </Grid>

                 <Grid container justify="space-between" xs={12}>
                 <div style={{margin:"0% 6%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={6}>
                            <div style={{padding:"30px"}}>
                            <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                                <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700"}}>
                               BILLION TREASURE
                                </div>
                            
                                <table id="table_01">
                                    <thead>
                                        <th>LEVEL</th>
                                        <th>AUTO POOL</th>
                                        <th>EARNING PER UNIT</th>
                                        <th>INCOME</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>$80</td>
                                            <td>$320</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>16</td>
                                            <td>$80</td>
                                            <td>$1280</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>64</td>
                                            <td>$80</td>
                                            <td>$5120</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <div style={{backgroundColor:"orange",
                                            marginTop:"20px",
                                            padding:"5px 10px"}}>
                                     <li>500$ AUTO DEBIT FOR REBIRTH</li>
                                </div>
                          </div>  
                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <div style={{padding:"30px"}}>
                    <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                        <div style={{padding:"10px 0px",
                                     fontSize:"large",
                                     fontWeight:"700"}}>
                           TRILLION TREASURE
                        </div>
                       
                        <table id="table_01">
                             <thead>
                                 <th>LEVEL</th>
                                 <th>AUTO POOL</th>
                                 <th>EARNING PER UNIT</th>
                                 <th>INCOME</th>
                             </thead>
                             <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>4</td>
                                      <td>$133</td>
                                      <td>$532</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>16</td>
                                      <td>$133</td>
                                      <td>$2128</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>64</td>
                                      <td>$133</td>
                                      <td>$8512</td>
                                  </tr>
                             </tbody>
                         </table>
                         
                        <div style={{backgroundColor:"orange",
                                      marginTop:"20px",
                                      padding:"5px 10px"}}>
                            <li>1000$ AUTO DEBIT FOR REBIRTH</li>
                         </div>
                     </div>
                    </div>
                    </Grid>
                 </div>
                 </Grid>

                 <Grid container justify="space-between" xs={12}>
                 <div style={{margin:"0% 6%",display:"flex",flexWrap:"wrap",width:"100%"}}>

                    <Grid item xs={12} sm={6}>
                            <div style={{padding:"30px"}}>
                            <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                                <div style={{padding:"10px 0px",
                                            fontSize:"large",
                                            fontWeight:"700"}}>
                                CROWN TREASURE
                                </div>
                            
                                <table id="table_01">
                                    <thead>
                                        <th>LEVEL</th>
                                        <th>AUTO POOL</th>
                                        <th>EARNING PER UNIT</th>
                                        <th>INCOME</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>4</td>
                                            <td>$200</td>
                                            <td>$800</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>16</td>
                                            <td>$200</td>
                                            <td>$3200</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>64</td>
                                            <td>$200</td>
                                            <td>$12800</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                
                                <div style={{backgroundColor:"orange",
                                            marginTop:"20px",
                                            padding:"5px 10px"}}>
                                     <li>1500$ AUTO DEBIT FOR REBIRTH</li>
                                </div>
                            </div>
                            </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <div style={{padding:"30px"}}>
                    <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                        <div style={{padding:"10px 0px",
                                     fontSize:"large",
                                     fontWeight:"700"}}>
                           ACE TREASURE
                        </div>
                       
                        <table id="table_01">
                             <thead>
                                 <th>LEVEL</th>
                                 <th>AUTO POOL</th>
                                 <th>EARNING PER UNIT</th>
                                 <th>INCOME</th>
                             </thead>
                             <tbody>
                                  <tr>
                                      <td>1</td>
                                      <td>4</td>
                                      <td>$266</td>
                                      <td>$1064</td>
                                  </tr>
                                  <tr>
                                      <td>2</td>
                                      <td>16</td>
                                      <td>$266</td>
                                      <td>$4256</td>
                                  </tr>
                                  <tr>
                                      <td>3</td>
                                      <td>64</td>
                                      <td>$266</td>
                                      <td>$17024</td>
                                  </tr>
                             </tbody>
                         </table>
                         
                        <div style={{backgroundColor:"orange",
                                      marginTop:"20px",
                                      padding:"5px 10px"}}>
                            <li>2000$ AUTO DEBIT FOR REBIRTH</li>
                         </div>
                     </div>
                    </div>
                    </Grid>
                 </div>
                 </Grid>

               

               <div style={{margin:"0% 6%",padding:"0px 30px",fontWeight:"bold",fontFamily:"arial"}}>
                   
                   <p>TERMS & CONDITIONS</p>
               </div>
               <div style={{margin:"0% 6%",padding:"0px 30px"}}>
                     <Divider></Divider>
               </div>
               <div style={{margin:"0% 6%",padding:"0px 30px"}}>
             <ul> 
              <li> <p>For Withdrawl 4 Direct's Compulsory</p> </li>
              <li> <p>15% Deduction on Withdrawl</p></li>
              <li> <p>5% Deduction on Pin Wallet Transfer</p></li>
              <li> <p>Rebirt of two Id's at the end of Every Treasure</p></li>
              <li> <p>Member's can Upgrade to any Treasure as per their choice after activating BRONZE Treasure</p></li>
              <li><p>Eligibility criteria for FSI is one direct compulsory and fund will be distributed on daily basis</p></li>
            </ul>

               </div>

               {/* <div style={{margin:"0% 6%",padding:"0px 30px"}}>
                   <p>Daily Royalty INCOME</p>
               </div>
                */}
               {/* <div style={{margin:"0% 6%",padding:"0px 30px"}}>
                     <Divider></Divider>
               </div>

               <div style={{margin:"0% 6%",padding:"0px 30px"}}>
                  <h5>1.Silver Royalty</h5>
                  <p>Sponsor 7 Directs In 7 Days . 0.50 % of Daily 
                     Turnover of the Company will be equally distributed 
                     amongst all Silver Royalty Achievers</p>
                  
                  <h5>2.Gold Royalty</h5>
                  <p>Sponsor 7 Directs In 7 Days . 0.50 % of Daily 
                     Turnover of the Company will be equally distributed 
                     amongst all Silver Royalty Achievers</p>
                  
                  <h5>3.Platinum Royalty</h5>
                  <p>Sponsor 7 Directs In 7 Days . 0.50 % of Daily 
                     Turnover of the Company will be equally distributed 
                     amongst all Silver Royalty Achievers</p>
                  
                  <h5>4.Diamond Royalty</h5>
                  <p>Sponsor 7 Directs In 7 Days . 0.50 % of Daily 
                     Turnover of the Company will be equally distributed 
                     amongst all Silver Royalty Achievers</p>
               
                <strong style={{color:"red"}}>Note :</strong><p>Any Member can get any one of the Above 4 Royalties .</p>
               </div> */}

               <div>
                   <Footer></Footer>
               </div>

      </div>
        )
    }

}

export default Bussiness_Plan;