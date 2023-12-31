
const arr1=[1,2,2,3]
const arr2=[2,3,4,5]
const mergeSortedArraysAndUniques= (array1,array2)=>{
    for(let i=0;i<array2.length;i++){
        array1.push(array2[i])
    }
    let UniqueArr =[]
    for(let i= 0;i<array1.length;i++){
        if( !UniqueArr.includes(array1[i])){
            UniqueArr.push(array1[i])
        }
    }
     let n=UniqueArr.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(UniqueArr[j]<UniqueArr[j+1]){
                [UniqueArr[j],UniqueArr[j+1]]= [UniqueArr[j+1],UniqueArr[j]]
            }
        }
        
    }
    return UniqueArr
     
}
console.log(mergeSortedArraysAndUniques(arr1,arr2))