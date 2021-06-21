//leetcode 6/21
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example,
//  121 is palindrome while 123 is not.

const isPalindrome = (a) => {
    const inputInt = a.toString();
    const reverseInt = inputInt.split('').reverse().join('');
    return inputInt === reverseInt? true : false;
}

isPalindrome(234235);

