import React, { useState } from "react";
import styles from "./header.module.css";

function Header() {
  const [isHovered, setIsHovered] = useState(1);
  console.log(isHovered);
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
          <img src="/images/icons/favorite.svg" alt="" className={styles.icon} />
          <img src="/images/icons/card.svg" alt="" className={styles.icon} />
        </div>
      </div>
      <div className={styles.menu}>
        <div
          className={styles.categories}
          onMouseOver={() => setIsHovered(2)}  onMouseLeave={() =>isHovered==2? setTimeout(() => setIsHovered(1), 1000):null}>
          Categories <p
            className={
                isHovered>1
                  ? styles.up
                  : styles.down
              } 
            ></p>
          <div
        className={
            isHovered >1
              ? styles.category_dropdownOpened
              : styles.category_dropdownClosed
          }
          onMouseLeave={() => setIsHovered(3)}
          ></div>
        </div>

        <div>Gev</div>

        <div>Gev</div>

        <div>Gev</div>

        <div>Gev</div>

        <div>Gev</div>

        <div>Gev</div>
      </div>
    </div>
  );
}

export default Header;
