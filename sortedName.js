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
        age:25
    },
     {
        name:"ramjane",
        age:67
    },
    ]
    const sortedName = (arr)=>{

        let n =arr.length
        let getAllNames = []
        for(let i=0;i<n;i++){
            getAllNames.push(arr[i].name)
        }
        let m =getAllNames.length
        for(let i=0;i<m;i++){
            for(let j =0;j<m-i-1;j++){
                if(getAllNames[j].length<getAllNames[j+1].length){
                    [getAllNames[j],getAllNames[j+1]]= [getAllNames[j+1],getAllNames[j]]
                }
            }
        }
       return getAllNames

    }
    console.log(sortedName(arrayOfObjects))

    //  using method 
    const sortByName = (arr) => {
        return arr.map(item => item.name).sort((a, b) => a.localeCompare(b));
    }
    
 
    console.log(sortByName(arrayOfObjects));
    