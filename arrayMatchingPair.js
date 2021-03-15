/*
We are required to write a JavaScript function that takes in an array of Integers that might contain some repeating values. Our function should find out the number of pairs of identical integers we can extract out of the array.

For example −

If the input array is −

const arr = [1, 5, 2, 1, 6, 2, 2, 9];

Then the output should be −

const output = 2;

because the desired pairs are 1, 1 and 2, 2
Example
*/

const arr = [1, 5, 2, 1, 6, 2, 2, 9];
const countPairs = (arr = []) => {
    const { length } = arr;
    let count = 0;
    // making a shallow copy so that the original array remains unaltered
    const copy = arr.slice();
    copy.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
        if (copy[i] === copy[i + 1]) {
            i++;
            count++;
        };
    };
    return count;
};
console.log(countPairs(arr));
