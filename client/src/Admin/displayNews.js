import React from 'react';
import axios from 'axios';
let array =["• gvuyfytf ty ycjy cyrxxusirituy uyfcuovybgoiutc uffuf ufofypigvbobtvivog gouyfuyfuyf",
]


export default class DisplayNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[]
        }

    }


    componentDidMount(){
        let newsnew;
        axios.get('/api/users/getNews')
        .then(res => {
          console.log(res.data);
             
            if(parseInt(res.data.status) === parseInt(1)){
              array = res.data.news[0].news;
              this.setState({
                    news: newsnew
              })
            }
        })
    }

    render(){
        return(
           <div>
               
              <div className="Newsfooter divNews">
              <div className="news divNews">
                <span><b>News</b></span>
              </div>
              <p className="Newstext">
              <marquee direction = "left">

            {array && array.map(news => 
                <span>&nbsp;&nbsp;•&nbsp;&nbsp;{news}</span>
                )}

                </marquee>
              </p>
              </div>
             
           </div>
        )
    }
}