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

let x="global";
function doingStuff(){
    let x="local";
    console.log(x);
}
doingStuff();
console.log(x);
