import React from 'react';
import Axios from 'axios';
import { MDBDataTable } from 'mdbreact';


let active = 0;
let Eligible = [];
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

    }

    handleSelectedDates= (e) => {

        e.preventDefault();

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
                    totalactives : active
                })
               console.log(this.state.data1);

            }
            else{
               
                document.getElementById('Up_MSG').innerHTML = "Something Went Wrong";

            }
        })

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
                  Eligible.push(Direct.referedBy)

              }

      
               data.rows.push(obj)
      } )}
      
      }

    handleConfirm = (e) =>{
      e.preventDefault()
      console.log(e.target.shareFundUserId.value, e.target.fundAmount.value);
      console.log(this.state.shareFundUserId,this.state.fundAmount);
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
                confirm: false
              })

            }else{
              document.getElementById('Fund_UP_MSG').innerHTML = "User NotFound Or Update not done"
            }
      })
    }

    handleChange = (e) => {

      this.setState({ [e.target.name] : e.target.value })

    }

  

    render(){
      console.log("inside of");
        return(
            <div>
                
                {/* display total joingings */}
                <div>

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

                    <button type="submit" className="btn btn-primary form-control"></button>
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
                                  <tr>{user}</tr>
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
                                                      >Confirm
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
}