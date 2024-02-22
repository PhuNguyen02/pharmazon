import React from 'react';
import Banner from '../../../component/Banner/Banner';
import Productlist from '../../../component/Productlist/Productlist';
import BrandProductlist from '../../../component/BrandProductList/BrandProductList';
import Category from '../../../component/category/Category';
const Homepage = () => {
  return (
    <>
      <div className="body-container">
        <div className="wrapper">
          <div className="heading-container">
            <div className="main-container">
              <div className="header-main">
                {/* slider - banner */}
                <Banner />
                <div className="header-main-rightside">
                  <div className="symptom-link">
                    <a href="">
                      <img src="/assets/img/benh-thuong-gap.webp" alt="" />
                    </a>
                  </div>
                  <div className="quick-access">
                    <a href="" className="item-suggest">
                      <div className="item-suggest-img">
                        <img src="/assets/img/can_mua_thuoc.webp" alt="" />
                      </div>
                      <div className="itemm-suggest-text">
                        <p>Phòng khám quanh đây</p>
                      </div>
                    </a>
                    <a href="" className="item-suggest">
                      <div className="item-suggest-img">
                        <img src="/assets/img/tu_van_voi_duoc_sy.webp" alt="" />
                      </div>
                      <div className="itemm-suggest-text">
                        <p>Tư vấn dược sỹ</p>
                      </div>
                    </a>
                    <a href="" className="item-suggest">
                      <div className="item-suggest-img">
                        <img src="/assets/img/tim_nha_thuoc_gan_day.webp" alt="" />
                      </div>
                      <div className="itemm-suggest-text">
                        <p>Nhà thuốc gần đây</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list-container">
            {/* best-seller-cards */}
            <Productlist />
            <div className="health-checkup-container">
              <div className="health-checkup">
                <div className="health-check-left-content">
                  <div className="health-check-header">
                    <h2>Kiểm tra sức khoẻ</h2>
                  </div>
                  <div className="check-item">
                    <div className="check-card">
                      <img src="/assets/img/tim_mach.webp" alt="" />
                      <div className="health-check-content">
                        <div className="health-check-name">
                          <p>Kiểm tra nguy cơ mắc bệnh tim</p>
                        </div>
                        <div className="health-check-btn">
                          <a href="">Kiểm tra</a>
                        </div>
                      </div>
                    </div>
                    <div className="check-card">
                      <img src="/assets/img/da_day.webp" alt="" />
                      <div className="health-check-content">
                        <div className="health-check-name">
                          <p>Kiểm tra nguy cơ mắc bệnh dạ dày</p>
                        </div>
                        <div className="health-check-btn">
                          <a href="">Kiểm tra</a>
                        </div>
                      </div>
                    </div>
                    <div className="check-card">
                      <img src="/assets/img/sa_sut_tri_tue.webp" alt="" />
                      <div className="health-check-content">
                        <div className="health-check-name">
                          <p>Kiểm tra nguy cơ sa sút trí tuệ</p>
                        </div>
                        <div className="health-check-btn">
                          <a href="">Kiểm tra</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="health-check-right-content">
                  <img src="/assets/img/kiemtrasuckhoe.webp" alt="" />
                </div>
              </div>
            </div>
            {/* favourite-brand */}
            <div className="brand-container">
              <div className="brand-container-header">
                <img src="/assets/img/item2.webp" alt="" />
                <h2>Thương hiệu yêu thích</h2>
              </div>
              {/* brand-product */}
              <div className="brand-body">
               <BrandProductlist/>
              </div>
            </div>
            <div className="feature-category-container">
              <div className="feature-category-header">
                <img src="/assets/img/item3.webp" alt="" />
                <h2>Danh mục nổi bật</h2>
              </div>
            <Category/>
            </div>
          </div>
        </div>
      </div>



    </>

  );
};

export default Homepage;