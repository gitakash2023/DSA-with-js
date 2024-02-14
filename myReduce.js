const myReduce = (arr, callback, ) => {
    let accumulator =  arr[0];
    
    for (let i =  1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    
    return accumulator;
}

const myNumbers = [2, 3, 4, 5, 6, 7];
const sum = (acc, num) => acc + num;
console.log(myReduce(myNumbers, sum)); 
