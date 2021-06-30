// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = (numbers) => {
    let sum = 0;
    numbers.forEach(element => {
        sum += Math.pow(element, 2) ;
    });
    return sum;
}
squareSum([0, 3, 4, 5]);