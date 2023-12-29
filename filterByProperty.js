const arrayOfObjects = [
  {
    name: "akash",
    age: 19,
  },
  {
    name: "krishna",
    age: 21,
  },
  {
    name: "vidit",
    age: 25,
  },
  {
    name: "ramjane",
    age: 67,
  },
];
const filterNameByLength = (arr) => {
  let newArr = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i].name.length > 5) {
      newArr.push(arr[i].name);
    }
  }

  return newArr;
};
console.log(filterNameByLength(arrayOfObjects));
