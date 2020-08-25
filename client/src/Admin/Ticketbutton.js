import React from 'react';




class Displaybutton extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div >
                <button
                onClick={() => this.props.onclick(this.props.data)}
                className="btn btn-link btn-sm"
                >
                  show message
                </button>
            </div>
    ) }

}

export default Displaybutton;