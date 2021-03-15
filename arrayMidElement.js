/*
We are required to write an array function midElement() that returns the middlemost element of the array without accessing its length property and without using any kind of built-in loops.

If the array contains an odd number of elements, we return the one, middlemost element, or if the array contains an even number of elements, we return an array of two middlemost elements.

*/
const array1 = [14, 32, 36, 42, 45, 66, 87];
const array2 = [13, 92, 83, 74, 55, 46, 74, 82];

const arrayMidElement = (arr, index = 0) => {
   if(arr[index]){
      return arrayMidElement(arr, ++index);
   };
   return index % 2 !== 0 ? [arr[(index-1) / 2]] : [arr[(index/2)-1], arr[index/2]];
};
console.log(arrayMidElement(array1));
console.log(arrayMidElement(array2));
