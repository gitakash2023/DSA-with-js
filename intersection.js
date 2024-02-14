const intersection=(arr1,arr2)=>{
    let commonEle = []
    for(i=0;i<arr1.length ;i++){
       for(j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            commonEle.push(arr1[i])  
        }
       }
    }
 return commonEle
}
console.log(intersection([1,3,3],[4,5]))

