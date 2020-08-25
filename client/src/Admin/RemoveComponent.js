import React from 'react';


export default class RemoveComponent extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <button className="btn btn-link" onClick={() => this.props.onclick(this.props.data)}>Remove</button>
            </div>
        )
    }
} 