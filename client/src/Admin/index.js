import React from 'react';
import Login from './login';
import Home from './home';
import './admin.css'
import ErrorBoundary from '../component/ErrorBoundary';

class Admin extends React.Component {

        constructor(){
            super();
            this.state= {
                Display: <Login login={() => this.handleLogin()}></Login>
            }
        }

        componentDidMount(){

            const login = JSON.parse(sessionStorage.getItem('LOGIN'))

            if(login){

                this.setState({
                    Display: <Home></Home>
                })

            }

        }


    handleLogin =()=>{
                console.log("Display");
                sessionStorage.setItem('LOGIN',JSON.stringify(true))
            this.setState({
                Display: <Home logout={() => this.handleLogout()}></Home>
            })
        }

    handleLogout = () => {

        sessionStorage.setItem('LOGIN',JSON.stringify(false))
        this.setState({
            Display: <Login login={() => this.handleLogin()}></Login>
        })

    }

    render(){
        return(
            <div className="Main_div">

        <ErrorBoundary> 
               {this.state.Display}
        </ErrorBoundary>  

            </div>
        )
    }
}

export default Admin;