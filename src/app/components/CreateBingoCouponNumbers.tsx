export default function createCouponNumbers(){

    // Define the numbers to display on the coupon
    const numbers: number[] = [];
    const ranges = [
        { min: 1, max: 15 },
        { min: 16, max: 30 },
        { min: 31, max: 45 },
        { min: 46, max: 60 },
        { min: 61, max: 75 },
    ];

    for (let i = 0; i < ranges.length; i++) {
        
        const { min, max } = ranges[i];
        const columnNumbers: number[] = [];

        while (columnNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

            if (!columnNumbers.includes(randomNumber)) {
                columnNumbers.push(randomNumber);
                numbers.push(randomNumber);
            }
        }
    }
    return numbers;
}