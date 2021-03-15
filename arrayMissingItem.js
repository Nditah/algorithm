/*
We are required to write a JavaScript function that takes in an array of numbers of length, say n. The array contains all the integers from 0 to n (including both 0 and n), but just one integer is missing, it can be any number and the array is not sorted. The task of our function is to find the missing number and return it in linear time and constant space.

Since the array contains all the numbers from 0 to n but one, we can simply calculate the sum of all the elements of the array in linear time.

And then we can subtract it from the sum of first n natural numbers which can be calculated in constant time and space. The difference between the both will be our missing number.
Example

*/

const arr = [3, 7, 8, 10, 11, 0, 2, 6, 1, 4, 5];
const findMissing = (arr = []) => {
    const sum = arr.reduce((acc, val) => acc + val);
    const { length: num } = arr;
    const correctSum = (num * (num + 1)) / 2;
    const diff = correctSum - sum;
    return diff;
};
console.log(findMissing(arr)); // 9
