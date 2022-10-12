// Example :- 1
// Input: nums = [2,1,2]
// Output: 5

// Example :- 2
// Input: nums = [1,2,1]
// Output: 0

const largestPerimeter = (nums) => {
    nums.sort((a,b) => b-a);
    // console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i]<(nums[i+1] + nums[i+2])){
            return (nums[i] + nums[i+1] + nums[i+2]);
        }
    }
    return 0;
};

console.log(largestPerimeter([1,2,1]));