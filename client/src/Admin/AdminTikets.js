import React from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import Displaybutton from './Ticketbutton';

const data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
        sort: "asc",
        width: 150
      },
      {
        label: 'User Id',
        field: 'userid',
        sort: "asc",
        width: 150
      },
      {
        label: 'Subject',
        field: 'subject',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Ticket Raised Date',
        field: 'date',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Show Message',
        field: 'button',
        sort: 'asc',
        width: 100
      },
    ],
    rows:[]
  };

class Tickets extends React.Component{

    constructor(){
        super();

        this.state= {
            TicketsArray: [],
            Subject: "",
            messages:[],
            addvalue:"",
            ticketid:"",
        }
    }


    createTable= (members)=> {
        let i = 0;
        data.rows = [];
      members.map(Direct => {
              i++
              const obj = {
                Sno: i,
                subject: Direct.Subject,
                date : Direct.RequestedDate,
                userid: Direct.userId,
                status: (Direct.status).toString().toLowerCase() === "true"?"Active":"Resolved",   
                button: <Displaybutton data={Direct} onclick={(message) => this.handleClick(message)}></Displaybutton>
              }
    
               data.rows.push(obj)
      })
    
    }

    hamdleSendButton= () =>{

        let obj = {
            msgid:0,
            message:this.state.addvalue
        }
        axios.post('/api/Admin/UpdateMessage',{
            message: obj,
            _id: this.state.ticketid
        }).then(res => {
            console.log(res.data.message);
            if(parseInt(res.data.status) === parseInt(1)){
                this.setState({
                    messages: res.data.Tickets.message,
                    addvalue: ""
                })
                this.componentDidMount()
            }
        })
   
    }

    handleClick=(data)=>{

        this.setState({
            Subject: data.Subject,
            messages: data.message,
            ticketid: data._id
        })
    
    }

    componentDidMount(){

        axios.get('/api/Admin/GetTickets')
        .then(res => {
            console.log(res.data.Tickets);
            if(parseInt(res.data.status) === parseInt(1)){
                this.createTable(res.data.Tickets)
                this.setState({
                    TicketsArray: data
                })
            }else{
                document.getElementById('Update_Msg').innerHTML = "No Tickets Found"
            }
        })

    }

    handleChange = (e) => {

        this.setState({addvalue: e.target.value})

    }


    render(){
        return(
            <div>

                {/* Display Table */}
                <div>
                            <MDBDataTable
                            striped
                            bordered
                            sortable={false}
                            theadColor="#fff"
                            entries={7}
                            small
                            noBottomColumns
                            responsiveSm
                            responsiveMd
                            
                            data={this.state.TicketsArray}
                            />
                </div>

                {/* Display Messages */}
                <div>
                            <input
                            type="text"
                            className="form-control"
                            disabled
                            value={this.state.Subject}
                            >
                            </input>

                            <div>
                                {this.state.messages && this.state.messages.map(msg => 
                                   <div className={msg.id === 0?"":""}>{msg.message}</div>
                                )}
                            </div>

                            {/* Add button */}

                            <div>

                                <input
                                className="form-control"
                                value={this.state.addvalue}
                                onChange={(e)=> this.handleChange(e)}
                                >
                                </input>

                                <button
                                className="btn btn-primary btn-sm"
                                onClick={() => this.hamdleSendButton()}
                                >
                                   send
                                </button>
                            </div>
                </div>

            </div>
        )
    }
}

export default Tickets;