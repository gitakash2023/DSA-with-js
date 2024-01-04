//  Using  sort function 
const maxElementt = (arr) => {
    return Math.max(...arr);
  }
  
  console.log(maxElementt([1, 3, 5, 71, 2]));
  

const maxEle = (arr)=>{
    arr.sort((a,b)=>b-a)
    return arr[0]
}
console.log(maxEle([1,3,5,7,2]))


//  using loop
const maxEleofArr = (arr)=>{
    let n =arr.length
    for(let i = 0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if (arr[j]<arr[j+1]){
              [arr[j],arr[j+1]]  =[arr[j+1],arr[j]]  
            }
        }
    }
    return arr[0]
}
console.log(maxEleofArr([1,3,5,8,2]))
