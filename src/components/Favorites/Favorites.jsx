import React from "react";
import { useSelector } from "react-redux";
import Item from "../Catalog/Item/Item";
import style from './Favorites.module.css'

const Favorites = () => {
    const items = useSelector((state) => state.favorite.favoriteItems)
    return(
      <div className={style.catalog}>
        <h2 className={style.name}>Избранное</h2>
        {
          items.length > 0 ? <div className={style.items}>
            {
              items.map((item) => {
                return(<Item id = {item.id} key = {item.id} title = {item.title} price = {item.price} img = {item.img} isFavorite={true} />)
              }) 
            }
          </div>
          :
          <div className={style.favoritesIfno}>
            <div  className={style.favoritesText}>В избранном ничего нет</div>
            <div  className={style.favoritesImg}><img src="img/cartImg.png" alt="" /></div>
          </div>
        }
       

      </div>
    )
}


export default Favorites

