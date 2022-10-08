// Example :- 1
// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"

// Example :- 2
// Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Output: "the five boxing wizards jump quickly"

const decodeMessage = (key, message) => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const obj = {};
    let i = 0;
    let resStr = '';
    key.split('').forEach((element)=>{
        if(element !== ' ' && !(element in obj)){
            obj[element] = alphabets[i];
            i++;
        }
    })
    message.split('').forEach((element) => {
        if(element === ' '){
            resStr += element;
        }else{
            resStr += obj[element];
        }
    })
    return resStr;
};

console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo","zwx hnfx lqantp mnoeius ycgk vcnjrdb"));