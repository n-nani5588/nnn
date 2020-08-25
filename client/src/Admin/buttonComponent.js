import React from 'react';


export default class BtnComponent extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <button onClick={() => this.props.onclick(this.props.data)}>Done</button>
            </div>
        )
    }
} 