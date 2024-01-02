//  using loop
const myArr = [1,2,3,4,5,4,3,2,1,1]
const countOfElement = (arr,ele)=>{
    let count =0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===ele){
          count++
        }
    }
    return  count
}
console.log(countOfElement(myArr,1))
console.log(countOfElement(myArr,5))