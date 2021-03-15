/*
We are given an array of size n, and we are required to find the majority element. The majority element is the element that appears more than [ n/2 ] times.
*/

const arr = [2, 4, 2, 2, 2, 4, 6, 2, 5, 2];
const majorityElement = (arr = []) => {
    const threshold = Math.floor(arr.length / 2);
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        map[value] = map[value] + 1 || 1;
        
        if (map[value] > threshold)
            return value
    };
    return false;
};

console.log(majorityElement(arr));
