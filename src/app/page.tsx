'use client'

import styles from './styles/page.module.css'
import React, { useState } from 'react';

import { BingoCouponType } from './types/BingoCouponType';

import BingoNumberGenerator from './components/BingoNumberGenerator';
import FetchGames from './components/FetchGames';
import BingoCoupon from './components/BingoCoupon';
import PostSavePlayedRound from './components/SavePlayedRound';

export default function Home() {

  const [bingoCouponsData, setBingoCouponsData] = useState<BingoCouponType[]>([]);
  const [drawnNumbers, setDrawnNumbers] = useState<Number[]>([]);

  function handleBingoCouponData (bct: BingoCouponType[]) {
    setBingoCouponsData(bct);
  }

  function handleDrawnNumbers(newDrawnNumber: Number) {
    setDrawnNumbers([...drawnNumbers, newDrawnNumber]);
  }

  bingoCouponsData.sort(function(a, b) {
    const aNumbers = a.bingoNumbers.filter(num => drawnNumbers.includes(num)).length;
    const bNumbers = b.bingoNumbers.filter(num => drawnNumbers.includes(num)).length;

    return bNumbers - aNumbers
  });

  return (
    <main className={styles.main}>
      <div className={styles.mainButtons}>
        <BingoNumberGenerator onDrawnNumber={handleDrawnNumbers}></BingoNumberGenerator>
        <FetchGames onAddGames={handleBingoCouponData}></FetchGames>
        <PostSavePlayedRound bingoCoupons={bingoCouponsData} drawnNumbers={drawnNumbers}></PostSavePlayedRound>
      </div>
      
      <BingoCoupon bingoCoupons={bingoCouponsData} drawnNumbers={drawnNumbers}></BingoCoupon>
    </main>
  )
}
