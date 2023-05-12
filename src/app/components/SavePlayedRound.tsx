import React from 'react';
import { BingoCouponType } from '../types/BingoCouponType';

interface SavePlayedRoundProps {
    bingoCoupons: BingoCouponType[]
    drawnNumbers: Number[]
  }

export default function PostSavePlayedRound({bingoCoupons, drawnNumbers}: SavePlayedRoundProps) {

    console.log(bingoCoupons)
    console.log(drawnNumbers)

    const postContent = {
        bingoCoupons: bingoCoupons,
        drawnNumbers: drawnNumbers
    }

  async function postPlayedRound() {
    const res = await fetch(`http://localhost:8081/games/savePlayedRound`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postContent)
    });
    const data = await res.json();
    console.log(data)
  }

  return <button onClick={postPlayedRound}>Save game</button>
  
};