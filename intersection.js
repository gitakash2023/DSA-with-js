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
console.log(intersection([1,2,3],[3,5,1]))

//  
const intersectionOfArr = (array1, array2) => {
    let mergedArr = [...array1, ...array2];
    let n = mergedArr.length;
    let common = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (mergedArr[i] === mergedArr[j]) {
                common.push(mergedArr[i]);
            }
        }
    }

    return common;
};

console.log(intersectionOfArr([1, 2, 3, 5], [3, 5, 1, 2]));
