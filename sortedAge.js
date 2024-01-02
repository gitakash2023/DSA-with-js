const arrayOfObjects =[
    {
        name:"akash",
        age:19
    },
     {
        name:"krishna",
        age:21
    },
     {
        name:"vidit",
        age:50
    },
     {
        name:"ramjane",
        age:67
    },
    ]
    const sortedAge = (arr)=>{
        let ages = []
        for(let i =0;i<arr.length;i++){
            ages.push(arr[i].age)
        }
       let n = ages.length
       for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(ages[j]<ages[j+1]){
                [ages[j],ages[j+1]]=[ages[j+1],ages[j]]
            }
        }
       }
       let greaterThan40=[]
       for(let i=0;i<n;i++){
        if(ages[i]>40){
            greaterThan40.push(ages[i])
        }
       }
       return  greaterThan40
        
    }
    console.log(sortedAge(arrayOfObjects))
    //  using method 
    const sortedAgeofArr=(arr)=>{
       return   arr.filter(item=>item.age>40).map(item=>item.age).sort((a,b)=>b-a)

    }
    console.log(sortedAgeofArr(arrayOfObjects))