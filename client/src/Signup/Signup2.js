import React from 'react';
import './signup.css'

export default class SignupPart2 extends React.Component {
    render(){
        return(
            <div>
                      {/* <!-- Modal Content --> */}
            
            <form className="modal-contentSignup animate body1" onSubmit={(e) => this.handleSubmit(e)} >
             

             <div className="wrapper">
                 <div id="formContent">
                   {/* <!-- Tabs Titles --> */}

                   {/* <!-- Icon --> */}
                   <div className="fadeIn first">
                     <h2 className="h2_text ">Sign Up</h2>
                   </div>

                   {/* <!-- Login Form --> */}
                   <div style={{width:"100%",color:"white",fontSize:"16px",fontWeight:"500",margin:"1%"}}>
                            Please Note Down the Details
                   </div>

                <div style={{width:"100%",display:"flex",justifyContent:"center",margin:"50px 0px"}}>
                   <table id="details_Signup">
                       <tbody>
                           <tr>
                               <th>User Id</th>
                               <td>{this.props.data.userId}</td>
                           </tr>
                           <tr>
                               <th>Name</th>
                               <td>{this.props.data.firstName+" "+" "+ this.props.data.lastName}</td>
                           </tr>
                           <tr>
                               <th>Mail Id</th>
                               <td>{this.props.data.mailId}</td>
                           </tr>
                           <tr>
                               <th>Referal Id</th>
                               <td>{this.props.data.referedBy}</td>
                           </tr>
                       </tbody>
                   </table>
                </div>
                   {console.log(this.props.data)}
                    {/* <div style={{width:"100%",
                                margin:"1%",
                                color:"white",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"}}>
                         <lable>UserId :</lable>
                         <span>{this.props.data.userId}</span>
                    </div>

                    <div style={{width:"100%",
                                margin:"1%",
                                display:"flex",
                                color:"white",
                                justifyContent:"center",
                                alignItems:"center"}}>
                         <lable>Name :</lable>
                         <span>{this.props.data.firstName + this.props.data.lastName}</span>
                    </div>

                    <div style={{width:"100%",
                                margin:"1%",
                                display:"flex",
                                color:"white",
                                justifyContent:"center",
                                alignItems:"center"}}>
                         <lable>MailId :</lable>
                         <span>{this.props.data.mailId}</span>
                    </div>

                    <div style={{width:"100%",
                                margin:"1% 1% 1% 2%",
                                display:"flex",
                                color:"white",
                                justifyContent:"center",
                                alignItems:"center"}}>
                         <lable>Referal Id :</lable>
                         <span>{this.props.data.referedBy}</span>
                    </div> */}

                 
                 </div>
               </div>
           </form>

            </div>
        )
    }
}