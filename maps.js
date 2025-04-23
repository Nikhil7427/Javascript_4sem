// maps hold key value pair and key is of any datatype
// map is a predefined classs
// here fruits is object of the map class
const fruits = new Map([  
    ["apples",500],
    ["bananas",300],
    ["oranges",200]
]);

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

