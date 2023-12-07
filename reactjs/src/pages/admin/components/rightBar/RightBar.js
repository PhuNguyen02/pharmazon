import React from 'react';
import './rightBar.css'
const RightBar = () => {
  return (
    <div className="right">
      <div className='right-bar-container'>
        <div className="top">
          <button id="menu-btn">

          </button>
          <div className="profile">
            <div className="info">
              <p>
                Xin chào, <b>Phú</b>
              </p>
              <small className="text-muted">User</small>
            </div>
            <div className="profile-photo">
              <img src="/image/profile-1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="recent-updates">
          <h2>Thông báo</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src="/image/profile-2.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Quang Dũng</b> đã gửi một yêu cầu mới!!
                </p>
                <small className="text-muted">2 Phút trước</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="/image/profile-3.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Hương Giang</b> đã gửi một yêu cầu mới!!
                </p>
                <small className="text-muted">10 Phút trước</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="/image/profile-4.jpg" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Đắc Trung</b> đã gửi một yêu cầu mới!!
                </p>
                <small className="text-muted">14 Phút trước</small>
              </div>
            </div>
          </div>
        </div>
        <div className="sales-analytics">
          <h2>Phân tích</h2>
          <div className="item online">
            <div className="data">
              <div className="info">
                <b>Doanh thu</b>
              </div>
              <h2 className="success">+39%</h2>
            </div>
          </div>
          <div className="item offline">
            <div className="data">
              <div className="info">
                <b>Chi phí</b>
              </div>
              <h2 className="danger">-10%</h2>
            </div>
          </div>
          <div className="item online">
            <div className="data">
              <div className="info">
                <b>Lợi nhuận</b>
              </div>
              <h2 className="success">0%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RightBar;