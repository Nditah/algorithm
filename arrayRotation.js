/*
We are required to write a JavaScript function that takes in an array and a number n.
Our function should rotate the array by n elements, i.e., take n elements from the front and put them to the end.
The only condition here is that we have to do this without using any extra space in memory −

For example −

If the input array is the following,

const arr = [12, 6, 43, 5, 7, 2, 5];

and number n is 3, then the output should be;

const output = [5, 7, 2, 5, 12, 6, 43];
*/

const arr = [12, 6, 43, 5, 7, 2, 5];
const num = 5;

const rotateByOne = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    };
}

Array.prototype.rotateBy = function (n) {
    const { length: l } = this;
    if (n >= l) {
        return;
    };
    for (let i = 0; i < n; i++) {
        rotateByOne(this);
    };
};

arr.rotateBy(num);

console.log(arr);