// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// notes

// ParseFloat converts whatever passes to a num , string the num to access the split, reverse and join method then check to see if its positive or negative. 

const reverseInt = num => {
   const revInt = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
   console.log(revInt);
   return revInt < Math.pow(2, 31) * -1 || revInt > Math.pow(2, 31) - 1 ? 0 : revInt; // check to see if the returned int falls into the 32 bit range category 
}


reverseInt(2876867868623);