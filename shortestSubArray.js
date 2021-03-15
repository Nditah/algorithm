/*
The degree of an array of literals is defined as the maximum frequency of any one of its elements.

const arr = [1, 2, 3, 3, 5, 6, 4, 3, 8, 3];

The degree of this array is 4, because 3 is repeated 4 times in this array.

We are required to write a JavaScript function that takes in an array of literals. 
The task of our function is to find the length of the smallest continious 
subarray from the array whose degree is same as of the whole array.
*/

//* Solution
//* Create a map myMap of continious subarrays mySubArr of the given array myArr
//* Compute the degree of the whole array
//* For each elt of mySubArr compute their degree and length
//* Sort the mySubArr that has the same dregree and myArr
//* Return the length of the small subarray for the sorted subarrays
//* 

// const input = inputData.split(/\r?\n/);
// const arrayLength = parseInt(input[0]);
// const arrayString = input[1].split(' ').sort();


const arr = [1, 2, 3, 3, 5, 6, 4, 3, 8, 3];

const findShortestSubArray = (arr = []) => {
    let myMap = new Map(); // { arrayItem: [startIndex, endIndex, degree] }
    let maxDegree = 0; // compare with zero and asc
    let minLength = Infinity; // compare with infinity and desc

    for (let i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])) {
            // If item exist in map, increment degree
            const start = myMap.get(arr[i])[0];
            let degree = myMap.get(arr[i])[2]; 
            degree++;
            myMap.set(arr[i], [start, i, degree]);
            if (degree > maxDegree) maxDegree = degree;
        } else {
            const degree = 1;
            myMap.set(arr[i], [i, i, degree]); 
            if (degree > maxDegree) maxDegree = degree;
        }
    }

        console.log( myMap.keys() )

    for (let key of myMap.keys()) {
        let mySubArr = myMap.get(key);
        if (mySubArr[2] === maxDegree) {
            const diff = (mySubArr[1] - mySubArr[0]) + 1;
            if (diff < minLength) minLength = diff;
        }
    }

    return minLength;
};

console.log(findShortestSubArray(arr));