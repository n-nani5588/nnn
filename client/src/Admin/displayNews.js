import React from 'react';
import axios from 'axios';
let array =["• hi All ...have a nice day,hope you guys get some profit today :} blaaa blaa blaaaaaaaa",
]


export default class DisplayNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
            Loading : false
        }

    }


    componentDidMount(){
        let newsnew;
        this.setState({ Loading : true })
        axios.get('/api/users/getNews')
        .then(res => {
          console.log(res.data);
             
            if(parseInt(res.data.status) === parseInt(1)){
              array = res.data.news[0].news;
              this.setState({
                    news: newsnew,
                    Loading : false
              })
              console.log(this.state);
            }
        })
            // setTimeout(() => {

            //   this.setState({ Loading : false })
              
            // }, 3000);
      }

    render(){
        return(
           <div>
               
              <div className="Newsfooter divNews">
              <div className="news divNews">
                <span><b>News</b></span>
              </div>
             
             {!this.state.Loading ?
              
              <p className="Newstext">
              <marquee direction = "left">

                
                {array && array.map(news => 
                <span>&nbsp;&nbsp;•&nbsp;&nbsp;{news}</span>
                )}

                </marquee>
              </p>
             
              
              : (<div style={{width:"100%", display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
                    Loading..
                </div>)}
              </div>
             
           </div>
        )
    }
}