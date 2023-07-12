import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";
import { slide as Menu } from 'react-burger-menu';

function Header() {
  const [data, setData] = useState([]);
  const [dataChild, setDataChild] = useState([]);
  const [id, setId] = useState(36);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchRec, setSearchRec] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.post(
          "https://apishop.yerevan-city.am/api/Category/GetParentCategories",
          {
            parentId: 7,
          }
        );
        setData(response.data.data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.post(
          "https://apishop.yerevan-city.am/api/Category/GetAllChildren",
          {
            parentId: id,
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZDMwOWE3Yi04M2E0LTQ2OTUtODJjOC03MTQ4NjcyZWU5ODIiLCJ1bmlxdWVfbmFtZSI6IjE2ODgzNzUwNzUwNTJNbUFQTVlwIiwianRpIjoiM2VhZWRkMjctZDNhNy00MzNkLWI0MGItOGU4ZGViZDA1YjU4IiwiaWF0IjoxNjg4Mzc1MjI4LCJuYmYiOjE2ODgzNzUyMjgsImV4cCI6MTY5NzAxNTIyOCwiaXNzIjoid2ViQXBpIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAyLyJ9._Q0V2d1Ijh6glLBiuHOKaGpjSuy4fZPoDqKjwDco3Ao`,
            },
          }
        );
        setDataChild(response.data.data.children);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    let timeout = setTimeout(async () => {
      try {
        if (searchValue.length > 0) {
          let response = await axios.post(
            "https://apishop.yerevan-city.am/api/Product/Search",
            {
              search: searchValue,
            }
          );
          setLoader(false);
          setSearchResult(response.data.data.products);
        }
      } catch (error) {
        console.error(error);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://apishop.yerevan-city.am/api/Page/Get?type=2",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZDMwOWE3Yi04M2E0LTQ2OTUtODJjOC03MTQ4NjcyZWU5ODIiLCJ1bmlxdWVfbmFtZSI6IjE2ODgzNzUwNzUwNTJNbUFQTVlwIiwianRpIjoiM2VhZWRkMjctZDNhNy00MzNkLWI0MGItOGU4ZGViZDA1YjU4IiwiaWF0IjoxNjg4Mzc1MjI4LCJuYmYiOjE2ODgzNzUyMjgsImV4cCI6MTY5NzAxNTIyOCwiaXNzIjoid2ViQXBpIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAyLyJ9._Q0V2d1Ijh6glLBiuHOKaGpjSuy4fZPoDqKjwDco3Ao`,
            },
          }
        );
        setSearchRec(response.data.data.specialItems[0].products);
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
          <a href="http://localhost:3000" className={styles.logo}>
            <img src="/images/logo.svg" alt="logo" height={100 + "%"} />
          </a>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search"
              className={styles.search_field}
              onChange={(evt) => {
                setSearchValue(evt.target.value);
                setLoader(true);
              }}
            />
            <div className={styles.search_box}>
              <div className={styles.search_content}>
                {searchValue.length <= 0 ? (
                  <div>
                    <h1 className={styles.frequently_searched_title}>
                      Frequently searched
                    </h1>
                    <div className={styles.frequently_searched_box}>
                      {searchRec.map((data) => {
                        return (
                          <div className={styles.frequently_searched}>
                            <img src={data.photo} alt="" height={100 + "%"} />
                            <div>{data.name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : searchResult.length > 0 && !loader ? (
                  searchResult.map((data) => {
                    return (
                      <div className={styles.search_item}>
                        <img
                          src={data.photo}
                          alt="item"
                          className={styles.search_item_img}
                        />
                        <div>
                          <p>
                            {data.price} <span className={styles.dram}>֏</span>
                          </p>
                          <br />
                          <p>{data.name}</p>
                        </div>
                      </div>
                    );
                  })
                ) : searchResult.length <= 0 && !loader ? (
                  <h1 className={styles.no_element_found}>No Element found</h1>
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
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
      <div className={styles.menu}>
        <div className={[styles.categories, styles.menu_item].join(" ")}>
          Categories <p className={styles.down}></p>
          <div className={styles.category_dropdown}>
            <div className={styles.scroll_bar}>
              {data.length > 0 ? (
                data.map((e) => {
                  return (
                    <a
                      href={"http://localhost:3000/products/" + e.id}
                      className={styles.link}
                    >
                      <div
                        className={styles.category_item}
                        onMouseOver={() => setId(e.id)}
                      >
                        {e.name}
                      </div>
                    </a>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
            <div className={styles.right_menu}>
              {dataChild.length > 0 ? (
                dataChild.map((e) => {
                  return (
                    <div className={styles.subtitle_block}>
                      <a
                        href={"http://localhost:3000/products/" + e.id}
                        className={styles.link}
                      >
                        <div className={styles.subtitle}>{e.name}</div>
                      </a>
                      <div>
                        {e.children.map((item) => {
                          return (
                            <a
                              href={"http://localhost:3000/products/" + item.id}
                              className={styles.link}
                            >
                              <p className={styles.subtitle_item}>
                                {item.name}
                              </p>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <Loader />
              )}
            </div>
            <div className={styles.image_container}>
              {data.length > 0 ? (
                data
                  .filter((e) => e.id === id)
                  .map((a) => {
                    return (
                      <img
                        className={styles.image}
                        src={a.photo}
                        alt="menu image"
                      />
                    );
                  })
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
        <div className={styles.menu_item}>Promo</div>

        <div className={styles.menu_item}>Tenders</div>

        <div className={styles.menu_item}>Careers</div>

        <div className={styles.menu_item}>Our Shop</div>

        <div className={styles.menu_item}>About us</div>

        <div className={styles.menu_item}>Partnership</div>
      </div>
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      </div>
    </div>
  );
}

export default Header;
