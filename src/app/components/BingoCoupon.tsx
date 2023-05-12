import React, { useState } from 'react';
import { BingoCouponType } from '../types/BingoCouponType';
import styles from '../styles/bingoCoupon.module.css'

interface BingoCouponProps {
  bingoCoupons: BingoCouponType[]
  drawnNumbers: Number[]
}

export default function BingoCoupon ({bingoCoupons, drawnNumbers}: BingoCouponProps) {

  // bingoCoupons = bingoCoupons.slice(5,20)
  // console.log('games', bingoCoupons)

  return <div className={styles.coupons}>{
    bingoCoupons.map((bingoCoupon) => (
      <div className={styles.coupon} key={bingoCoupon.game.id}>
        <div className={styles.couponInner} key={bingoCoupon.game.id}>
          <div className={styles.couponText}>
            {bingoCoupon.game.name}
          </div>
          <div className={styles.couponBody}>
            <div className={styles.couponHeader}>
              BINGO
            </div>
            <div className={styles.couponBodyNumbers}>
              {bingoCoupon.bingoNumbers.map((jokunumero, idx) => 
                <div key={idx} className={`${styles.couponBodyNumber} ${drawnNumbers.includes(jokunumero) && styles.free}`}>{jokunumero.toString()}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    ))
  }
  </div>
};