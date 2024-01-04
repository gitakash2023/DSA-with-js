const  countAlfabates = (str)=>{
 const splitedLowerCaseArr = str.toLowerCase().split("")
 let n = splitedLowerCaseArr.length
 let occuranceOfChar = {}
for(let i = 0;i<n;i++){
    if (/[a-z]/.test(splitedLowerCaseArr[i])) {
        occuranceOfChar[splitedLowerCaseArr[i]] = (occuranceOfChar[splitedLowerCaseArr[i]] || 0) + 1;
      }
    }

return occuranceOfChar

}
console.log(countAlfabates("my name is akash"))