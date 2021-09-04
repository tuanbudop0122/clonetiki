import React, { Component } from "react";
import "./style.css";
import { withRouter, NavLink } from "react-router-dom";

class ProductItem extends Component {
  // state = {
  //   isShow: false,
  // };
  // toggleShow = () => {
  //   this.setState({
  //     isShow: !this.state.isShow,
  //   });
  // };

  render() {
    const isShowQuantity = this.props.item.quantity_sold;
    let textQuantity;
    if (isShowQuantity) {
      textQuantity = this.props.item.quantity_sold.text;
    }
    var string = this.props.item.name;
    var length = 57;
    var trimmedString =
      string.length > length ? string.substring(0, length) + "..." : string;
    // console.log(this.props.item);
    return (
      <div>
        <NavLink
          className="product-item"
          exact
          to={`/detail/${this.props.item.id}`}
        >
          <span className="style-item">
            <div>
              <div className="thumbnail">
                <div className="badge-top"></div>
                <img src={this.props.item.thumbnail_url} alt="" />
                <div className="info">
                  <div className="badge-service"></div>
                  <div className="name">
                    <span>{trimmedString}</span>
                  </div>
                  <div
                    className="rating"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 4,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <div style={{ position: "relative" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <i
                            class="fas fa-star"
                            style={{
                              color: "yellow",
                              fontSize: 14,
                            }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{
                              color: "yellow",
                              fontSize: 14,
                            }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{
                              color: "yellow",
                              fontSize: 14,
                            }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{
                              color: "yellow",
                              fontSize: 14,
                            }}
                          ></i>
                          <i
                            class="fas fa-star"
                            style={{
                              color: "yellow",
                              fontSize: 14,
                            }}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "rgb(120,120,120)",
                        lineHeight: "normal",
                        fontSize: 11,
                        paddingLeft: 4,
                      }}
                    >
                      <div
                        style={{
                          width: 1,
                          height: 9,
                          backgroundColor: "rgb(199,199,199)",
                        }}
                      ></div>
                      <div style={{ paddingLeft: 6 }}>{textQuantity}</div>
                    </div>
                  </div>
                  <div className="price-discount">
                    <div className="price">{this.props.item.price} ₫</div>
                    <div className="price-discount-rate">
                      -{this.props.item.discount_rate}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </NavLink>
      </div>
    );
  }
}
export default withRouter(ProductItem);
