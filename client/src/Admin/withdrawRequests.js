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
     }
  }

   async  componentDidMount(){

            // axios.post('/api//Adinfo',{
            //     id:"id"
            // })
         await   axios.get('/api/Admin/Adinfo/withdraw')
            .then(res => {
                console.log(res.data);
                if(parseInt(res.data.status) === parseInt(1)){
                   this.createTable(res.data.request);
                   console.log(this.state.data1);
                }
            })

    }

   handleDone = async (data1) =>{

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
          this.setState({data1: data});
          console.log("in",this.state.data1);
        })

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
                        button: <BtnComponent data={details} onclick={(data) => this.handleDone(data)}></BtnComponent>
                        
              }
      
               data.rows.push(obj)
      } )}
      this.setState({data1: data});
      }

    render(){
        return(
            <div >
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
            </div>
        )
    }
}