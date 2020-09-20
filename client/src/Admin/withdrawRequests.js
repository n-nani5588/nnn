import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MDBDataTable } from 'mdbreact';
import BtnComponent from './buttonComponent';
import axios from 'axios';

let data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'user Id',
        field: 'userId',
        
      },
      {
        label: 'Name',
        field: 'Name',
        
      },
      {
        label: 'Level Income',
        field: 'level',
        
      },
      {
        label: 'autopool Income',
        field: 'autopool',
        
      },
      {
        label: 'Fund Income',
        field: 'fund',
      },
      {
        label: 'recieved Income',
        field: 'recieve',
        
      },
      {
        label: 'Bitcoin Address',
        field: 'Address',
        
      },
      {
        label: 'Joining date',
        field: 'Date',
        sort: 'desc'
      },
      {
        label: 'Amount',
        field: 'Amount',
        
      },
      {
        label: 'Total',
        field: 'total',
        
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

export default class WithdrawRequests extends React.Component {

  constructor(){
    super();
     this.state= {
        data1:{},
        Loading : false,
        Loading_dn_btn : false,
     }
  }

   async  componentDidMount(){

    this.setState({
       Loading: true
    })
            // axios.post('/api//Adinfo',{
            //     id:"id"
            // })
    try{        
         await   axios.get('/api/Admin/Adinfo/withdraw')
            .then(res => {

                console.log(res.data);
                if(parseInt(res.data.status) === parseInt(1)){
                   this.createTable(res.data.request);
                   console.log(this.state.data1);
                }
                else
                {
                    this.setState({
                      Loading: false
                    })
                }

            }).catch(err => {
                    this.setState({
                      Loading : false
                    })
            })

        }
        catch(err)
        {
              this.setState({
                Loading : false
              })
        }
    }

   handleDone = async (data1) =>{
 

    this.setState({Loading_dn_btn : true})

    try{

              console.log(data1);
              await axios.post('/api/Admin/Adinfo/withdrawDone',{
                  userId: data1.userId,
                  _id: data1._id,
                  statement_id: data1.Statement_ID,
                  Amount: data1.Amount,
                  Total: data1.total,
                  date: data1.RequestedDate,
                  status: "Done"
              })
              .then(res => {
                      console.log(res.data);
                      this.createTable(res.data.staetment);
                      console.log("in",this.state.data1);
              })
              .catch(err => {
                      this.setState({data1: data , Loading_dn_btn: false});
              })
    }
    catch(err)
    {
            this.setState({data1: data , Loading_dn_btn: false});
    }

    }

    createTable= (members)=> {
        let i = 0;
        data.rows=[];
       console.log(members.withdrawRequests);
   { members.withdrawRequests &&   members.withdrawRequests.map(Direct => {

              const details = Direct
              console.log(Direct);
              i++
              const obj = {
                        Sno: i,
                        userId:Direct.userId,
                        Name: Direct.fname+Direct.lname,
                        level: Direct.levelincome,
                        autopool: Direct.autopool,
                        fund: Direct.fundsharing,
                        recieve: Direct.recievedincome,
                        Date: "ds",
                        Amount: Direct.Amount,
                        total: Direct.total,
                        Address: Direct.BitAddress,
                        status: Direct.Status,
                        button: <BtnComponent data={details} loading={this.state.Loading_dn_btn} onclick={(data) => this.handleDone(data)}></BtnComponent>
                        
              }
      
               data.rows.push(obj)
      } )}
      this.setState({data1: data, Loading: false , Loading_dn_btn: false})
      }

    render(){
        return(
            <div style={{width:"100%",padding:"2%"}}>

                      {this.state.Loading ? 
                        
                        (<div style={
                          {
                           width:"100%",
                           display: "flex",
                           justifyContent:"center",
                           alignItems:"center",
                           padding: "2% 0%"
                          }
                        }>
                           Loading...
                        </div>)
                        :
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
                              }
            </div>
        )
    }
}