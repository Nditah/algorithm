/*
We are required to write a JavaScript function that takes in an array of Numbers as the first argument and a target sum as the second argument. The function should construct an array of array of all such elements from the array (repeating or non-repeating) that adds up to the target sum.

For example − If the input array is −

const arr = [2, 3, 6, 7], sum = 7;

Therefore, the output for the above input should look like this −

const output = [
   [2, 2, 3],
   [7]
];
*/

const arr = [2, 3, 6, 7], sum = 7;
const combineElements = (arr, sum) => {
   const output = [];
   const findCombination = (remain, path, start) => {
      if (remain < 0) {
         return;
      }
      if (remain === 0) {
         output.push([...path]);
         return;
      }
      for (let i = start; i < arr.length; i++) {
         findCombination(remain - arr[i], [...path, arr[i]], i);
      }
   }
   findCombination(sum, [], 0);
   return output;
};
console.log(combineElements(arr, sum));

// Output
// [ [ 2, 2, 3 ], [ 7 ] ]