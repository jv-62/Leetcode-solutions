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
    [...s].forEach((element) => {
        const charCode = element.charCodeAt(0);
        // 97 - 112 Are lower case characters
        // 65 - 90 Are Upper case characters
        if(charCode <= 90 && charCode >= 65){
            console.log('Upper case letter');
        }
        // console.log(String.fromCharCode(charCode), charCode);
    })
    // return s.toLowerCase()
};

toLowerCase('HellO');