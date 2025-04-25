// maps hold key value pair and key is of any datatype
// map is a predefined classs
// here fruits is object of the map class
// const fruits = new Map([  
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);

// set(): you can add element to the Map() with set method & also change the existing Map value(Reinitialise the value)

//fruits.set("apples",600);
// fruits.set("bananna",300);
// fruits.set("oranges",200);
//console.log(fruits);
// console.log(fruits.get("apples"));
// console.log(fruits.size);
// console.log(fruits.delete("apples"));
// console.log(fruits);
//console.log(fruits.clear);
//console.log(fruits.has("apples"));


//typeof : used because it is loosely coupled language
//Object:Not directly iterable,keys must be string,dont have size property
//Map: directly iterable,keys can be any datatype,have size property

// let text = "";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })

// console.log(typeof(text));

// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);

// let text="";
// for(const x of fruits.keys()){
//     text+=x;
// }
// console.log(text);

// let text="";
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);

// keys as an object:

// const apples={name:"Apples"};
// const banana={name:"banana"};
// const oranges={name:"oranges"};
// const fruits= new Map();
// fruits.set(apples,500);
// fruits.set(banana,400);
// fruits.set(oranges,200);

//create an array

// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];
// function myCallback({quantity}){
//     return quantity>200 ?"ok":"low";
// }
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);

/** JAVASCRIPT DESTRUCTURING **/

// const person={
//     firstName:"Jhon",
//     lastName:"Doe",
//     age:50
// };
// //let{firstName,lastName}=person;
// // console.log(person);
// // let{lastName,firstName}=person;
// // console.log(person);
// let{lastName:name}=person;
// console.log(name);

// String destructuring

// let name ="GurukulTheSchool";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1);

// const fruits=["Bananas","Oranges","Apples","Mangos"];
// // let[fruits1,fruits2]=fruits;
// // console.log(fruits1);
// let[fruit1,,,fruit2]=fruits;
// console.log(fruits2);

//Array position values

// const fruits=["Bananas","Oranges","Apples","Mangos"];
// let{[0]:fruit1,[3]:fruit2}=fruits;
// console.log(fruit2);

// Rest:You can end a destructuring syntax with a rest property.

// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers;
// console.log(a,b,rest);

// DESTRUCTURING MAP

// const fruits = new Map([  
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// let text="";
// for(const[key,value] of fruits){
//     text+=key + "is" +value;
// }
// console.log(text);

// let firstName="Jhon";
// let lastName="Doe";
// [firstName,lastName]=[lastName,firstName];

//JAVASCRIPT EXPONENT

// let x=5;
// // // let z=x**2;
// // let z=Math.pow(x,2);
// // console.log(z);
// x**=2;
// console.log(x);

//JAVASCRIOT ARRAY includes()
/* The includes() method is case sensitive */

// const fruits=["Bananas","Oranges","Apples","Mangos"];
// console.log(fruits.includes("Mangos"));
// console.log(fruits.includes("Bananas",3));  // starts the search at position 3.

// TRAILLING COMMA: also known as dangling or terminal comma(The trailling commas have been leagal in array literals)

// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

const sparseArray=[1,,,4,5,,];
console.log(sparseArray);

// const person={
//     firstName:"John",
//     lastName:"Davis",
//     age:30,
// }
const person={
    firstName:"John",
    ,
    age:30,
}

