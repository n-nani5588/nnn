import React from 'react';
import Axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import groupArrayThenSort from 'group-array-then-sort';

let active = 0;
let Eligible = [];
let grouped ;
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

export default class Daily_Joinings extends React.Component{


    constructor(){
        super();
        this.state ={
            data1:{},
            totaljoingingsCount:0,
            totalactives:0,
            shareFundUserId: "",
            fundAmount:0,
            confirm:false,
            Loading: false,
            c_Loading: false,
            balance : "",
        }
    }

    componentDidMount(){

        // Axios.post('/api/Admin/getTodayUserDetails',{
        //     startDate:"",
        //     endDate:"",
        // })
        // .then(res => {
        //     console.log(res.data);
        //     if(parseInt(res.data.status) === parseInt(1)){

        //         this.createTable(res.data.users);
        //         this.setState({
        //             data: data,
        //             totaljoingingsCount: data.rows.length,
        //             totalactives : active
        //         })

        //     }
        //     else{
               
        //         document.getElementById('Up_MSG').innerHTML = "Something Went Wrong";

        //     }
        // })
      
        
        console.log(window.Location.origin);

    }

  handleSelectedDates= (e) => {

   this.setState({Loading: true})

        e.preventDefault();
try{
        Axios.post('/api/Admin/getTodayUserDetails',{
            startDate: e.target.start_date.value,
            endDate: e.target.end_date.value,
        })
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){

                this.createTable(res.data.users);
                this.setState({
                    data1: data,
                    totaljoingingsCount: data.rows.length,
                    totalactives : active,
                    Loading: false
                })
               console.log(this.state.data1);

            }
            else{
               
                document.getElementById('Up_MSG').innerHTML = "Something Went Wrong";
                this.setState({
                  Loading: false
                })

            }
        })
        .catch(err => {
             this.setState({
                  Loading: false
             })
        })
}
catch(err)
{
  console.log(" ");
  this.setState({ Loading: false })
}

    }

    handleSendFund= () => {
       this.setState({ confirm: true });
    }

    handleCancle = () => {
      this.setState({ confirm: false });
   }

    createTable= (members)=> {
        let i = 0;
        active= 0;
        data.rows= [];
        Eligible= [];
        console.log(members);
   try{     
   { members &&   members.map(Direct => {

              const details = Direct
              console.log(Direct);
              i++

              const obj = {

                        Sno: i,
                        id:Direct._id,
                        userid:Direct.userId,
                        name: Direct.firstName+Direct.lastName,
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
                  
                  Eligible.push({
                    refered : Direct.referedBy
                  })
               data.rows.push(obj)
      } )}
      
  grouped = groupArrayThenSort(Eligible, 'refered', 'refered', 'desc').then((sortedObj) => {
        console.log(sortedObj)

    }).catch((e) => {
        console.error(e)
    })
  }
  catch(err)
  {

  }
      }

      // handleEligible = () => {

      //   let EligibleDummy = Eligible;

      //   Eligible.map( Eligible => {

      //           EligibleDummy.map( eligible => {

      //                   if(eligible.refered.toString() === Eligible.refered.toString()){

      //                     let obj = {
      //                                   active : Elig
      //                     }

      //                   }

      //           })

      //   })

      // }

    handleConfirm = (e) =>{
      e.preventDefault()
      this.setState({ c_Loading : true })
      console.log(e.target.shareFundUserId.value, e.target.fundAmount.value);
      console.log(this.state.shareFundUserId,this.state.fundAmount);
    try{
              Axios.post('/api/Admin/SendFundToUser',{
                    userid: this.state.shareFundUserId,
                    fundamount: this.state.fundAmount,
                  })
                  .then(res => {
                        console.log(res.data);
                        if(parseInt(res.data.status) === parseInt(1)){

                                  document.getElementById('Fund_UP_MSG').innerHTML = "Update Successful"
                                  this.setState({
                                    shareFundUserId: "",
                                    fundAmount:0,
                                    confirm: false,
                                    c_Loading : false
                                  })

                        }else{
                          document.getElementById('Fund_UP_MSG').innerHTML = "User NotFound Or Update not done"
                          this.setState({ c_Loading: false })
                        }
                  }).catch(err => {
                             this.setState({ c_Loading: false })
                  })
      }
      catch(err)
      {
                console.log(" ");
                this.setState({
                  c_Loading : false
                })
      }
   
    }

    handleChange = (e) => {

      this.setState({ [e.target.name] : e.target.value })

    }

  

    render(){
      console.log("inside of");
    try{  
          return(

               

              <div>
                  
                  {/* display total joingings */}
                  <div>

          {/* <div style={{width:"100%",padding:"2%"}}> <h1>BALANCE: {this.state.balance}</h1></div> */}

                    <label>  Today Joingings:</label>
                      <input
                      disabled
                      value={this.state.totaljoingingsCount} 
                      className="form-control"
                      ></input>

                      <label>Today Actives</label>
                      <input 
                      disabled 
                      value={this.state.totalactives} 
                      className="form-control">
                      </input>

                  </div>

                  {/* Date Selection */}
                  <div >
                      <form  onSubmit={(e) => this.handleSelectedDates(e)}>
                      <label>Start Date</label>
                      <input type="date" required className="form-control" name="start_date">
                      </input>

                      <label>EndDate</label>
                      <input type="date" required className="form-control" name="end_date">
                      </input>

                          <button type="submit" disabled={this.state.Loading} className="btn btn-primary form-control">
                            {this.state.Loading? "Loading...": "Get"}
                          </button>

                      </form>
                  </div>

                  
                  
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
                                  data={this.state.data1}
                                  />
                  </div>

                  {/* Eligible for fund sharing */}
                  <div>

                        <div style={{width:"100%",padding:"10px",backgroundColor:"#cfccfc "}}>
                          Eligible For Fund Sharing
                        </div>

                        <table>
                            <thead>
                              <tr>
                                <td>Userid</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  {Eligible && Eligible.map(user => 
                                    <tr>{user.refered}</tr>
                                  )}
                                  
                              </tr>
                            </tbody>

                        </table>
                        
                  </div>
              

                  {/* Share Fund */}
                  <div>
                        <div style={{width:"100%",padding:"10px",backgroundColor:"#cfccfc "}}>
                          Share Fund
                        </div>
                  <form onSubmit={(e) => this.handleConfirm(e)}>
                        <div >
                            <input
                            type="text"
                            placeholder="Enter User Id"
                            name="shareFundUserId"
                            onChange={(e) => this.handleChange(e)}
                            value={this.state.shareFundUserId}
                            required
                            >
                            </input>

                            <input
                            type="number"
                            min="0"
                            max={this.state.balance}
                            value={this.state.fundAmount}
                            onChange={(e) => this.handleChange(e)}
                            required
                            name="fundAmount"
                            >
                            </input>

                        {  !this.state.confirm && <button 
                                onClick={() => this.handleSendFund()}
                                className="btn btn-primary"                           
                            >
                              Send Fund
                            </button>
                        }
                        
                        {/* Update Message */}
                        <div id="Fund_UP_MSG"></div>

                          {this.state.confirm &&   <div>
                                                      <button 
                                                      type="submit"
                                                        className="btn btn-sm btn-success" 
                                                        disabled={this.state.c_Loading}
                                                        >
                                                              {this.state.c_Loading ? "Loading.." : "Confirm" }

                                                        </button>

                                                        <button 
                                                        className="btn btn-primary btn-sm" 
                                                        onClick={() => this.handleCancle()} 
                                                        >Cancle</button>
                                                    </div>}
                        </div>
                  </form>
                  </div>

                  

              </div>

          )
      }
      catch(err)
      {
        console.log(err);
      }
    }
}