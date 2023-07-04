import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import axios from "axios";

function Header() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.post(
          "https://apishop.yerevan-city.am/api/Category/GetParentCategories",
          {
            parentId: 7,
          }
        );
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.first_layer}>
        <div className={styles.logo_search_container}>
          <img src="images/logo.svg" alt="logo" className={styles.logo} />
          <input className={styles.search} type="text" placeholder="Search" />
        </div>
        <div className={styles.navigation_bar}>
          <div className={styles.country_dropdown}>
            <div className={styles.flag}>
              <img
                src="images/flags/armenia.png"
                alt="flag"
                className={styles.flag_img}
              />
            </div>
            <h1 className={styles.dram}>֏</h1>
            <h1 className={styles.dram}>AMD</h1>
            <p className={styles.down}></p>
          </div>
          <div className={styles.country_dropdown}>
            <div className={styles.flag}>
              <img
                src="images/flags/britain.png"
                alt="flag"
                className={styles.flag_img}
              />
            </div>
            <h1 className={styles.dram}>English</h1>
            <p className={styles.down}></p>
          </div>
          <p>Sign In</p>
          <img
            src="/images/icons/favorite.svg"
            alt=""
            className={styles.icon}
          />
          <img src="/images/icons/card.svg" alt="" className={styles.icon} />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.categories}>
          Categories <p className={styles.down}></p>
          <div className={styles.category_dropdown}>
            {data.length>0?data.data.categories.map((e)=>e.name):"Loading..."}
          </div>
        </div>
        <div>Promo</div>

        <div>Tenders</div>

        <div>Careers</div>

        <div>Our Shop</div>

        <div>About us</div>

        <div>Partnership</div>
      </div>
    </div>
  );
}

export default Header;
