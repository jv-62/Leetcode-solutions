// Explanation :- Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example :- 1
// Input: s = "Hello"
// Output: "hello"

// Example :- 2
// Input: s = "here"
// Output: "here"

// Example :- 3
// Input: s = "LOVELY"
// Output: "lovely"

// Constraints:
// 1. 1 <= s.length <= 100
// 2. s consists of printable ASCII characters.

// Solution :- 1 Using inbuilt method
// const toLowerCase = (s) => {
//     return s.toLowerCase()
// };

// Solution :- 2 Using ASCII characters
const toLowerCase = (s) => {
    const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    let lowercaseStr = '';
    [...s].forEach((char) => {
        if(char >= 'A' && char <= 'Z'){
            lowercaseStr += String.fromCharCode(char.charCodeAt(0) + diff)
        }else{
            lowercaseStr += char;
        }
    })
    return lowercaseStr
};

console.log(toLowerCase('HELlO'));