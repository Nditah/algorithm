/*
We are required to write a JavaScript function that takes in an array of strings. Our function should iterate through the array and find and return the longest string from the array.

Our function should do this without changing the content of the input array.
Example
*/

const arr = ["aaaa", "aa", "aa", "aaaaa", "acc", "aaaaaaaa"];
const findLargest = (arr = []) => {
   if(!arr?.length){
      return '';
   };
   let res = '';
   res = arr.reduce((acc, val) => {
      return acc.length >= val.length ? acc : val;
   });
   return res;
};
console.log(findLargest(arr));