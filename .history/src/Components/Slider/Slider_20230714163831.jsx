import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import "./slider.css";
import axios from "axios";
import {slider} from "../../utils/data/data"

const SliderComp = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{display: "block", marginRight: "55px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    console.log(className );
    return (
      <div
        className={className}
        style={{ left: "7px", zIndex: "1"}}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={styles.slider_root}>
      <Slider {...settings}>
        {baners.map((element) => {
          return (
            <div className={styles.slider_item}>
              <img src={element.path} alt="" className={styles.slider_img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComp;
