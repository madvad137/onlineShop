import React from "react";
import { useSelector } from "react-redux";
import style from "./Catalog.module.css"
import Item from "./Item/Item";


const Catalog = () => {
    const items = useSelector((state) => state.items.items)
    const favorites = useSelector((state) => state.favorite.favoriteItems)
    let isFavorite
    return(
      <div className={style.catalog}>
        <h2 className={style.name}>Все товары</h2>
        <div className={style.items}>
        {
           items.map((item) => {
            if(favorites.find((favoriteItem) => favoriteItem.id===item.id)){
              isFavorite=true
            } else{
              isFavorite=false
            }
            return(<Item id = {item.id} key = {item.id} title = {item.title} price = {item.price} img = {item.img}  isFavorite={isFavorite} favorites = {favorites}/>)
          })
        }
        </div>
      </div>
    )
}

export default Catalog

