import React from 'react';
import {GamesType} from "../../Pages/home-page";
import style from './game-buy.module.scss'
import {SuperButton} from "../super-button/super-button";


type PropsType = {
    game: GamesType
}
export const GameBuy: React.FC<PropsType> = props => {
    const {game} = props
    return (
            <div className={style.container}>
                <span className={style.price}>{game.price}</span>
                <SuperButton onClick={()=>null} type='primary'>
                    В корзину
                </SuperButton>
            </div>

    );
};
