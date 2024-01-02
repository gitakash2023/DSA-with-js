//  using reduce
const sumOfSubArr = (arr, startIndex, endIndex) => {
  return arr.slice(startIndex, endIndex + 1).reduce((acc, num) => acc + num, 0);
};
console.log(sumOfSubArr([1, 3, 5, 7, 8, 7], 3, 5));
console.log(sumOfSubArr([1, 3, 5, 7, 8, 7], 1, 3));

//  using loop
const sumOfSubArray = (arr, startIndex, endIndex) => {
  let subArr=arr.slice(startIndex, endIndex + 1)
 
  let sum =0
  for(let i=0;i<subArr.length;i++){
    sum = sum+subArr[i]
  }
  return sum 
};
console.log(sumOfSubArray([1, 2, 5, 7, 3, 5, 6], 1, 3));
