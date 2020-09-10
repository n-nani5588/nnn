import React from 'react';
import Autopool from './Autopool/autopool';
import Autopool2 from './Autopool/autopoolTwo';
import Autopool3 from './Autopool/autopoolThree';
import Autopool4 from './Autopool/autopoolFour';
import Autopool5 from './Autopool/autopoolFive';
import Autopool6 from './Autopool/autopoolSix';
import Autopool7 from './Autopool/autopoolSeven';
import Autopool8 from './Autopool/autopoolEight';
import Autopool9 from './Autopool/autopoolNine';
import Autopool10 from './Autopool/autopoolTen';

class Mainautopool extends React.Component{

    constructor(){
        super();
        this.state ={
            render: '',
        }
    }

    render(){
        return(
            
            <div>
                {/* Autopool buttons */}
                <div style={{display:"flex",flexWrap:'wrap',fontSize:"13px"}}>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool></Autopool>})}
                    > 
                    Raising
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool2></Autopool2>})}
                    > 
                      Wonder
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool3></Autopool3>})}
                    > 
                     Master
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool4></Autopool4>})}
                    > 
                      Expert
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool5></Autopool5>})}
                    > 
                      Billionaire
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool6></Autopool6>})}
                    >
                      Legend
                    </button>


                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool7></Autopool7>})}
                    >
                          Fast-track 
                         </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool8></Autopool8>})}
                    >
                         Diamond
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool9></Autopool9>})}
                    >
                          Double-diamond
                    </button>

                    <button
                    className="btn btn-link"
                    onClick={() => this.setState({render: <Autopool10></Autopool10>})}
                    >
                         Triple-Diamond
                    </button>



                </div>
                {this.state.render}
            </div>
        )
    }
}

export default Mainautopool;