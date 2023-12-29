
const reverseSentence = (str)=>{
    let arr = []
    
    if (typeof str !== "string") {
     
        return "Input is not a string!"
    }
   if(str ==""){
    return "enter a string"
   }
   let splitedArr = str.split("")

    for(let i=splitedArr.length;i>=0;i--){
        arr.push(splitedArr[i])
    }
    return arr.join("")
    
    
}
console.log(reverseSentence("i am a developer"))
console.log(reverseSentence("what are you doing"))
console.log(reverseSentence())