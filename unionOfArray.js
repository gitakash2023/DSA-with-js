const unionOfArrays = (arr1,arr2)=>{
    // const mergeedArr= [...arr1,...arr2]
    // return [...new Set(mergeedArr)]
    return[...new Set([...arr1,...arr2])]

}
const array1=[1,2,3,4]
const array2=[2,3,5,6]
console.log(unionOfArrays(array1,array2))

// 
const union=(arr1,arr2)=>{
  
    for(let i=0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
return [...new Set(arr1)]
}
console.log(union([1,4],[4,5,8]))
//  
const unions=(array1,array2)=>{
    for(let i =0;i< array2.length;i++){
        if(!array1.includes(array2[i])){
            array1.push(array2[i])
        }
    }
return [...new Set(array1)]
}
console.log(unions([1,1,4,5],[4,5,5,8]))
