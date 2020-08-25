import React from 'react';
import Axios from 'axios';
import Remove from './RemoveComponent';

export default class Updatenews extends React.Component{

    constructor(){
        super();
        this.state={
            currentNews:[],
            text:"",
        }
    }

    componentDidMount(){

        Axios.get('/api/Admin/getNews')
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){
                console.log(res.data.news);
                this.setState({
                    currentNews: res.data.news[0].news
                })
                console.log(this.state.currentNews);
            }
        })

    }

    handleAddNews= () =>{

        console.log("handle add news")

        const news = document.getElementById('Add_News').value;
        const newsarray = this.state.currentNews;
        newsarray.push(news);
        this.setState({
            currentNews: newsarray,
            text:"",
        })

        console.log(this.state.currentNews);
        

    }

    handleChange= (e) => {

        this.setState({text: e.target.value});

    }

    handleRemove = ( newss ) => {

            console.log(newss);
            const Removed =     this.state.currentNews.filter(news =>  news !== newss);
            console.log(Removed);
            this.setState({
                currentNews: Removed,
                text:"",
            })
        
    }

    handleUpdateNews= () =>{

        Axios.post('/api/Admin/UpdateNews',{
            news: this.state.currentNews
        })
        .then(res=> {
            if(parseInt(res.data.status) === parseInt(1)){
                    console.log(res.data.news);
                this.setState({
                    currentNews: res.data.news.news,
                    text:"",
                })
                document.getElementById('Up_MSG').innerHTML = "Update Successful"

            }else{

                document.getElementById('Up_MSG').innerHTML = "Not Updated"

            }
        })

    }

    render(){
        return(
            <div>

                      <div style={{width:"100%",padding:"10px",backgroundColor:"#cfccfc"}}>
                        Update News
                      </div>

                      <div id="Up_MSG">
               
                      </div>

                    {/* Display Current News */}
                      <div>

                          <table>
                              <thead>
                                  <tr>
                                      <td>Current news</td>
                                  </tr>
                              </thead>
                              <tbody>
                         {this.state.currentNews && this.state.currentNews.map(news => 
                               <tr>
                                      <td>{news}</td>
                                      <td><Remove data={news} onclick={(data)=> this.handleRemove(data)}></Remove></td>
                               </tr>
                          ) }
                              </tbody>
                          </table>
                         
                      </div>

                     {/*  Add News */}

                     <div>
                         <textarea
                         className='form-control'
                         placeholder="Enter news"
                         value={this.state.text}
                         onChange={(e) => this.handleChange(e)}
                         id="Add_News"
                         >

                         </textarea>

                         <button
                         onClick={() => this.handleAddNews()}
                         className="btn btn-primary"
                         >
                             Add News
                         </button>

                         <button
                         className="btn btn-primary"
                         onClick={() => this.handleUpdateNews()}
                         >
                             Update
                         </button>
                     </div>
                      

            </div>
        )
    }
}