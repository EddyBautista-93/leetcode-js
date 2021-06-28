// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const isValid = (s) => {
    var stack = []; 
    var len = s.length;
    var map = {
        '(': ')',   // Use a map to help
        '[': ']',   // with referencing 
        '{': '}'    // the brackets.
    };
    for (let i in s) {
        if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
            stack.pop(); 
        } else {
            stack.push(s[i]); // put the element into the stack
        }
    }
    return stack.length === 0;
};

isValid("()") // true
isValid("()[]{}") // true
isValid("(]") // false 
isValid("([)]") // false 
isValid("{[]}") // true