import React from 'react';
import WithdrawRequests from './withdrawRequests';
import Generatepin from './GeneratePin';
import Totaljoingings from './totalJoinings';
import Dailjoingings from './dailyJoinings';
import Updatenew from './UpdateNews';
import Tickets from './AdminTikets';
import DailyReport from './dailyRport';
import './admin.css';
import Mainautopool from './Mainautopool';
import DepositRequests from './Deposit';
import axios from 'axios';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Display : "",
        }
    }

    render(){
        return( 
            <div>
                 <div style={{width:"100%",display:"block"}}>
                        <button className="btn btn-primary btn-small" onClick={() => this.props.logout()}>Logout</button>
                </div>
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
                            Fund sharing
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

                        <button 
                        type="button" 
                        onClick={() => this.setState({Display: <Mainautopool></Mainautopool>})}
                        className="btn btn-secondary">
                             Autopool
                        </button>

                        <button
                        className="btn btn-secondary"
                        onClick={() => {
                            this.setState({
                                Display: <DailyReport></DailyReport>
                            })
                        }}
                        >
                       Daily Report
                        </button>

                        <button
                        className="btn btn-secondary"
                        onClick={() => {
                            this.setState({
                                Display: <DepositRequests></DepositRequests>
                            })
                        }}
                        >
                         Deposit
                        </button>

                        </div>
                        {
                            this.state.Display
                        }
{/* 
<button
 onClick ={() => {
     axios.post('/api/Admin/CreateDailyRepot')
 }}>
    click
</button> */}


                </div>

            
            </div>
            </div> 
        )
    }
}

export default Home;