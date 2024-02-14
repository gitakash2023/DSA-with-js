const myMap = (arr, callback) => {
  let resultedArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultedArr.push(callback(arr[i]));
  }
  return resultedArr;
};
const myArr = [1, 2, 3, 4, 5];
const double = (num) => num * 2;
console.log(myMap(myArr, double));

const Users =[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
]

const getAllNames = (obj=>obj.name)
console.log(myMap(Users, getAllNames));

const getAllPhone = (obj=>obj.phone)
console.log(myMap(Users, getAllPhone));

const getAllLat = (obj=>obj.address.geo.lat)
console.log(myMap(Users, getAllLat));