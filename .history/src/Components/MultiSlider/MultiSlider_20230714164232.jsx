import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import styles from "./multiSlider.module.css";
import {trendingBrands} from "../../utils/data/data"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ display: "block" }} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", left: "-46px", zIndex: "1" }}
      onClick={onClick}
    />
  );
}

const MultiSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.slider_root}>
      <div className={styles.title}>
        <h2>Trending brands</h2>
      </div>
      <Slider {...settings} styles={{ fontSize: 100 + "px !important" }}>
        {trendingBrands.map((element) => {
          if (!element.photo) {
            return null;
          }
          return (
            <div className={styles.slider_item}>
              <img
                src={element.photo}
                className={styles.slider_img}
                onError={(e) => {
                  e.target.src = "/images/logo-small.png";
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MultiSlider;
