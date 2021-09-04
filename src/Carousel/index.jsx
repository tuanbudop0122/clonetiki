import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="container carousel-content">
        <Slider {...settings}>
          <div>
            <img
              src="https://salt.tikicdn.com/cache/w824/ts/banner/46/85/c7/b735dd4a8b455e044d5f32decf0b56ac.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src="https://salt.tikicdn.com/cache/w824/ts/banner/29/0e/06/607228b1d9c6f5ce19d24c26c7c768ab.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src="https://salt.tikicdn.com/cache/w824/ts/banner/75/a0/9c/ba899af07301b35d0c99c922a006cddb.png.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src="https://salt.tikicdn.com/cache/w824/ts/banner/13/2f/b7/d75ad9b82e40c58e943f757f2c101c3b.png.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src="https://salt.tikicdn.com/cache/w824/ts/banner/13/2f/b7/d75ad9b82e40c58e943f757f2c101c3b.png.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <img
              src="https://salt.tikicdn.com/cache/w824/ts/banner/bc/ce/f1/782c8f41d86a1a5ee11a34239644c5cb.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
