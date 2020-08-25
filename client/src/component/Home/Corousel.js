import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class Corousel extends Component {
    render() {
        return (
        
            <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false} >
                {/* <div >
                    <img src={process.env.PUBLIC_URL + '/images/cimg3.png'}  />
                </div> */}
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/cimg2.jpg'} />
                   
                </div>
                <div >
                    <img src={process.env.PUBLIC_URL + '/images/cimg1.jpg'}/>
                </div>
            </Carousel>
        );
    }
}

export default Corousel;