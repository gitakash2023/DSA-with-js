const isPlaindrom = (str)=>{
   
    if(typeof str!=="string"){
        return "enter a string"
    }
    if(str ==""){
        return "enter a valid string"
    }
    
    let arr=[]
     const splitedArr = str.split("")
     for(let i=splitedArr.length ; i>=0;i--){
         arr.push(splitedArr[i])
     }
      const reversedStr = arr.join("")
      if(str==reversedStr){
          return true
      }else{
         return  false
      }
    
}
console.log(isPlaindrom(""))
console.log(isPlaindrom(126))
console.log(isPlaindrom("aka"))
console.log(isPlaindrom("akash"))
//  using mrthod 
const checkPalindrom=(str)=>{
   let reverseString= str.split("").reverse().join("")
   
   if(str===reverseString){
    return true
   }else{
    return false
   }


}
console.log(checkPalindrom("aka"))
