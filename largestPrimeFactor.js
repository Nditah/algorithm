/*
We are required to write a JavaScript function that takes in a number as the only argument.

The number provided as an argument is guaranteed to be a composite number (the number that has more than two factors). Our function should find the largest prime number that exactly divides the input number.

For example −

If the argument is 72, then the output should be 3.

Because 3 is the largest prime number that exactly divides 72
Example
*/

const num = 72;
const largestPrimeFactor = (num) => {
    let res = Math.ceil(Math.sqrt(num));
    const isPrime = (num) => {
        let i, limit = Math.ceil(Math.sqrt(num));
        for (i = 3; i <= limit; i += 2) {
            if (num % i === 0) {
                return false;
            };
        };
        return true;
    };
    res = (res & 1) === 0 ? res - 1 : res;
    while (!(num % res === 0 && isPrime(res))) {
        res -= 2;
    };
    return res;
}
console.log(largestPrimeFactor(num));