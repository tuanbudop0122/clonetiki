import React, { Component } from "react";
import "./style.css";
import Carousel from "../Carousel";
import HeaderMain from "../Components/HeaderMain";

import Product from "../Product";

class HomeShopping extends Component {
  render() {
    return (
      <main className="bg">
        <div className="container ">
          <Carousel />
          <HeaderMain />
          <Product />
        </div>
      </main>
    );
  }
}

export default HomeShopping;
