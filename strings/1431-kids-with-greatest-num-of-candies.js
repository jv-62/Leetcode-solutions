// Example :- 1
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 

// Example :- 2
// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 

// Example :- 3
// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

// Solution :- 1
// const kidsWithCandies = (candies, extraCandies) => {
//     const response = [];
//     candies.forEach((element) => {
//         const totalCandies = element + extraCandies;
//         response.push(candies.filter(item => item <= totalCandies).length >= candies.length)
//     })
//     return response;
// };

// Solution :- 2
const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
};

console.log(kidsWithCandies([12,1,12], 10))