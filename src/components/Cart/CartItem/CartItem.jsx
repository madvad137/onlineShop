import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncGetCart } from "../../../asyncAction/cart";
import style from "./CartItem.module.css"

const CartItem = (props) => {
  let { CartId, title, img, price} = props
  const dispatch = useDispatch()
  const [processing, setProcessing] = useState(false);

  let deleteCartItems =() =>{
    try{
      setProcessing(true)
      axios.delete(`https://62ebb3a155d2bd170e743ed0.mockapi.io/cart/${CartId}`)
      .then(() =>{
        dispatch(asyncGetCart())
      })
      .then(() =>{
        setProcessing(false)
      })
    }
    catch{
      console.error();
    }
  }
  
    return(
       <div className={style.wrapper}>
          <div className={style.itemImg}>
            <img src={img} alt="" />
          </div>
          <div className={style.itemInfo}>
            <div className={style.itemName}>{title}</div>
            <div className={style.itemPrice}>{price}</div>
          </div>
          <button onClick={deleteCartItems} disabled={processing} className={style.deleteItemBtn}>x</button>
       </div>
    )
}

export default CartItem