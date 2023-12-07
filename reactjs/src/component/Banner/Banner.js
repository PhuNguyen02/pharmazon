import React, { Component, useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = (props) => {
  const [banners, setBanner] = useState([])
  useEffect(() => {
    const banners = [
      {
        src: "/assets/img/banner1.webp"
      },
      {
        src: "/assets/img/banner-maternity.png"
      },
      {
        src: "/assets/img/buy_one_get_one.jpg"
      }
    ]
    setBanner(banners)
  }, [])
  return (
    <div className="banner">
      <div className="slider-frame">
        <div className="images-area">
          <Carousel showArrows={true} showThumbs={false} showStatus={false}>
            {banners?.map((item) => (
              <img src={item.src} alt="" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default Banner;