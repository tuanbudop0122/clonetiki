import React, { Component } from "react";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="new-letter">
          <div
            className="footer-container"
            style={{ height: 100, paddingTop: 32, display: "flex" }}
          >
            <div className="icon">
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png"
                alt=""
                width="163"
              />
            </div>
            <div className="description">
              <h3>Đăng ký nhận bản tin tiki</h3>
              <h5>
                Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
              </h5>
            </div>
            <div className="new-letter-form" style={{ display: "flex" }}>
              <div>
                <input type="email" placeholder="Địa chỉ email của bạn" />
              </div>
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
        <div className="information">
          <div
            className="footer-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="block" style={{ width: 268 }}>
              <h4>Hỗ trợ khách hàng</h4>
              <p className="hotline">
                Hotline chăm sóc khách hàng:0969891123
                <span className="small-text">
                  (1000đ/phút , 8-21h kể cả T7, CN)
                </span>
              </p>
              <a href="#" className="small-text">
                Các câu hỏi thường gặp
              </a>
              <a href="#" className="small-text">
                Gửi yêu cầu hỗ trợ
              </a>
              <a href="#" className="small-text">
                Hướng dẫn đặt hàng
              </a>
              <a href="#" className="small-text">
                Phương thức vận chuyển
              </a>
              <a href="#" className="small-text">
                Chính sách đổi trả
              </a>
              <a href="#" className="small-text">
                Hướng dẫn trả góp
              </a>
              <a href="#" className="small-text">
                Chính sách hàng nhập khẩu
              </a>
              <p className="security">
                Hỗ trợ khách hàng:
                <a href="#">tuanbudop0122@gmail.com</a>
              </p>
              <p className="security">
                Báo lỗi bảo mật:<a href="#">tuanbudop0122@gmail.com</a>
              </p>
            </div>
            <div className="block">
              <h4>Về tiki</h4>
              <a href="#" className="small-text">
                Giới thiệu Tiki
              </a>
              <a href="#" className="small-text">
                Tuyển Dụng
              </a>
              <a href="#" className="small-text">
                Chính sách bảo mật thanh toán
              </a>
              <a href="#" className="small-text">
                Chính sách bảo mật thông tin cá nhân
              </a>
              <a href="#" className="small-text">
                Chính sách giải quyết khiếu nại
              </a>
              <a href="#" className="small-text">
                Điều khoản sử dụng
              </a>
              <a href="#" className="small-text">
                Giới thiệu Tiki Xu
              </a>
              <a href="#" className="small-text">
                Bán hàng doanh nghiệp
              </a>
            </div>
            <div className="block">
              <h4>HỢP TÁC VÀ LIÊN KẾT</h4>
              <a href="#" className="small-text">
                Quy chế hoạt động Sàn GDTMĐT
              </a>
              <a href="#" className="small-text">
                Bán hàng cùng Tiki
              </a>
            </div>
            <div className="block">
              <h4>PHƯƠNG THỨC THANH TOÁN</h4>
              <p>
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg"
                  alt=""
                  className="information-icon"
                  style={{ width: 54 }}
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg"
                  alt=""
                  className="information-icon"
                  style={{ width: 54 }}
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg"
                  alt=""
                  className="information-icon"
                  style={{ width: 54 }}
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg"
                  alt=""
                  className="information-icon"
                  style={{ width: 54 }}
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg"
                  alt=""
                  className="information-icon"
                  style={{ width: 54 }}
                />
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg"
                  alt=""
                  className="information-icon"
                  style={{ width: 54 }}
                />
              </p>
            </div>
            <div className="block">
              <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
              <p>
                <a
                  href="https://www.facebook.com/tuanbudop126/"
                  className="information-icon"
                >
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg"
                    alt=""
                    style={{ width: 32 }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQGQvT8y-vln9fWekt-5N2w"
                  className="information-icon"
                >
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/youtube.svg"
                    alt=""
                    style={{ width: 32 }}
                  />
                </a>
                <a
                  href="https://zalo.me/0969891123"
                  className="information-icon"
                >
                  <img
                    src="https://s120-ava-talk.zadn.vn/8/c/f/7/20/120/dbaa3f9e1990053a68e1c405d82c03d3.jpg"
                    alt=""
                    style={{ width: 32 }}
                  />
                </a>
              </p>
              <h4 style={{ marginTop: 36 }}>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h4>
              <p>
                <a href="#" className="information-icon">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                    alt=""
                    style={{ width: 134 }}
                  />
                </a>
                <a href="#" className="information-icon">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                    alt=""
                    style={{ width: 134 }}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="addresses">
          <div className="footer-container" style={{ display: "flex" }}>
            <div className="address">
              <div className="address-info">
                <p className="small-text address-title">
                  <b>Địa chỉ văn phòng:</b>
                  856/9 Quang Trung, Phường 8 , quận Gò Vấp, thành phố Hồ Chí
                  Minh
                </p>
                <p className="small-text address-text">
                  Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ
                  trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử
                  lý đơn hàng
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <div
            className="footer-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h5>© 2016 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</h5>
              <p>
                Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch
                và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010
              </p>
            </div>
            <div className="block">
              <a href="#">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                  alt=""
                  style={{ width: 36 }}
                />
              </a>
              <a href="#">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                  alt=""
                  style={{ width: 120 }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
