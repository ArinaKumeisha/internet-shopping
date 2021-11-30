import React from 'react';
import style from './cart-block.module.scss'
import {BiCart} from "react-icons/all";

export const CartBlock = () => {
    return (
        <div className={style.cartBlock}>
           <BiCart size={30} className={style.icon}/>
            <span className={style.price}>1300</span>
        </div>
    );
};

