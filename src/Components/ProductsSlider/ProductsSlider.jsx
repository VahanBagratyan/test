import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./productsSlider.module.css";
import axios from "axios";

const ProductsSliderComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://apishop.yerevan-city.am/api/Page/Get?type=1",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZDMwOWE3Yi04M2E0LTQ2OTUtODJjOC03MTQ4NjcyZWU5ODIiLCJ1bmlxdWVfbmFtZSI6IjE2ODgzNzUwNzUwNTJNbUFQTVlwIiwianRpIjoiM2VhZWRkMjctZDNhNy00MzNkLWI0MGItOGU4ZGViZDA1YjU4IiwiaWF0IjoxNjg4Mzc1MjI4LCJuYmYiOjE2ODgzNzUyMjgsImV4cCI6MTY5NzAxNTIyOCwiaXNzIjoid2ViQXBpIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAyLyJ9._Q0V2d1Ijh6glLBiuHOKaGpjSuy4fZPoDqKjwDco3Ao`,
          },
        }
      );

      setData(response.data.data.specialItems)
    };
    fetchData()
  }, []);

  return (
    <div className={styles.root}>
        {data.map((element)=>{
            return(
            <div>{element.title}</div>)
        })}
    </div>
  );
};

export default ProductsSliderComp;
