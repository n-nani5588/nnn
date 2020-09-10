import React from 'react';
import axios from 'axios';
import {MDBDataTable} from 'mdbreact';

let Autopooldata = {
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
        label: 'Date',
        field: 'date',
        
      },
      {
        label: 'Level one',
        field: 'level',
        
      },
      {
        label: 'Members',
        field: 'members',
        
      }
    ],
    rows:[]
  };

let Availabledata = {
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
        label: 'Date',
        field: 'date',
        
      },
      {
        label: 'Level One',
        field: 'level',
        
      },
      {
        label: 'Available',
        field: 'available',
        
      }
    ],
    rows:[]
  };

  let Deletedata = {
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
        label: 'Date',
        field: 'date',
        
      },
      {
        label: 'Level One',
        field: 'l1', 
      },
      {
        label: 'Level Two',
        field: 'l2',
      },
      {
        label: 'Level Three',
        field: 'l3',
      },
      {
        label: 'Level One Income',
        field: 'l1in', 
      },
      {
        label: 'Level Two Income',
        field: 'l2in',
      },
      {
        label: 'Level Three Income',
        field: 'l3in',
      },
      {
        label: 'Available',
        field: 'available',
        
      }
    ],
    rows:[]
  };


class AutopoolSeven extends React.Component {

    constructor(){
        super();

        this.state= {
            data1 : {},
            autopoolArray: [],
            data2 : {},
            AvailableArray: [],
            data3 : {},
            deleteArray: []
        }
        
    }

   async componentDidMount(){
        
        //Get- Pool - details

       await axios.get('/api/Admin/getPoolSevenDetails')
        .then(res => {
            
            if( parseInt(res.data.status) === parseInt(1) ){

               console.log('Userdata :' , res.data.users1);
               this.createAutopoolTable(res.data.users1)

            }else{



            }

        })

        //Get - Pool - Available - Details

       await axios.get('/api/Admin/getPoolSevenAvailableDetails')
        .then(res => {

            if( parseInt(res.data.status) === parseInt(1) ){

                console.log('Userdata :' , res.data.users2);
                this.createAvailaleTable(res.data.users2)

            }else{


            }

        })

        await axios.get('/api/Admin/getPoolSevenCompletedDetails')
        .then(res => {

          if( parseInt(res.data.status) === parseInt(1) ){

            console.log('Userdata :' , res.data.users);
            this.createDeleteTable(res.data.users)

        }else{


        }

        })

    }

    createAutopoolTable= (members)=> {
        let i = 0;
        Autopooldata.rows=[];
       console.log(members);
   { members &&   members.map(Direct => {

              const details = Direct
              console.log(Direct);
              i++
              const obj = {

                Sno: i,
                userid:Direct.userId,
                date:Direct.date,
                level:Direct.levelOne,
                members:Direct.members.join(',')
                        
              }
      
              Autopooldata.rows.push(obj)
      } )}

      this.setState({data1: Autopooldata,autopoolArray:members})
      
      }

    createAvailaleTable= (members)=> {
        let i = 0;
        Availabledata.rows=[];
       console.log(members);
   { members &&   members.map(Direct => {

              const details = Direct
              console.log(Direct);
              i++
              const obj = {

                Sno: i,
                userid: Direct.userId,
                date: Direct.date,
                level: Direct.levelOne,
                available: Direct.available
                        
              }
      
              Availabledata.rows.push(obj)
      } )}

      this.setState({data2:Availabledata,AvailableArray: members})
      
      }

  createDeleteTable = (members)=> {
        let i = 0;
        Deletedata.rows=[];
       console.log(members);
   { members &&   members.map(Direct => {

              
              console.log(Direct);
              i++
              const obj = {

                Sno: i,
                userid: Direct.userId,
                date: Direct.date,
                l1: Direct.levelOne,
                l2: Direct.levelTwo,
                l3: Direct.levelThree,
                l1in: Direct.levelOneIncome.$numberDecimal,
                l2in: Direct.levelTwoIncome.$numberDecimal,
                l3in: Direct.levelThreeIncome.$numberDecimal,
                available: Direct.available
                        
              }
      
              Deletedata.rows.push(obj)
      } )}

      this.setState({data3:Deletedata,deleteArray: members})
      
      }

    handleInitializeAutopool = async () =>{

      let AvailableArr = this.state.AvailableArray
      let autoarray = this.state.autopoolArray
      let loopNumber =  Math.floor(AvailableArr.length/4)
      console.log(loopNumber);
      let j = 0;

      for (let i = 0; i < loopNumber; i++) {
        console.log("executing");
        let K= 0,userids= [],ids=[];
        do {

             userids.push( AvailableArr[j].userId ) 

          K++;
          j++;
        } while (K < 4);
        console.log("userids :",userids);

      await  axios.post('/api/Admin/InitialisedAutopoolSeven',{

          useridsArray: userids,
          _id: autoarray[i]._id,
          userid:  autoarray[i].userId
          
        }).then(res => {
          console.log(res.data);
          document.getElementById('display').append(res.data.msg);
        })
        
      }

    }

    handleDelete = async () => {


      let DeleteArray = this.state.deleteArray,k=[];
      console.log(DeleteArray);

      for (let i = 0; i < DeleteArray.length; i++) {
        console.log("inside loop");
        
       await axios.post('/api/Admin/performDeleteSeven',{
          userid: DeleteArray[i].userId
        })
        .then(es => {
           console.log(es);
        })
        
      }

      

    }

    render(){

        return(
            <div>

                {/* Autopool table */}
                <div style={{fontSize:"20px",fontWeight:"700",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        FAST-TRACK TREASURE
                </div>

                <div style={{padding:"15px 30px",margin:"10px",backgroundColor:"black",color:"White"}}>
                    Autopool Table
                </div>
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
                                data={this.state.data1}
                                />
                </div>
                
                {/* Autopool-Available table */}
                <div style={{padding:"15px 30px",margin:"10px",backgroundColor:"black",color:"White"}}>
                    Available members details
                </div>
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
                                
                                data={this.state.data2}
                                />
                </div>
                <div id="display"></div>
                {/* Initialize Autopool Button */}
                <button 
                className="btn btn-primary btn-sm"
                onClick={() => this.handleInitializeAutopool()}
                >
                     Intialize Autopool 
                </button>


                 <div style={{padding:"15px 30px",margin:"10px",backgroundColor:"black",color:"White"}}>
                    Delete poolOne completed Ids
                </div>
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
                                
                                data={this.state.data3}
                                />
                </div>
                
                {/* Initialize Delete Pool Members Button */} 
                <button 
                className="btn btn-primary btn-sm"
                onClick={()=> this.handleDelete()}
                > Remove poolOne Ids </button>

            </div>
        )
    }
}

export default AutopoolSeven;