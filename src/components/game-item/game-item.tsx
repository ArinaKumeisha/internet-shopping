import React from 'react';
import {GamesType} from "../../Pages/home-page";
import style from './game-item.module.scss'

interface PropsType {
    games: GamesType[]
}

export const GameItem: React.FC<PropsType> = props => {
    const {games} = props
    return (
        <div className={style.container}>
            {games.map(game => {
                return (
                    <div className={style.details}>
                        <div><img src={game.image} className={style.image}/></div>
                        <span>{game.title}</span>
                        <div>{game.price}</div>
                        <div>{game.description}</div>
                        {game.genres.map(g => (
                            <div>{g}</div>))}
                    </div>)
            })}
        </div>)
}








