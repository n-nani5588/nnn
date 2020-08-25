import React from 'react';
import WithdrawRequests from './withdrawRequests';
import Generatepin from './GeneratePin';
import Totaljoingings from './totalJoinings';
import Dailjoingings from './dailyJoinings';
import Updatenew from './UpdateNews';
import Tickets from './AdminTikets';
import './admin.css';

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            Display : "",
        }
    }

    render(){
        return(  
            <div className="Home_Main_div">

                <div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                        onClick={() => this.setState({Display: <WithdrawRequests></WithdrawRequests>})}
                        className="btn btn-secondary">Withdraw Requests</button>
                        
                        <button 
                        type="button"
                        onClick={() => this.setState({Display: <Generatepin></Generatepin>})}
                        className="btn btn-secondary">
                                Pin Generation
                        </button>
                    
                        <button 
                        type="button" 
                        onClick={() => this.setState({Display: <Totaljoingings></Totaljoingings>})}
                        className="btn btn-secondary">
                            Total Members
                        </button>


                        <button 
                        type="button" 
                        onClick={() => this.setState({Display: <Dailjoingings></Dailjoingings>})}
                        className="btn btn-secondary">
                            Daily Members
                        </button>

                        <button 
                        type="button" 
                        onClick={() => this.setState({Display: <Updatenew></Updatenew>})}
                        className="btn btn-secondary">
                             Update News
                        </button>

                        <button 
                        type="button" 
                        onClick={() => this.setState({Display: <Tickets></Tickets>})}
                        className="btn btn-secondary">
                             Tickets
                        </button>

                        </div>
                        {
                            this.state.Display
                        }

                </div>

            
            </div>
        )
    }
}

export default Home;