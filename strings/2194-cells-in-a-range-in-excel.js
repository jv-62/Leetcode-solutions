// Example :- 1
// Input: s = "K1:L2"
// Output: ["K1","K2","L1","L2"]

// Example :- 2
// Input: s = "A1:F1"
// Output: ["A1","B1","C1","D1","E1","F1"]

const toCharCode = (char) => char.charCodeAt(); 

const cellsInRange = (s) => {
    let response = [];
    for (let i = toCharCode(s[0]); i <= toCharCode(s[3]); i++) {
        for (let j = s[1]; j <= s[4]; j++) {
            response.push(String.fromCharCode(i) + j);
        }
    }
    return response;
};

console.log(cellsInRange("A1:F1"));