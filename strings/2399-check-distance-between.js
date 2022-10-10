// Example :- 1
// Input: s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: true

// Example :- 2
// Input: s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Output: false

// Solution :- 1
const checkDistances = (str, distance) => {
    let i = 0;
    str.split().forEach((element) => {
        const ind = str.split('').findIndex(item => item === element);
        if(ind === distance[i]){
            console.log('found');
            i++;
        }
    });
};

console.log(checkDistances("abaccb",[1,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));