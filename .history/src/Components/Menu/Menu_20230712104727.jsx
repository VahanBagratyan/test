import React from 'react'

const Menu = () => {
  return (
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
  )
}


export default Menu;