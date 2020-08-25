import React from 'react';
import Axios from 'axios';
import { MDBDataTable } from 'mdbreact';


let active = 0;
let data = {
    columns: [
      {
        label: 'Sno',
        field: 'Sno',
      },
      {
        label: 'Id',
        field: 'id',
        
      },
      {
        label: 'User Id',
        field: 'userid',
        
      },
      {
        label: 'Name',
        field: 'name',
        
      },
      {
        label: 'Joining Date',
        field: 'date',
        
      },
      {
        label: 'Available Pins',
        field: 'pins',
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
        field: 'address',
        
      },
      {
        label: 'Country',
        field: 'country',
        
      },
      
      {
        label: 'Mail Id',
        field: 'mailid',
        
      },
      {
        label: 'Refered By',
        field: 'refered',
        
      },
      {
        label: 'Pin Balance',
        field: 'pinbalance',
        
      },
      {
        label: 'Status',
        field: 'active',
        
      },
    ],
    rows:[]
  };

export default class Total_Joinings extends React.Component{


    constructor(){
        super();
        this.state ={
            data:"",
            totaljoingingsCount:0,
            totalactives:0
        }
    }

    componentDidMount(){

        Axios.get('/api/Admin/getAllUserDetails')
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){

                this.createTable(res.data.users);
                this.setState({
                    data: data,
                    totaljoingingsCount: data.rows.length,
                    totalactives : active
                })

            }
            else{
               
                document.getElementById('Up_MSG').innerHTML = "Something Went Wrong";

            }
        })

    }

   createTable= (members)=> {
        let i = 0;
        active=0;
        data.rows = [];
            console.log(members);
   { members &&   members.map(Direct => {

              const details = Direct
              console.log(Direct);
              i++

              const obj = {

                        Sno: i,
                        id:Direct._id,
                        userId:Direct.userId,
                        Name: Direct.firstName+Direct.lastName,
                        level: Direct.levelIncome.$numberDecimal,
                        autopool: Direct.autoPoolIncome.$numberDecimal,
                        fund: Direct.fundSharingIncome.$numberDecimal,
                        recieve: Direct.recievedIncome.$numberDecimal,
                        date: Direct.joiningDate,
                        pins: Direct.availablePins,
                        address: Direct.bitAddress,
                        country: Direct.country,
                        refered: Direct.referedBy,
                        mailid: Direct.mailId,
                        pinbalance: Direct.pinBalance.$numberDecimal,
                        active: Direct.Active,

              }
              if(Direct.Active.toLowerCase() === "true")
              {
                  active++
              }

      
               data.rows.push(obj)
      } )}
      
      }

    render(){
        return(
            <div>
                
                {/* display total joingings */}
                <div>

                   <label> Total Joingings:</label>
                    <input
                     disabled
                     value={this.state.totaljoingingsCount} 
                     className="form-control"
                    ></input>

                    <label>No of Actives</label>
                    <input 
                    disabled 
                    value={this.state.totalactives} 
                    className="form-control">
                    </input>

                </div>

                <div id="Up_MSG"></div>
                
                {/* total members Table */}
                <div style={{width:"1000px",height:"400px",overflowX:"scroll"}}>

                                <MDBDataTable
                                striped
                                bordered
                                sortable={false}
                                theadColor="#fff"
                                entries={10}
                                small
                                noBottomColumns
                                responsiveSm
                                responsiveMd
                                data={this.state.data}
                                />
                </div>

            </div>
        )
    }
}