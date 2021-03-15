/*
We are required to write a JavaScript function that takes in an array of Numbers. The function should pick and return the third highest number from the array.

The time complexity of our function must not exceed O(n), we have to find the number in single iteration.
*/

const arr = [1, 5, 23, 3, 676, 4, 35, 4, 2];
 const findThirdMax = (arr) => {
   let [first, second, third] = [-Infinity, -Infinity, -Infinity];
   for (let el of arr) {
      if (el === first || el === second || el === third) {
         continue; };
         if (el > first) {
            [first, second, third] = [el, first, second]; continue; };
         if (el > second) {
            [second, third] = [el, second]; continue;
          };
         if (el > third) {
            third = el; continue;
      };
   };
   return third !== -Infinity ? third : first;
};
console.log(findThirdMax(arr));