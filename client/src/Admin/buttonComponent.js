import React from 'react';


export default class BtnComponent extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <button disabled={this.props.loading} onClick={() => this.props.onclick(this.props.data)}>
                   {this.props.loading ? "loading" : "Donr"} 
                    </button>
            </div>
        )
    }
} 