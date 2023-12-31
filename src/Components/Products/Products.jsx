import { useEffect, useState } from "react";
import styles from "./products.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  let error = false;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://apishop.yerevan-city.am/api/Product/GetByLastCategory",
          {
            categoryId: id,
            count: 20,
            page: 1,
            priceFrom: null,
            priceTo: null,
            countries: [],
            brands: [],
            search: null,
            parentId: id,
            isDiscounted: false,
            sortBy: 3,
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZDMwOWE3Yi04M2E0LTQ2OTUtODJjOC03MTQ4NjcyZWU5ODIiLCJ1bmlxdWVfbmFtZSI6IjE2ODgzNzUwNzUwNTJNbUFQTVlwIiwianRpIjoiM2VhZWRkMjctZDNhNy00MzNkLWI0MGItOGU4ZGViZDA1YjU4IiwiaWF0IjoxNjg4Mzc1MjI4LCJuYmYiOjE2ODgzNzUyMjgsImV4cCI6MTY5NzAxNTIyOCwiaXNzIjoid2ViQXBpIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAyLyJ9._Q0V2d1Ijh6glLBiuHOKaGpjSuy4fZPoDqKjwDco3Ao`,
            },
          }
        );
        setProducts(response.data.data.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.products_container}>
      {products.length > 0 ? (
        products.map((item) => (
          <div className={styles.products_box}>
            <div className={styles.products_img_box}>
              <div className={styles.image_wrapper}>
                <img
                  src={item.photo}
                  className={styles.products_img}
                  onError={(e) => {
                    e.target.src = "/images/logo-small.png";
                  }}
                />
              </div>
              <a
                href={"http://localhost:3000/productdetails/" + item.id}
                className={styles.leran_more}
              >
                Learn More
              </a>
            </div>

            <div className={styles.product_name_box}>
              <p>{item.name}</p>
            </div>
            <p>{item.price} ֏</p>
            <div className={styles.add_to_cart}>
              <p>Add To Cart</p>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
