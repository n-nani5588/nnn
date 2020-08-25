import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Footer from '../footer';
import Corousel from './Corousel';
import Aboutus from '../Aboutus';
import Values from '../values/values'
import Divider from '@material-ui/core/Divider';
import './home.css';

export default class Home extends React.Component{
    render(){
        return(
            <div>
             <Grid conatiner>
               {/* <Grid item>
                   
                     <div style={{height:"80px"}}>

                     </div>
                </Grid> */}
                <Grid item >
                    {/* Displays Corousel component */}
                     <div style={{width:"100%"}}>
                     <Corousel></Corousel>
                     </div>
                     <div style={{width:"100%",height:"20vh",backgroundColor:"#F2ECFF"}}>
                           
                     </div>
                </Grid>

                <Grid item>
                    {/* Displays   ABOUT component */}
                 <div style={{width:"100%",textAlign:"center"}}>
                 <Aboutus></Aboutus>
                 
                 </div>
                  
                </Grid>
                
                <Grid container iteam >
                    <div className="body">
                         <div style={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}>   
                        <div className="blog-post">
                             <div className="blog-post__img">
                                 <img className="img1" src={process.env.PUBLIC_URL + '/images/propic.jpg'}></img>

                             </div>
                             <div className="blog-post__info">
                             <h1 className="blog-post__tittle">
                                  FREE ACCOUNT 
                             </h1>
                                <p className="blog-post__text">
                                Create Free Account With Referral ID & Start Your Helping Community
                                </p>  
                                <a href="#" className="blog-post__cta">create</a>                                       
                             </div>
                         
                        </div>
                         
                         
                        <div className="blog-post">
                             <div className="blog-post__img">
                                 <img className="img1" src={process.env.PUBLIC_URL + '/images/propic.jpg'}></img>

                             </div>
                             <div className="blog-post__info">
                             <h1 className="blog-post__tittle">
                                  FREE ACCOUNT 
                             </h1>
                                <p className="blog-post__text">
                                Create Free Account With Referral ID & Start Your Helping Community
                                </p>  
                                <a href="#" className="blog-post__cta">create</a>                                       
                             </div>
                         
                        </div>
                        </div>
                        <div style={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}>   
                        <div className="blog-post">
                             <div className="blog-post__img">
                                 <img className="img1" src={process.env.PUBLIC_URL + '/images/propic.jpg'}></img>

                             </div>
                             <div className="blog-post__info">
                             <h1 className="blog-post__tittle">
                                  FREE ACCOUNT 
                             </h1>
                                <p className="blog-post__text">
                                Create Free Account With Referral ID & Start Your Helping Community
                                </p>  
                                <a href="#" className="blog-post__cta">create</a>                                       
                             </div>
                         
                        </div>
                         
                         
                        <div className="blog-post">
                             <div className="blog-post__img">
                                 <img className="img1" src={process.env.PUBLIC_URL + '/images/propic.jpg'}></img>

                             </div>
                             <div className="blog-post__info">
                             <h1 className="blog-post__tittle">
                                  FREE ACCOUNT 
                             </h1>
                                <p className="blog-post__text">
                                Create Free Account With Referral ID & Start Your Helping Community
                                </p>  
                                <a href="#" className="blog-post__cta">create</a>                                       
                             </div>
                         
                        </div>
                        </div>
                        
                    </div>
                </Grid> 

                <Grid item>
                    {/* Displays  Values component */}
                    <div style={{width:"100%"}}>
                      <Values></Values>
                    </div>
                </Grid>

                <Grid item>
                    {/* Displays  Footer component */}
                    <Footer></Footer>
                </Grid>
            </Grid>
            </div>
        )
    }
}