var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  height: 25,
  weight: 6,
  catFriends: [
  {
  name: "bar",
  activities: ["be grumpy", "eat bread omblet"],
  weight: 8,
  furcolor: "white"
  }, 
  {
  name: "foo",
  activities: ["sleep", "pre-sleep naps"],
  weight: 3
  }
  ]
 }
 console.log(cat);
 console.log("Fluffy's height in cm is :", cat.height);
 console.log("Fluffy's weight in kg is:",  cat.weight);
 cat.name = "Fluffyy";
 console.log(cat.name);
 console.log(cat.catFriends[0].activities + "," + cat.catFriends[1].activities);
 console.log("Names of cat friends :", cat.catFriends[0].name + " and " + cat.catFriends[1].name);
 let totalweight = cat.catFriends[0].weight + cat.catFriends[1].weight;
 console.log("Total weight of Fluffyy's frinds is :", totalweight);
 let totalactivity = cat.activities.length + cat.catFriends[0].activities.length +
                    cat.catFriends[1].activities.length;
 console.log("total activities of all cats:", totalactivity);
 cat.catFriends[0].activities[2] = "playig with cat-toys";
 cat.catFriends[0].activities[3] = "scratching surfaces";
 for(i=0; i<cat.catFriends[0].activities.length;i++){
   console.log(cat.catFriends[0].activities[i]);
 }
 cat.catFriends[1].activities[2] = "cuddling";
 cat.catFriends[1].activities[3] = "playing with water";
 for(i=0; i<cat.catFriends[1].activities.length;i++){
  console.log(cat.catFriends[1].activities[i]);
}
cat.catFriends[0].furcolor = "black";
console.log("bar's fur colour is:", cat.catFriends[0].furcolor);

var myCar = {
  make: "Bugatti",
  model: "Bugatti La Voiture Noire",
  year: 2019,
  accidents: [
  {
  date: "3/15/2019",
  damage_points: "5000",
  atFaultForAccident: true
  },
  {
  date: "7/4/2022",
  damage_points: "2200",
  atFaultForAccident: true
  },
  {
  date: "6/22/2021",
  damage_points: "7900",
  atFaultForAccident: true
  }
  ]
 }
 console.log(myCar);

 for(i=0;i<myCar.accidents.length; i++){
   myCar.accidents[i].atFaultForAccident = false;
   console.log(myCar.accidents[i].atFaultForAccident);
   console.log("date", + i+1 + "-" + myCar.accidents[i].date);
 }

 var obj = {name : "Rajanikanth", age : 33, hasPets : false};
 function printAllValues(obj) {
  return Object.values(obj);
 }
 console.log(printAllValues(obj));
 
 var obj1 = {name : "RajiniKanth", age : 25, hasPets : true};
 function printAllKeys(obj) {
  return Object.keys(obj1);
 }
 console.log(printAllKeys(obj));
 
 var employee = {"name": "ISRO", "age": 35, "role": "Scientist"};

function convertListToObject(obj) {
  return Object.entries(obj);
}
console.log(convertListToObject(employee));

var objArr = ["GUVI", "I", "am", "Geek"];
newArr = [];
newObject = {};
function transformFirstAndLast(objArr) {
  newArr.push(objArr[0]);
  newArr.push(objArr[(objArr.length)-1]);
  const map = new Map([newArr]);
  newObject = Object.fromEntries(map);
  return newObject;
  }
var resObj = transformFirstAndLast(objArr);
console.log(resObj);

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
  var newObject1 = {};
  for (var i= 0; i< arr.length; i++){
    let key = arr[i][0];
    let value = arr[i][1];
    newObject1[key] = value;
  }
  return newObject1;
}
console.log(fromListToObject(arr));

var arrayList = [
  [
    ['firstName', 'Vasanth'],
    ['lastName', 'Raja'], 
    ['age', 24], 
    ['role', 'JSWizard']
  ], 
  [
    ['firstName', 'Sri'], 
    ['lastName', 'Devi'], 
    ['age', 28], 
    ['role', 'Coder']
  ]
];
function transformEmployeeData(arrayList) {
  var tranformEmployeeList = [];
  for (var i= 0; i< arrayList.length; i++){
    let newObject = {};	
    for (var j= 0; j< arrayList[i].length; j++){
      let key = arrayList[i][0];
      let value = arrayList[i][1];
      newObject[key] = value;	
    }
    tranformEmployeeList.push(newObject);
  }
  return tranformEmployeeList;
}
console.log(transformEmployeeData(arrayList));

var expected = {foo: 5, bar: 6};
    var expected1 = {foo: 6, bar: 5};
    var actual = {foo: 5, bar: 6};

    function assertObjectsEqual(actual, expected, testName){
      actualStr = JSON.stringify(actual)
      expectedStr = JSON.stringify(expected)
      if(actualStr === expectedStr){
        return "Passed"
      } else{
        return "FAILED ["+testName+"] Expected "+actualStr+", but got "+expectedStr
      }
    }
    console.log(assertObjectsEqual(actual, expected, 'test1'))
    console.log(assertObjectsEqual(actual, expected1, 'test2'))

    var securityQuestions = [
      {
        question: 'What was your first pet’s name?',
        expectedAnswer: 'FlufferNutter'
      },
      {
        question: 'What was the model year of your first car?',
        expectedAnswer: '1985'
      },
      {
        question: 'What city were you born in?',
        expectedAnswer: 'NYC'
      }
    ];

    function chksecurityQuestions(securityQuestions,question, answer) { 
      for(var i = 0; i < securityQuestions.length; i++)
      {
        for(var keys in securityQuestions[i]){
          if(keys === "question"){
            if(securityQuestions[i].question === question && securityQuestions[i].expectedAnswer === answer){
                return true;
            }
          }
        }
      }

    return false; 

    }

    //Test case1:
    var ques = 'What was your first pet’s name?';
    var ans  =  'FlufferNutter';
    
    var status = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status); 
    
    //Test case2:
    var ques1 = 'What was your first pet’s name?';
    var ans1  =  'DufferNutter';
    
    var status1 = chksecurityQuestions(securityQuestions, ques1, ans1);
    console.log(status1);
    
    var students = [
      { name: 'Siddharth Abhimanyu', age: 21 }, 
      { name: 'Malar', age: 25 },
      { name: 'Maari', age: 18 },
      { name: 'Bhallala Deva', age: 17 },
      { name: 'Baahubali', age: 16 },
      { name: 'AAK chandran', age: 23 },
      { name:'Gabbar Singh', age: 33 },
      { name: 'Mogambo', age: 53 },
      { name: 'Munnabhai', age: 40 },
      { name: 'Sher Khan', age: 20 },
      { name: 'Chulbul Pandey',age: 19 }, 
      { name: 'Anthony', age: 28 },
      { name: 'Devdas', age: 56 } ];
    function returnMinors(arr)
    {
      var newObj = [];
      for (var i = 0; i< arr.length; i++){
        if (arr[i].age < 20){
          newObj.push(arr[i]);
        }
      }
      return newObj;
    }
    console.log(returnMinors(students));
 
 