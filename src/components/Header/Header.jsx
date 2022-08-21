import React from "react";
import style from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return(
        <header className={style.header}>
            <div className={style.inner}>
                <NavLink className={style.logo} to='/'>
                    <img src="img/logo.png" alt="" />
                </NavLink>
                <div className={style.description}>Магазин любых товаров</div>
                <ul className={style.iconsList}>
                    <li className={style.iconsItem}>
                        <NavLink to='/favorites'>
                            <button className={style.iconsButton}><img src="img/favorites.svg" alt="" /></button>
                        </NavLink>
                    </li>
                    <li className={style.iconsItem}>
                        <button onClick={() =>{props.setCartOpen(true)}} className={style.iconsButton}><img src="img/cart.svg" alt="" /></button>
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Header