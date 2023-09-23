import React, { useState } from "react";
import classes from '../UI/User.module.css'
import close from "../Vectors/close.png";
import man from "../Vectors/man.jpg"
const User=()=>{
  const [display, setdisplay] = useState(true);
  const [imgDisplay, setImageDisplay] = useState(false)
  const displayHandler = () => {
    setdisplay((prev) => !prev);
  }

return(
  <div className={classes.user}>
   <div className={classes.part1}>
    
        <div className={classes.filterHeading}>
        <h1 className={classes.logo}>INFO</h1>
            <img
              src={close}
              width={20}
              className={classes.close}
              onClick={displayHandler}
            ></img>
          </div>

      <h1 className={classes.options}>Orders</h1>

      <h1 className={classes.options}>Wishlist</h1>
      
      <h1 className={classes.options}>Users</h1>
     
      <h1 className={classes.options}>Update Info</h1>      

      <h1 className={classes.options}>Logout</h1>      

    </div>

   <div className={classes.part}>
    <h1 className={classes.heading}>Account</h1>
    <div className={classes.part2}>
    <img src={man} className={classes.image} width={200} height={200} ></img>
    <div className={classes.dataContainer}>

    <h1 className={classes.info}>Aditya Bhatt</h1>
    <h1 className={classes.info}>adibhatt2203@gmail.com</h1>
    <h1 className={classes.info}>+918791465161</h1>
    </div>
   </div>

   </div>
  </div>
)

}

export default User;