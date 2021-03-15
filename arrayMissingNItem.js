const arr = [2, 3, 4, 7, 11];

const findMissing = (arr = [], n) => {
   let el = 0;
   let diff = 0;
   for(let i=0; i<arr.length; ++i) {
      const difference = arr[i] - el - 1;
      const sum = diff + difference;
      if(sum>=n) {
         break;
      };
      diff = sum;
      el = arr[i];
   }
   return el + n - diff;
};

console.log(findMissing(arr, 4)); // 8

