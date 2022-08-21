import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCart } from "../../../asyncAction/cart";
import { asyncGetFavorites } from "../../../asyncAction/favorites";
import style from "./Item.module.css"

const Item = (props) => {
    let { id, title, price, img, isFavorite} = props
    const [processing, setProcessing] = useState(false);
    const favorites = useSelector((state) => state.favorite.favoriteItems)
    const dispatch = useDispatch()
    let favoriteId = favorites.find((item) => item.id===id )
    
    let addItemToCart = () => {
        let item ={
            itemId:id,
            title,
            price,
            img
        }
        axios.post('https://62ebb3a155d2bd170e743ed0.mockapi.io/cart', item).then(() =>{
            dispatch(asyncGetCart())  
        })
         
    }

    let addItemToFavorites = () => {
        setProcessing(true)
        let item ={
            id,
            title,
            price,
            img
        }
        axios.post('https://62ebb3a155d2bd170e743ed0.mockapi.io/favorites', item).then(() => {
            dispatch(asyncGetFavorites())
        })
        .then(() =>{
            setProcessing(false)
        })
    }

    let deleteFavoriteItems =() =>{
        try{
            setProcessing(true)
          axios.delete(`https://62ebb3a155d2bd170e743ed0.mockapi.io/favorites/${favoriteId.favoriteId}`)
          .then(() =>{
            dispatch(asyncGetFavorites())
          })
          .then(() => {
            setProcessing(false)
          })
        }
        catch{
          console.error();
        }
      }
      
    return(
        <div className={style.item}>
            <div className={style.itemImg}>
                <img src={img} alt="" />
            </div>
            <div className={style.itemName}>{title}</div>
            <div className={style.itemPrice}>{price+'р'}</div>
            <button onClick={addItemToCart} className={style.cart}>
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.999 0L29.0703 2.5H26.659L22.3165 17.5H5.76777L-0.000976562 3.75H21.014L20.309 6.25H3.75902L7.43027 15H20.4653L24.7553 0H29.999ZM10.624 18.75C9.58902 18.75 8.74902 19.59 8.74902 20.625C8.74902 21.6612 9.58902 22.5 10.624 22.5C11.659 22.5 12.499 21.6612 12.499 20.625C12.499 19.59 11.659 18.75 10.624 18.75ZM16.874 18.75C15.839 18.75 14.999 19.5888 14.999 20.625C14.999 21.6612 15.839 22.5 16.874 22.5C17.909 22.5 18.749 21.6612 18.749 20.625C18.749 19.59 17.909 18.75 16.874 18.75Z" fill="#fff"/>
                </svg>
            </button>
            {
                isFavorite === true ?
                (
                    <button disabled={processing} className={style.itemFavorites} onClick={deleteFavoriteItems}>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3.43498C10.011 -1.96402 0 -1.16202 0 7.00298C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.00298C24 -1.11502 14 -1.99602 12 3.43498Z" fill="#1C62CD"/>
                    </svg>
                </button>
                )
                :
                (
                    <button disabled={processing} className={style.itemFavorites} onClick={addItemToFavorites}>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z" fill="#2F3035"/>
                    </svg>
                </button> 
                )
            }
        </div>
    )
}


export default Item