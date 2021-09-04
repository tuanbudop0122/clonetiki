import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { fetchProductDetail } from "../redux/Action/product";
import ThongTin from "../thongtinchitiet";
class DetailPage extends Component {
  render() {
    console.log("product", this.props.productDetail);
    // console.log(this.props.productDetail.specifications[0].attributes);
    return (
      <div className="main">
        <div className="breadcrumb-wraper">
          <div className="wrapper">
            <div className="breadcrumb">
              <a href="#" className="breadcrumb-item">
                Trang Chủ
              </a>
              <a href="#" className="breadcrumb-item">
                Thiết bị số - Phụ kiện
              </a>
              <a href="#" className="breadcrumb-item">
                Phụ kiện máy tính và laptop
              </a>
              <a href="#" className="breadcrumb-item">
                Phụ kiện phím chuột văn phòng
              </a>
              <a href="#" className="breadcrumb-item">
                Chuột văn phòng
              </a>
              <a href="#" className="breadcrumb-item">
                Chuột văn phòng có dây
              </a>
              <a href="#" className="breadcrumb-item">
                Chuột có dây logitech
              </a>
            </div>
          </div>
        </div>
        <div className="index-style">
          <div className="index-style_wrapper">
            <div className="index-style_product-item">
              <div className="group-img">
                <div className="thumbnail">
                  <div className="img-len_wrapper">
                    <div className="container">
                      <img
                        style={{ width: 444, height: 444 }}
                        src={this.props.productDetail.thumbnail_url}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-img">
                <div className="review-img-list">
                  <a href="#" className="active">
                    <img
                      src={this.props.productDetail.images[0].base_url}
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={this.props.productDetail.images[1].base_url}
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={this.props.productDetail.images[2].base_url}
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src={this.props.productDetail.images[3].base_url}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="giarZk"></div>
            <div className="index-style_product-item2">
              <div className="headerr">
                <div className="brand">
                  <span className="brand-and-author">
                    <h6>Thương hiệu:{this.props.productDetail.brand.name}</h6>
                  </span>
                  <div className="bestseller">
                    <p>
                      <span>Đứng thứ 1</span>
                    </p>
                  </div>
                </div>
                <h1 className="title">
                  <div className="icon-inline">
                    <a href="#">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/e9/68/49/50ac83c9f95bd008cc840e638f0f5791.png"
                        alt=""
                      />
                    </a>
                  </div>
                  {this.props.productDetail.name}
                </h1>
                <div className="below-title">
                  <div className="review-rating">
                    <p className="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </p>
                    <a className="review">(xem 100 đánh giá)</a>
                    <div className="asd"></div>
                  </div>
                  <div className="sellered">Đã bán 100</div>
                </div>
              </div>
              <div className="body">
                <div className="sumary">
                  <div className="left">
                    <div className="price-and-icon">
                      <div className="price">
                        <div className="product-price">
                          <span className="current-price">
                            {this.props.productDetail.price} đ
                          </span>
                          <span className="list-price">
                            {this.props.productDetail.list_price} đ
                          </span>
                          <span className="discount-rate">
                            -{this.props.productDetail.discount_rate}%
                          </span>
                        </div>
                      </div>
                      <div className="icon">
                        <div className="item">
                          <img
                            src="https://salt.tikicdn.com/ts/upload/7b/17/f7/4860983e93ea3c264ae0d932c58ec4f7.png"
                            alt=""
                            style={{ marginRight: 4, width: 48, height: 24 }}
                            className="icon-item"
                          />
                          <span>Hoàn tiền 15% tối đa 600k/tháng</span>
                        </div>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <div className="so_luong">
                        <div className="text-so_luong">
                          <p className="label">Số Lượng</p>
                          <div className="group-input">
                            <button type="button" className="disable">
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                alt=""
                              />
                            </button>
                            <input type="text" className="input" value="1" />
                            <button>
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="group-button">
                        <button type="button" class="btn btn-add-to-cart">
                          chọn mua
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="style-current-seller">
                      <div className="style-seller">
                        <div className="seller-info">
                          <a
                            href="https://tiki.vn/cua-hang/tiki-trading"
                            className="overview"
                          >
                            <div className="logo" style={{ width: 44 }}>
                              <div className="logo-style">
                                <img
                                  src="https://vcdn.tikicdn.com/cache/w88/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png"
                                  alt=""
                                  className="img-logo"
                                />
                              </div>
                            </div>
                            <div className="overview-right">
                              <span className="seller-name">
                                <span>Tiki Trading</span>
                                <div
                                  className="badge-img"
                                  style={{ width: 76 }}
                                >
                                  <div className="img-overview">
                                    <img
                                      className="img-ov"
                                      src="https://salt.tikicdn.com/ts/upload/29/4b/4a/c6765840a95e1ba5c7e51adb455f56a0.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="seller-detail">
                          <div className="item review">
                            <div className="title">
                              <span>4.6/5.0</span>
                              <i class="fas fa-star"></i>
                            </div>
                            <div className="sub-title">2.5tr+</div>
                          </div>
                          <div className="border-left"></div>
                          <div className="item nomal">
                            <div className="title">
                              <span>216k</span>
                            </div>
                            <div className="sub-title">Theo dõi</div>
                          </div>
                        </div>
                        <div className="seller-action">
                          <a href="#" className="action">
                            <img
                              src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png"
                              alt=""
                              width={20}
                              height={20}
                            />
                            <span>Xem shop</span>
                          </a>
                          <div className="action follow">
                            <img
                              src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png"
                              alt=""
                              width={20}
                              height={20}
                            />
                            <span>Theo dõi</span>
                          </div>
                        </div>
                      </div>
                      <div className="style-warranty-details">
                        <div className="warranty-item">
                          <span className="itemLeft">Thời gian bảo hành</span>
                          <span className="itemRight">12 tháng</span>
                        </div>
                        <div className="warranty-item">
                          <span className="itemLeft">Hình thức bảo hành</span>
                          <span className="itemRight">Hóa đơn</span>
                        </div>
                        <div className="warranty-item">
                          <span className="itemLeft">Nơi bảo hành</span>
                          <span className="itemRight">Bảo hành chính hãng</span>
                        </div>
                        <div className="warranty-item">
                          <span className="itemLeft">Hướng dẫn bảo hành</span>
                          <span className="itemRight text-link">
                            Xem chi tiết
                          </span>
                        </div>
                      </div>
                      <div className="customer">
                        <div class="benefit-item compensation">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/compensation.svg"
                            alt=""
                            height={20}
                          />
                          <span>
                            {
                              this.props.productDetail.seller_specifications[0]
                                .name
                            }
                          </span>
                        </div>
                        <div class="benefit-item guarantee">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/guarantee.svg"
                            alt=""
                            height={20}
                          />
                          <span>
                            Mở hộp
                            <br />
                            kiểm tra
                            <br />
                            nhận hàng
                          </span>
                        </div>
                        <div className="benefit-item refund">
                          <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/refund.svg"
                            alt=""
                            height={20}
                          />
                          <span>
                            Đổi trả trong
                            <br />
                            <b>7 ngày</b>
                            <br />
                            nếu sp lỗi
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="style-compare">
                      <div className="style-left-compare">
                        <div className="Count">1 nhà bán khác</div>
                        <div className="LowestPrice">Giá từ 22.990.000 ₫</div>
                      </div>
                      <a href="#" className="compare-button-link">
                        So Sánh
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="index-style">
          <ThongTin
            ThongTin={this.props.productDetail.specifications[0].attributes}
            description={this.props.productDetail.description}
          />
        </div>
        ;
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchProductDetail(this.props.match.params.id));
  }
}
const mapStateToProps = (state) => ({
  productDetail: state.ProductReducer.productDetail || {
    images: {
      0: {
        base_url: "",
      },
      1: {
        base_url: "",
      },
      2: {
        base_url: "",
      },
      3: {
        base_url: "",
      },
      4: {
        base_url: "",
      },
      5: {
        base_url: "",
      },
    },
    brand: {
      name: "",
    },
    current_seller: {
      price: "",
    },
    seller_specifications: {
      0: {
        name: "",
      },
    },
    specifications: {
      0: {
        attributes: [],
      },
    },
    description: [],
  },
});

export default connect(mapStateToProps)(DetailPage);
