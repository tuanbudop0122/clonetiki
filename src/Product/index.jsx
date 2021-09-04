import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../Components/ProductItem";
import { fetchProduct } from "../redux/Action/product";

import "./style.css";
class HomeProDuct extends Component {
  state = {
    i: 11,
  };
  toggleShow = () => {
    this.setState({
      i: this.state.i + 12,
    });
  };
  toggleCollapse = () => {
    this.setState({
      i: this.state.i - 36,
    });
  };
  render() {
    return (
      <div className="product">
        <div className="content">
          {this.props.productList.a.map((item, index) => {
            if (index <= this.state.i)
              return (
                <div className="item" key={index}>
                  <ProductItem item={item} />
                </div>
              );
          })}
        </div>
        {this.state.i > 46 ? (
          <a className="btn btn-danger" onClick={this.toggleCollapse}>
            Thu gọn
          </a>
        ) : (
          <a className="btn btn-danger" onClick={this.toggleShow}>
            Xem thêm
          </a>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchProduct());
  }
}
const mapStateToProps = (state) => ({
  productList: state.ProductReducer,
});
export default connect(mapStateToProps)(HomeProDuct);
