import styles from "./header.module.css";
//Compoenents
import MenuBar from "../Menu/Menu";
import Search from "../Search/Search";
import { useEffect, useState } from "react";

function Header() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle window resize event
    function handleResize() {
      // Update window width in the state
      setWindowWidth(window.innerWidth);
    }

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className={styles.root}>
      <div className={styles.first_layer}>
        <div className={styles.logo_search_container}>
          <a href="http://localhost:3000" className={styles.logo}>
            <img src="/images/logo.svg" alt="logo" height={100 + "%"} />
          </a>
          <Search />
        </div>
        <div className={styles.navigation_bar}>
          <div className={styles.country_dropdown}>
            <div className={styles.flag}>
              <img
                src="/images/flags/armenia.png"
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
                src="/images/flags/britain.png"
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
      <div className={styles.menu_root}>
        {windowWidth >= 1000 ? <MenuBar /> : console.log("Vardan")}
      </div>
    </div>
  );
}

export default Header;
