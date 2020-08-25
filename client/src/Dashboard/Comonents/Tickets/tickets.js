import React from 'react';
import axios from 'axios';
import './tickets.css';

class Tickets extends React.Component{

    constructor(){
        super();
      this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
      this.state={

            _userid : this.userdata.userId,
            _Sub : "",
            _msg  : ""

        }
    }

    handleChange=(e)=> {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e)=> {
        e.preventDefault();
        axios.post('/api/users/CreateTickets',{
            userid:  e.target._userid.value,
            msg_id:  1,
            subject: e.target._Sub.value,
            message: e.target._msg.value,
        })
        .then(res => {   console.log(res.data);

            if(parseInt(res.data.status) === parseInt(1)){
                this.setState({
                    _Sub : "",
                    _msg  : ""
                })
                document.getElementById('Update_Msg').innerHTML = "Ticket created Successfully !"
            }else{
                document.getElementById('Update_Msg').innerHTML = "Sorry Sothing Went Wrong"
            }
            
        })
    }

    render(){
        return(
            <div>

               
            <div className="Send_Fund_Container">

                        <div className="Send_Fund_header" >
                           Raise Ticket
                        </div>

                        <div id="Update_Msg"  style={{color:"black",display:"none",borderRadius:"3px",backgroundColor:"white",padding:"10px 5px"}}>
                        
                        </div>
                   <form  onSubmit={(e) => this.handleSubmit(e)}>
                        <div>

                                
                                <input
                                value={this.state._userid}
                                className="form-control"
                                onChange={(e) => this.handleChange(e)}
                                name="_userid"
                                disabled
                                >
                                </input>

                                <input
                                value={this.state._Sub}
                                className="form-control"
                                onChange={(e) => this.handleChange(e)}
                                name="_Sub"
                                placeholder="Subject"
                                required
                                >
                                </input>

                                <textarea
                                className="form-control"
                                placeholder="Enter Msg"
                                value={this.state._msg}
                                name="_msg"
                                required
                                onChange={(e) => this.handleChange(e)}
                                ></textarea>

                                <button
                                type="submit"
                                className="btn btn-primary"
                                >
                                    Raise Ticket
                                </button>

                        </div>

                    </form>   
            </div>



            </div>
        )
    }
}
export default Tickets;