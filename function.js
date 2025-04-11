// Returning with arrow function
// let addTwoNumbers=(x,y)=>x+y;
// let result=addTwoNumbers(12,27);
// console.log(result);

// let addTwoNumbers=(x,y)=>{
    // console.log("adding")
//    return x+y;
// }

// variable scope in function

// function testAvilability(x){
    // console.log("Avilable here:",x);
// }
// testAvilability("Hi !");
// console.log("Not avilable here:",x);

// function testAvilability(){
    // let y="Local variable!";
    // console.log("Avilable here!",y);
// }
// testAvilability();
// console.log("Not avilable Here:",y)

// function testAvilability(){
    // let y ="I'll return";
    // console.log("Avilable here")
// }

// function doingStuff(){
    // if(true){
        // var x="Local";
    // }
    // console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x="Local";
//     }  
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x="Local";
//     }  
// }
// doingStuff();

//CONST SCOPE:ONE TIME INITIALISATION AND ONE TIME DECLERATION

//GLOBAL VARIABLE

// let globalVar="Accisiable everywhere!";
// console.log("Outside the function:",globalVar);

// function creatingNewScope(x){
//     console.log("Inside the function:",globalVar);
// }

// creatingNewScope("some")

// let x="global";
// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// IIFE(immedietly invoked function expression)

// (function(){
//     console.log("IIFE");
// })();

// (()=>{
//     console.log("run right away");
// })();

// Recursive Function

// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);

// function getRecursive(nr){
//     if(nr>0){
//         getRecursive(--nr);
//     }
//     console.log(nr);
    
// }
// getRecursive(3);

// function logRecursive(nr){
//     console.log("started function:",nr);
//     if(nr>0)
//     {
//         logRecursive(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("ended function:",nr);
// }
// logRecursive(3);

// the perfomance of the recursion is slightly worse then the performance of the regular iteration using a loop.So if this cause a bottelneck situation that would realy slow down your application

// Nested Function

// function outFunc(nr){
//     console.log("outer function");
//     innerFunc(nr);
//     function innerFunc(x){
//         console.log(x+7);
//     }
//     console.log(nr);
// }

// Anonymous Function

// Function Callbacks:passing function as an argument in another function

// let functionVariable = function(){
//     console.log("not so secreate through");
// }

// function doFlexibleStuff(executeStuf){
//     executeStuf();
//     console.log("Inside thhe doFlexiblestuff");
// }
// doFlexibleStuff(functionVariable);

// set timeout

// let youGotThis=function(){
//     console.log("You are doing really well");
// } ;
// // setTimeout(youGotThis,1000);

// setInterval(youGotThis,1000);

// let testfunc= function(){
//     console.log("hello");
// }();

// testfunc();

// (function(){
//     console.log("welcome");
// })();
// (function(){
//     let firstName="Laurence";
// })();

var addFive1=function addFive1(num){
    return num+2;
}
let addFive2=(num)=>num+2;
console.log(addFive1(14));