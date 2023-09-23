import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "../UI/Header.module.css";
import searchBar from "../Vectors/search.png";
import close from "../Vectors/close.png";
import shoppingBag from "../Vectors/shopping-bag.png";
const token = JSON.parse(localStorage.getItem("jwt"));
const Header = () => {
  const [display, setdisplay] = useState(false);

  const displayHandler = () => {
    setdisplay((prev) => {
      return !prev;
    });

    //  if(display===false)
    //  {
    //   document.body.classList.add(classes.backdrop);
    //  }
    //  else{
    //   document.body.classList.remove(classes.backdrop);
    //  }
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.part1}>
          <Link to="/users/products" className={classes.canvasArt}>
            Canvas Art
          </Link>
          <h1 className={classes.bestSeller}>Best Sellers</h1>
        </div>

        <h1 className={classes.logo}>TRAIT</h1>

        <div className={classes.part3}>
          {token && <Link to='/users/me' className={classes.login}>User</Link>}
          {!token && <h1 className={classes.login}>Login</h1>}

          <div className={classes.Searchbox}>
            <img src={searchBar} width={22} onClick={displayHandler}></img>
          </div>
          <div className={classes.cart}>
            <img src={shoppingBag} width={25}></img>
          </div>
        </div>
      </div>
      {display && (
        <div className={classes.width}>
          <div className={classes.backdrop}></div>
          <div className={classes.searchMenu}>
            <div className={classes.inputFeild}>
              <input
                type="text"
                className={classes.input}
                placeholder="Search for anything"
              ></input>

              <img
                src={close}
                width={30}
                className={classes.close}
                onClick={displayHandler}
              ></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
