import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import './deposit.css';


class  DirectDeposit extends React.Component {
    render(){
        return(
            <div style={{margin:"0px",padding:"2% 10%"}}>
                <div className="Send_Fund_Container">
    
                    <div className="Send_Fund_header" >
                        Direct Deposit
                    </div>
    
    
                       <div className="Send_Fund_body">
                           <Grid  container xs={12} spacing={2}>
                                <div className="Send_Fund_body_ID" >
                                           <Grid item xs={12} >
                                            
                                                <input type="text" className="form-control"></input>
                                            </Grid>
                                            <div className="Send_Fund_body_Total">
    
                                                <button className="btn btn-success" >Deposit</button>
                                            </div>
                                            
                                </div>
                           </Grid>
                       </div>
    
    
               </div>
            </div>
          
          )
    }
}

export default DirectDeposit;