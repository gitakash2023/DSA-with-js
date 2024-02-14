const arr1 = [1,2,3]
const arr2 = [4,5,6]
const joinArr = (array1,array2)=>{
   
    for(let i=0;i<array2.length;i++){
        array1.push(array2[i])
    }
return array1
}
console.log(joinArr(arr1,arr2))


const joinArray = (arr1,arr2)=>{
    return [...arr1,...arr2]
    


}
console.log(joinArray([1,2,3,4],[4,5,6,7]))