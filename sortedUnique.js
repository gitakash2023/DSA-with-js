const sortedArrWithUniqueEle = (arr)=>{
    let uniqueArr=[]
    for(let i=0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
   let n = uniqueArr.length
   for(let i=0;i<n;i++){
       for(let j=0;j<n-i;j++){
           if(uniqueArr[j]<uniqueArr[j+1]){
               [uniqueArr[j],uniqueArr[j+1]]= [uniqueArr[j+1],uniqueArr[j]]
           }
       }
   }
   return uniqueArr


    
}
console.log(sortedArrWithUniqueEle([1,3,2,5,2,3,4,5]))
