import React from 'react';
import axios from 'axios';
import './tickets.css';
import Loader from 'react-loader-spinner';

class Tickets extends React.Component{

    constructor(){
        super();
      this.userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
      this.state={

            _userid : this.userdata.userId,
            _Sub : "",
            _msg  : "",
            Loading : false
        }
    }

    handleChange=(e)=> {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.setState({
            Loading : true
        })
      
    try{    

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
                        _msg  : "",
                        Loading: false
                    })
                    document.getElementById('Update_Msg').innerHTML = "Ticket created Successfully !"
                }else{
                    document.getElementById('Update_Msg').innerHTML = "Sorry Sothing Went Wrong"
                    this.setState({
                        Loading: false
                    })
                }
            
        }).catch(err =>{ 
            this.setState({
                Loading: false
            })
        })
    }
    catch(err)
    {
          console.log(" ");
          this.setState({
            Loading: false
        })
    }
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
                                disabled={this.state.Loading}
                                >
                                   {this.state.Loading ? (<div> <Loader type="ThreeDots" color="#FFF" height={30} width={30} /></div>) : "Raise Tiket"}  
                                </button>

                        </div>

                    </form>   
            </div>



            </div>
        )
    }
}
export default Tickets;