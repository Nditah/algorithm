/*
We are required to write a JavaScript function that takes in an array of literals containing all similar elements but one. Our function should return the unlike number.
Example

*/

const arr = [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
// considering that the length of array is atleast 3
const findUnlike = arr => {
   for(let i = 1; i < arr.length-1; i++){
      if(arr[i] - arr[i-1] !== 0 && arr[i]-arr[i+1] === 0){
         return arr[i-1];
      }else if(arr[i] - arr[i-1] !== 0 && arr[i]-arr[i+1] === 0){
         return arr[i]
      }else if(arr[i] - arr[i-1] === 0 && arr[i]-arr[i+1] !== 0){
         return arr[i+1];
      };
      continue;
   };
};