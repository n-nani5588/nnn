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

  async  componentWillMount(){

    console.log("in did mount");

    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))
        await axios.post('/api/users/getSingleUserDetails',{userid : userdata._id})
      .then(res => {
          console.log(res);
        sessionStorage.setItem('USER_DETAILS',JSON.stringify(res.data.user));
      })
      .catch(res => {
          console.log(" ");
      })

        // this.setState({
        //     Loading: true
        // })

        // setTimeout(() => {
        //     this.setState({Loading : false})
        // }, 1000);

    }



    render(){
        if(this.state.Loading)
    {
        return(
          <div style={{margin:"0px",padding:"0px",backgroundColor:"#fff",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
               
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