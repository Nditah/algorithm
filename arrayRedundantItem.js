/* Let’s say, we are required to write a function that returns the index of the very first element that appears at least twice in the array. If no element appears more than once, we have to return -1. We have to do this in constant space (i.e., without utilizing extra memory).

Therefore, let's write the solution for this problem. We will use a for loop to iterate over the array and use the Array.prototype.lastIndexOf() method to check for duplicacy.
*/

const arr1 = [0, 1, 1, 2, 3, 4, 4, 5];

const firstRedundant = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) !== i) {
            return i;
        };
    };
    return -1;
}
console.log(firstRedundant(arr1)); // 1
