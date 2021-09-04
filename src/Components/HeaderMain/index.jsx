import React, { Component } from "react";
import "./style.css";
class HeaderMain extends Component {
  render() {
    return (
      <div className="header-">
        <div className="title-header" style={{ height: 48 }}>
          Gợi ý hôm nay
        </div>
        <div className="tabs-header">
          <div className="tab active">
            <div style={{ width: 48 }}>
              <div className="img-header">
                <img
                  src="https://salt.tikicdn.com/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png"
                  alt=""
                  className="img-"
                />
              </div>
            </div>
            <div className="tab-text">Dành cho bạn</div>
          </div>
          <div className="tab ">
            <div style={{ width: 48 }}>
              <div className="img-header">
                <img
                  src="https://salt.tikicdn.com/ts/upload/14/d2/fa/49a9882cea6c62cc2527d297634f345a.png"
                  alt=""
                  className="img-"
                />
              </div>
            </div>
            <div className="tab-text">Hàng mới</div>
          </div>
          <div className="tab ">
            <div style={{ width: 48 }}>
              <div className="img-header">
                <img
                  src="https://salt.tikicdn.com/ts/category/48/96/3b/9403c9f9579883b9433decf44e3d4591.png"
                  alt=""
                  className="img-"
                />
              </div>
            </div>
            <div className="tab-text">Thời Trang</div>
          </div>
          <div className="tab ">
            <div style={{ width: 48 }}>
              <div className="img-header">
                <img
                  src="https://salt.tikicdn.com/ts/category/12/29/a2/7409ff03cff5c0d3d695cb19f8f15896.png"
                  alt=""
                  className="img-"
                />
              </div>
            </div>
            <div className="tab-text">Nhà cửa - Đời sống</div>
          </div>
          <div className="tab ">
            <div style={{ width: 48 }}>
              <div className="img-header">
                <img
                  src="https://salt.tikicdn.com/ts/upload/3b/b7/5d/161ce01cd4c91ba5495bc44790314016.png"
                  alt=""
                  className="img-"
                />
              </div>
            </div>
            <div className="tab-text">Không giới hạn</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
