import React from 'react';
import Axios from 'axios';
import Remove from './RemoveComponent';

export default class Updatenews extends React.Component{

    constructor(){
        super();
        this.state={
            currentNews:[],
            text:"",
            qrImage : '',
            addressText: "",
            Loading_AD : false,
            Loading_UP : false,
            Loading_QR : false,
        }
    }

    componentDidMount(){

    try{
        Axios.get('/api/Admin/getNews')
        .then(res => {
            console.log(res.data);
            if(parseInt(res.data.status) === parseInt(1)){
                console.log(res.data.news);
                this.setState({
                    currentNews: res.data.news[0].news,
                    imagePreviewUrl: res.data.news[0].QRimage[0].img,
                    addressText: res.data.news[0].QRimage[0].btcAddress
                })
                console.log(this.state.currentNews);
            }
        }).catch(err => {
            console.log(err);
        })
    }
    catch(err)
    {
        console.log(err);
    }

    }

    handleAddNews= () =>{

        this.setState({ Loading_AD: true})
        console.log("handle add news")

        const news = document.getElementById('Add_News').value;
        const newsarray = this.state.currentNews;
        newsarray.push(news);
        this.setState({
            currentNews: newsarray,
            text:"",
            Loading_AD : false
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

        this.setState({Loading_UP: true})
        Axios.post('/api/Admin/UpdateNews',{
            news: this.state.currentNews
        })
        .then(res=> {
            if(parseInt(res.data.status) === parseInt(1)){
                    console.log(res.data.news);
                this.setState({
                    currentNews: res.data.news.news,
                    text:"",
                    Loading_UP: false
                })
                document.getElementById('Up_MSG').innerHTML = "Update Successful"

            }else{

                document.getElementById('Up_MSG').innerHTML = "Not Updated"
                this.setState({Loading_UP: false})

            }
        }).catch(err => {
            this.setState({Loading_UP: false})
        })

    }

    handleFileChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

    handleImageUpdate = () => {

        this.setState({Loading_QR : true})

        Axios.post('/api/Admin/ImageUpload',{
            imagefile : this.state.imagePreviewUrl,
            text: this.state.addressText
        }).then(res => {
            if(parseInt(res.data.status) === parseInt(1)){
                console.log(res.data.Img);
            this.setState({
                qrImage: res.data.Img.QRimage[0].img,
                addressText:res.data.Img.QRimage[0].btcAddress,
                Loading_QR: false
            })
            document.getElementById('Up_MSG1').innerHTML = "Update Successful"

        }else{

            document.getElementById('Up_MSG1').innerHTML = "Not Updated"
            this.setState({Loading_QR: false})

        }
        }).catch(err => {
            console.log(err);
            this.setState({Loading_QR: false})
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
                         disabled ={this.state.Loading_AD}
                         >
                            {this.state.Loading_AD?"Loading...":"Add News"}
                         </button>

                         <button
                         className="btn btn-primary"
                         onClick={() => this.handleUpdateNews()}
                         disabled={this.state.Loading_UP}
                         >
                             {this.state.Loading_UP?"Loading...":"Update"}

                         </button>
                     </div>

                   
                   {/* Upload Image and Url-Address */}
                     <div className="">
                         
                      <div id="Up_MSG1">
               
               </div>


                     <div style={{width:"100%",padding:"10px",backgroundColor:"#cfccfc"}}>
                        Update QR-IMG
                     </div>
                            
                        <input type="text" value={this.state.addressText} onChange={(e) => {
                            this.setState({
                                addressText : e.target.value
                            })
                        }}></input>
                        <input type="file" onChange={(e) => this.handleFileChange(e)}></input>
                        <img src={this.state.imagePreviewUrl} style={{height:"200px" , width:"200px"}}></img>

                        <button
                         className="btn btn-primary"
                         onClick={() => this.handleImageUpdate()}
                         disabled={this.state.Loading_QR}
                         >
                             {this.state.Loading_QR?"Loading...":"Update QR-iMG" }
                         </button>

                  </div>
                      

            </div>
        )
    }
}