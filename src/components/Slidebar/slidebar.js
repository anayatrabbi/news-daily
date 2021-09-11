import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidebar = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };


  return (
    <div>       
        <Slider {...settings}>
          <div>
          <img alt="" src="https://us.123rf.com/450wm/alhovik/alhovik1709/alhovik170900031/86481591-breaking-news-background-world-global-tv-news-banner-design.jpg?ver=6" style={{height:"250px" , width:"100%"}}/>
          </div>
          <div>
            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzemga263lN9jHia0fKtc01d5UoQb2sMjuw&usqp=CAU" style={{height:"250px" , width:"100%"}}/>
          </div>
          <div>
            <img alt="" src="https://thumbs.dreamstime.com/b/background-screen-saver-soccer-sports-news-live-world-map-vector-illustration-126818433.jpg" style={{height:"250px" , width:"100%"}}/>
          </div>
          <div>
           <img alt="" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/11/breaking-1603159815-1604711829.jpg" style={{height:"250px" , width:"100%"}}/>
          </div>
         
        </Slider>
      </div>
  );
};

export default Slidebar;