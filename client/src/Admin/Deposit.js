import React from 'react';
import Axios from 'axios';
import BtnComponent from './buttonComponent';
import { MDBDataTable } from 'mdbreact';

let data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'user Id',
        field: 'userid',
        
      },
      {
        label: 'Name',
        field: 'name',
        
      },
      {
        label: 'Send TO',
        field: 'sendto',
        
      },
      {
        label: 'Date',
        field: 'date',
      },
      {
        label: 'Amount',
        field: 'amount',
        
      },
      {
        label: 'Hashcode',
        field: 'hash',
        
      },
      {
        label: 'Status',
        field: 'status',
        
      },
      {
        label: 'Done',
        field: 'button',
        
      }
    ],
    rows:[]
  };

class DepositRequests extends React.Component {

    constructor(){
        super();
        this.state = {

            data1 : {},
            confirm: false,
            addconfirm: false,
            _userid:"",
            _amount:"",
            _addamount:"",
            balance:"",

        }
            
    }

    componentDidMount(){

            Axios.get('/api/Admin/DepositSatements')
            .then(res => {
                if(parseInt(res.data.status) === parseInt(1))
                {
                    this.createTable(res.data.statements)
                }
                else
                {
                    this.setState({data1 : data})
                }
            })

            Axios.get('/api/Admin/Balance').
            then(res => {
              console.log(res.data);
              if(parseInt(res.data.status) === parseInt(1))
              {
                this.setState({
                  balance : res.data.Balance[0].Balance.$numberDecimal
                })
              }
              else{
                this.setState({
                  
                })
              }
            })

    }

    createTable= (members)=> {
        let i = 0;
        data.rows=[];
       console.log(members);
   { members &&   members.map(Direct => {

              const details = Direct
              console.log(Direct);
              i++
              const obj = {
                        Sno: i,
                        userid:Direct.userId,
                        name: Direct.Name,
                        amount: Direct.Amount,
                        sendto: Direct.SentBTCaddress,
                        hashcode: Direct.HashCode,
                        date: Direct.date,
                        status: Direct.status?"Done":"pending",
                        button: <BtnComponent data={details} onclick={(data) => this.handleDone(data)}></BtnComponent>
                        
              }
      
               data.rows.push(obj)
      } )}

      this.setState({data1 : data})
      
    }

      handleDone = async (details) =>{

        console.log(details);
        await Axios.post('/api/Admin/DepositDone',{
                    userId: details._id,
                })
                .then(res => {
                console.log(res.data);
                    if(parseInt(res.data.status) === parseInt(1))
                    {
                        document.getElementById('Msg_disp').innerHTML = "Update Successfull"
                    }
                    else{
                      document.getElementById('Msg_disp').innerHTML = "Not Updated"
                    }
                })

    }

    handleDepositSubmit = (e) => {
      
      e.preventDefault();

      Axios.post('/api/Admin/SendDepositAmountToUser',{

        userid : e.target._userid.value,
        amount: e.target._amount.value

      })
      .then(res => {
        console.log(res);

        if(parseInt(res.data.status) === parseInt(1)){

          document.getElementById('Msg_disp').innerHTML = res.data.msg
          this.setState({
            confirm : false,
            _userid :"",
            _amount:"",
          })

        }
        else
        {
          document.getElementById('Msg_disp').innerHTML = res.data.msg
        }

      })

    }

    handleAddBalance =(e) => {
      e.preventDefault();

      Axios.post('/api/Admin/AddBalance',
      {
        admin : e.target._selectadmin.value,
        addamount : e.target._addamount.value
      }
      )
      .then(res => {

        if(parseInt(res.data.status) === parseInt(1)){

          document.getElementById('Msg_disp1').innerHTML = res.data.msg
          this.setState({
            _addamount :"",
            addconfirm : false
          })

        }
        else
        {
          document.getElementById('Msg_disp1').innerHTML = res.data.msg
        }

      })
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    render(){
         return(
             <div>
               
               <div style={{backgroundColor:"blue",color:"white",fontFamily:"san-serif",fontSize:"20px"}}>
                  Add Balance
               </div>

               <div id='Msg_disp1'>

                </div>

                <div>
                  Balance : {this.state.balance}
                </div>

               <div style={{width:"100%",padding:"2%"}}>
                    <form onSubmit= {(e) => this.handleAddBalance(e) }>
                        <select id="admin_select" name="_selectadmin" className="form-control">
                                <option value="Admin_1">Admin 1</option>
                                <option value="Admin_2">Admin 2</option>
                                <option value="Admin_3">Admin 3</option>
                                <option value="Admin_4">Admin 4</option>
                        </select>
                        <input
                        onChange={(e) => this.handleChange(e)}
                        value={this.state._addamount}
                        type="number" min="0" max={this.state.balance} name="_addamount"  className="form-control"></input>
                        {
                              !this.state.addconfirm &&  
                              <button 
                              type="button"
                              className="btn btn-primary btn-sm"
                              onClick={() => {

                                this.setState({
                                  addconfirm: true
                                })

                              }}>
                                  Send 
                              </button>
                            
                        }
                        {
                                this.state.addconfirm && 
                        <div>
                          <button
                          className="btn btn-success btn-sm form-control"
                          type="submit"
                          >
                            Confirm
                          </button>

                          <button
                          className="btn btn-warning btn-sm form-control"
                          type="button"
                          onClick={() => {
                            this.setState({
                              addconfirm: false
                            })
                          }}
                          >
                            Cancel
                          </button>
                        </div>
                        }
                     </form> 
               </div>


               <div style={{backgroundColor:"blue",color:"white",fontFamily:"san-serif",fontSize:"20px"}}>
                  Deposit Table
               </div>
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
                                
                                data={this.state.data1}
                                />

            

             <div>

               <div style={{backgroundColor:"blue",color:"white",fontFamily:"san-serif",fontSize:"20px"}}>
                  send Deposit
               </div>

               <div id='Msg_disp'>

              </div>

               <div>
                 <form onSubmit= {(e) => this.handleDepositSubmit(e)}>
                  
                  <input 
                  onChange={(e) => this.handleChange(e)}
                  value={this.state._userid}
                  type="text" name="_userid" placeholder="EnterId" required></input>
                  
                  <input 
                  value={this.state._amount}
                  onChange={(e) => this.handleChange(e)}
                  type="number" name="_amount" step="any" min="0" max={this.state.balance} required></input>
               
                  {
                    !this.state.confirm &&  
                    <button 
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => {

                      this.setState({
                              confirm: true
                      })

                    }}>
                        Send 
                    </button>
                  
                  }
                
                  {
                    this.state.confirm && 
                    <div>
                      <button
                      className="btn btn-success btn-sm"
                      type="submit"
                      >
                        Confirm
                      </button>

                      <button
                      className="btn btn-warning btn-sm"
                      type="button"
                      onClick={() => {
                        this.setState({
                          confirm: false
                        })
                      }}
                      >
                        Cancel
                      </button>
                    </div>
                  }
                </form>
               </div>

             </div>

         </div>
         )
    }
}

export default DepositRequests;