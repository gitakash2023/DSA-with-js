const minEle = (arr)=>{
    arr.sort((a,b)=>a-b)
    return arr[0]

}
console.log(minEle([11,2,3,4,5,6,12]))

//  using loop
const minEleofArr = (arr)=>{
    let n =arr.length
    for(let i = 0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if (arr[j]>arr[j+1]){
              [arr[j],arr[j+1]]  =[arr[j+1],arr[j]]  
            }
        }
    }
    return arr[0]
}
console.log(minEleofArr([1,3,5,8,2]))