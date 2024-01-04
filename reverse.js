
const revStr=(str)=>{
    if (typeof str !== "string") {
     
        return "Input is not a string!"
    }

    if (str === "") {
        return "Enter a non-empty string";
    }
   
    let reverseString = []
 const splitArr = str.split("")
 for(let i = splitArr.length;i>=0;i--){
    reverseString.push(splitArr[i])

}
return reverseString.join(" ")
}
console.log(revStr("akash"))
//  using method
const rev = (str)=>{
    return str.split("").reverse().join("")
}
console.log(rev("akashkumar"))