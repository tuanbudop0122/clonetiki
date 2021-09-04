import React from "react";
import "./style.css";

export default function SignIn() {
  return (
    <div className="tk-playground">
      <div className="tk-playground-main">
        <div id="container" className="container">
          <div className="login">
            <div className="login-title">
              <h3>Chào mừng bạn đến với TiKi. Đăng nhập ngay!</h3>
              <div className="login-other">
                <span>
                  Thành viên mới?
                  <a href="#">Đăng ký</a>
                  tại đây
                </span>
              </div>
            </div>
            <div>
              <div>
                <div className="mod-login">
                  <div className="mod-login-col1">
                    <div className="mod-input">
                      <label>Số điện thoại hoặc email</label>
                      <input
                        type="text"
                        placeholder="Vui lòng nhập số điện thoại hoặc email của bạn "
                      />
                      <span></span>
                    </div>
                    <div className="mod-input">
                      <label>Mật khẩu</label>
                      <input
                        type="password"
                        placeholder="Vui lòng nhập mật khẩu của bạn"
                      />
                      <span></span>
                    </div>
                    <div className="mod-login-forgot">
                      <a href="#">Quên mật khẩu?</a>
                    </div>
                  </div>
                  <div className="mod-login-col2">
                    <div className="mod-login-btn">
                      <button
                        className="next-btn next-btn-primary next-btn-large"
                        type="submit"
                      >
                        ĐĂNG NHẬP
                      </button>
                    </div>
                    <div className="mod-login-third">
                      <div className="mod-third-party-login mod-login-third-btns">
                        <div className="mod-third-party-login-line">
                          Hoặc, đăng nhập bằng
                        </div>
                        <div className="mod-third-party-login-bd">
                          <button className="mod-button mod-third-party-login-btn mod-third-party-login-fb">
                            <i
                              style={{ fontSize: 16, marginRight: 20 }}
                              class="fab fa-facebook-f"
                            ></i>
                            Facebook
                          </button>
                          <button className="mod-button mod-third-party-login-btn mod-third-party-login-google">
                            <i
                              style={{ fontSize: 16, marginRight: 20 }}
                              class="fab fa-google-plus-g"
                            ></i>
                            Google
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
