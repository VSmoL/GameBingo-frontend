import styles from '../styles/bingoCoupon.module.css'

interface BingoNumbersProps {
  couponBingoNumbers: Number[]
  drawnNumbers: Number[]
}

const BingoNumbers = ({couponBingoNumbers, drawnNumbers}: BingoNumbersProps) => {

  console.log(couponBingoNumbers)
  console.log(drawnNumbers)

  // return <div className={styles.coupons}>
  //   couponBingoNumbers.map((number) => (
  //     <div>
  //       {number}
  //     </div>
  //   ))
  // </div>

  // return <>{
  //   couponBingoNumbers.map((number, index) => (
  //     <div>
  //       {number}
  //     </div>
  //     // <tr key={rowIndex}>
  //       {/* {row.map((number, index) => (
  //         <td key={index} className={rowIndex === 2 && rowIndex === index || drawnNumbers.includes(number) ?  styles.free : ''}>
  //           {number}
  //         </td>
  //       ))} */}
  //     // </tr>
  //   ))
  // }
  // </>
}

export default BingoNumbers;