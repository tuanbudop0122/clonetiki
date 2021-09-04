import React, { Component } from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container-header">
          <div className="middle__wrap">
            <div className="middle__leftcontainer">
              <div className="logo-menu">
                <div className="style-logo">
                  <a href="#" className="header-main_logo">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                      alt="main_logo"
                    />
                  </a>
                </div>
                <div className="style_wraper">
                  <a href="#" className="menu_button">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/96/d1/77/e499ea39b0773a337d2217ad473fcb97.png"
                      className="hamburger_menu"
                      alt=""
                    />
                    <div className="wrap">
                      <span>Danh Mục</span>
                      <span className="text-icon">
                        "Sản phẩm"
                        <img
                          src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="form-search_root">
                <div className="form-search_form">
                  <input
                    type="text"
                    placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
                    className="form-search_input"
                  />
                  <button className="form-search_button">
                    <img
                      src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
                      alt=""
                      className="icon-search"
                    />
                    Tìm Kiếm
                  </button>
                </div>
              </div>
            </div>
            <div className="user-style_root">
              <div className="user-style_item">
                <img
                  className="profile-icon"
                  src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                  alt=""
                />
                <span className="user-style_item-text">
                  <span className="account-label">
                    <span>Tài Khoản</span>
                    <img
                      className="arrow-icon"
                      src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                      alt=""
                    />
                  </span>
                  <button className="user-style_no-wrap bg-primary ">
                    Đăng nhập
                  </button>
                </span>
              </div>
              <div className="user-style_card-item">
                <a href="#">
                  <div className="user-style_item-sc">
                    <div className="card-wraper">
                      <img
                        className="cart-icon"
                        src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                        alt=""
                      />
                      <span className="card-wraper_item">0</span>
                    </div>
                    <span className="card-text">Giỏ Hàng</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-root">
          <div className="container bottom-menu">
            <div className="style-header-keywords">
              <a href="https://tiki.vn/search?q=t%E1%BB%A7%20l%E1%BA%A1nh">
                Tủ lạnh
              </a>
              <a href="https://tiki.vn/search?q=s%C3%A1ch%20k%E1%BB%B9%20n%C4%83ng%20s%E1%BB%91ng">
                Sách kỹ năng sống
              </a>
              <a href="https://tiki.vn/search?q=%C3%A1o%20hoodie%20nam">
                Áo hoodie nam
              </a>
              <a href="https://tiki.vn/search?q=s%E1%BB%AFa%20r%E1%BB%ADa%20m%E1%BA%B7t">
                Sữa rửa mặt
              </a>
              <a href="https://tiki.vn/search?q=airpod">Airpod</a>
              <a href="https://tiki.vn/search?q=s%E1%BA%A1c%20d%E1%BB%B1%20ph%C3%B2ng">
                Sạc dự phòng
              </a>
              <a href="https://tiki.vn/search?q=gi%E1%BB%8F+qu%C3%A0+t%E1%BA%BFt">
                Giỏ quà tết
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
