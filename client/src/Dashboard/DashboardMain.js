import React from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class DashboardMain extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.data);
        this.state = {
             Loading:false,
             _id: this.props.data._id
        }
    }

    componentDidMount(){

     
   
    }



    render(){
        if(this.state.Loading)
    {
        return(
          <div style={{margin:"0px",padding:"0px",backgroundColor:"white"}}>
               
               <Loader type="Audio" color="#00BFFF" height={80} width={80} />

          </div>
        )
    }
    else
    {
        return(
            <Dashboard data={this.props.data}></Dashboard>
        )

    }
        
    }
}

export default DashboardMain;