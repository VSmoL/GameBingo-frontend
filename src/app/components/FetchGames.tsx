import React from 'react';
import { BingoCouponType } from '../types/BingoCouponType';
import { Game } from '../types/GameData';

import createCouponNumbers from './CreateBingoCouponNumbers'

interface FetchGamesProps {
  onAddGames: (bct: BingoCouponType[]) => void;
}

export default function FetchGames({onAddGames}: FetchGamesProps) {

  async function getDataFromApi() {
    const res = await fetch(`http://localhost:8081/games/allgames`);
    const data = await res.json();

    const allData: BingoCouponType[] = [];

    data.forEach((dataGame: Game) => {
      let bn = createCouponNumbers();
      allData.push({
        bingoNumbers: bn, 
        game: dataGame
      })
    })
    onAddGames(allData);
  }

  return <button onClick={getDataFromApi}>Make API call</button>
  
};