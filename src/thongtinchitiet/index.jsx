import React, { Component } from "react";
import "./style.css";
class ThongTin extends Component {
  state = {
    isShowDesc: false,
  };
  toggleDescription = () => {
    this.setState({
      isShowDesc: !this.state.isShowDesc,
    });
  };
  renderTT = () => {
    return this.props.ThongTin.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.value}</td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.state.isShowDesc);
    // console.log(this.props.description);
    return (
      <div className="main">
        <div className="left">
          <h4 className="text-thongTin">Thông Tin Chi Tiết</h4>
          <div className="group" style={{ marginBottom: 40 }}>
            <div className="content has-table">
              <table>
                <tbody>{this.renderTT()}</tbody>
              </table>
            </div>
          </div>
          <div className="group">
            <h4 className="text-thongTin">Mô Tả Sản Phẩm</h4>
            <div className="content">
              <div className="toggle-content">
                {this.state.isShowDesc ? (
                  <div className="hien-mo-ta">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.description,
                      }}
                    ></div>
                  </div>
                ) : (
                  <div className="an-mo-ta">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.description,
                      }}
                    ></div>
                  </div>
                )}
                <a className="btn-more" onClick={this.toggleDescription}>
                  {this.state.isShowDesc
                    ? "Thu gọn nội dung"
                    : "Xem thêm nội dung"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThongTin;
