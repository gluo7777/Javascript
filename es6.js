// spreading
// Instead of pushing entire array - automatically iterates through each element in array
const nums = [1, 2, 3, 4, 5];
nums.push(...[6, 7, 8, 9, 10]);
log('Spreading: ', nums);