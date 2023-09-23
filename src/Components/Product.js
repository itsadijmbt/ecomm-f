import React, { useEffect, useState } from "react";
import classes from "../UI/Product.module.css";
import close from "../Vectors/close.png";
import filter from "../Vectors/edit.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('jwt'));
  console.log(token);

  const [display, setdisplay] = useState(true);
  const [success, setSuccess] = useState(false);
  const [realData, setRealData] = useState([]);
  const [productClass, setProductClass] = useState(classes.productServer);
  const displayHandler = () => {
    setdisplay((prev) => !prev);

    if (display === false) {
      setProductClass(classes.productServer);
    } else {
      setProductClass(classes.productServerOnly);
    }
    console.log(productClass);
  };

   if(!token){
    console.log("authntication is required")
   }
   
  useEffect(() => {
    fetch("http://localhost:4000/users/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRealData(data);

        //  console.log(data.json())

        if (data.length === 0) {
          setSuccess(false);
          console.log("navigating to page");
          navigate("/users/login");
        } else if (data.error) {
          setSuccess(false);
          console.log("navigating to page");
          navigate("/users/login");
        }

        setSuccess(true);
      })
      .catch((err) => {
        setSuccess(false);

        console.log(err);
      });
  }, []);

  return (
    <div className={classes.productPage}>
      {!display && (
        <div className={classes.intro}>
          <img
            src={filter}
            width={25}
            onClick={displayHandler}
            className={classes.filterTag}
          ></img>
        </div>
      )}
      {display && (
        <div className={classes.productFilters}>
          <div className={classes.filterHeading}>
            <h1 className={classes.heading}>Filter</h1>
            <img
              src={close}
              width={20}
              className={classes.close}
              onClick={displayHandler}
            ></img>
          </div>
          <div className={classes.filters}>
            <div className={classes.filter}>
              <h1 className={classes.filterName}>Price</h1>
              <input type="checkbox" className={classes.activeFilter}></input>
            </div>
            <div className={classes.filter}>
              <h1 className={classes.filterName}>Price</h1>
              <input type="checkbox" className={classes.activeFilter}></input>
            </div>
            <div className={classes.filter}>
              <h1 className={classes.filterName}>Price</h1>
              <input type="checkbox" className={classes.activeFilter}></input>
            </div>
            <div className={classes.filter}>
              <h1 className={classes.filterName}>Price</h1>
              <input type="checkbox" className={classes.activeFilter}></input>
            </div>
            <div className={classes.filter}>
              <h1 className={classes.filterName}>Price</h1>
              <input type="checkbox" className={classes.activeFilter}></input>
            </div>
            <div className={classes.filter}>
              <h1 className={classes.filterName}>Price</h1>
              <input type="checkbox" className={classes.activeFilter}></input>
            </div>
            <div className={classes.filter}>
              <h1 className={classes.filterName}>Price</h1>
              <input type="checkbox" className={classes.activeFilter}></input>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className={productClass}>
          {realData.map((data) => (
            <>
              <div key={data._id} className={classes.productContainer}>
                <img width="90%" height="80%" className={classes.image}></img>
                <p className={classes.productName}>{data.product_name}</p>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;

// useEffect hook to avoid potential issues with the fetch call being made every time your component renders.
