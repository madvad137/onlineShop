import React from "react";
import style from "./Cart.module.css"
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    let cartSumm = 0;

    return(
       <div className={style.overlay}>
            <div className={style.cotent}>
                <div className={style.catrHeader}>
                    <h3 className={style.cartName}>Корзина</h3>
                    <button className={style.cartClose} onClick={ () => {props.setCartOpen(false)} }>x</button>
                </div>
                    <div className={style.catrItems}>
                        {
                            cartItems.length > 0 ?  cartItems.map((item) => {
                                cartSumm += item.price
                                return (<CartItem CartId = {item.Cartid} itemId ={item.itemId} title = {item.title} img = {item.img} price = {item.price} key ={item.Cartid}/>)
                            }) 
                            : 
                            <div className={style.cartIfno}>
                                <div  className={style.cartText}>Карзина пуста</div>
                                <div  className={style.cartImg}><img src="img/cartImg.png" alt="" /></div>
                            </div>
                        }  
                    </div>
                    {
                        cartItems.length > 0 && (
                        <div className={style.summInfo}>
                            <p>{'Сумма заказа ' + cartSumm}</p>
                            <button className={style.summBtn}>Оформить заказ</button>
                        </div>
                        )
                    } 
            </div>
       </div>
    )
}

export default Cart