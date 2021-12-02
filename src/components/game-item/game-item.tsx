import React from 'react';
import {GamesType} from "../../Pages/home-page";
import style from './game-item.module.scss'
import {GameBuy} from "../game-buy";
import {Genre} from "../genre";

type PropsType = {
    game: GamesType
}

export const GameItem = (props: PropsType) => {
    const {game} = props
    return (
        <div className={style.container}>
            <div className={style.details} key={game.id}>
                <div><img src={game.image} className={style.image}/></div>
                <span className={style.title}>{game.title}</span>

                <div className={style.genre}>{game.genres.map((genre) => (
                    <Genre key={genre} genre={genre}/>))}
                </div>
                <div className={style.buy}>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>)
}








