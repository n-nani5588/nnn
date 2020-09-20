import React from 'react';
import './pinwallet.css';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';



class PinBalance extends React.Component {

   constructor(){
       super();
       this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'));
        this.state = {
            pinBalance : this.userdata.pinBalance.$numberDecimal || 0
        }
   }

    render(){
        return(
            <div style={{margin:"0px",padding:"2% 10%"}}>
                <div className="Send_Fund_Container">
        
                    <div className="Send_Fund_header" >
                         Pin Balance
                    </div>
        
        
                       <div className="Send_Fund_body">
                           <Grid  container xs={12} spacing={2}>
                                <div className="Send_Fund_body_ID" >
                                           <Grid item xs={12} sm={6} >
                                            <p>  Balance: </p>
                                                <input type="text" value={this.state.pinBalance} className="form-control"></input>
                                            </Grid>
                                           
                                </div>
                           </Grid>
                           <div style={{padding:"20px 0px"}}>
        <Divider/>
        </div>
    
        
                            </div>
        
        
               </div>
            </div>
          
          )
    }
}

export default PinBalance;