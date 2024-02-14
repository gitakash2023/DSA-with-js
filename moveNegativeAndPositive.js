const moveNegativeAndPositive = (arr)=>{
    let arrOfNegative = []
    let arrOfPositive=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=0){
            arrOfNegative.push(arr[i])
        }else{
            arrOfPositive.push(arr[i]) 
        }
    }
    return[...arrOfNegative,...arrOfPositive]

}
console.log(moveNegativeAndPositive([1,-2,-3,0,4,-7,8]))