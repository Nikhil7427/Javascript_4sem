//CONCURRENCY: Concurrency iS WHENEVER THINGS ARE HAPPENING AT THE SAME TIME  OR IN PARALLEL

//CALLBACKS: it is a function that takes another function as an argument.
// CALLBACKS BECOME REALLY VALUABE IN AN asynchronous context,for example when one function is still waiting for the result of call to the database before calling the callback function the is going to process the data

// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("You got an",grade,":amazing!");
//             break;
//         case grade == "B":
//             console.log("You got an",grade,":amazing!");
//             break;
//         case grade == "C":
//             console.log("You got an",grade,":amazing!");
//             break;
//         case grade == "D":
//             console.log("You got an",grade,":amazing!");
//             break; 
//         default:
//             console.log("An",grade,"I What?!");
//     }
// }

// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     callback(grade);
// }
// getGrade(85,judge);

// PROMISES: WE CAN ORGANISE THE SEQUENCE OF CODE INT SLIGHTLY EASIER TO MAINTAIN WAY.(this function neeeds the two parameters, and these parameters are callbacks. WE have called them (Resolve and second))
/* When resolve() is called, the promise is preassumed to be succesfull and whatever is between the arrow is returned and used as input for the then method on the promise object */
/*if reject() is called, the promise is failled and  */
// let promise =new Promise(function (resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }else{
//         reject("too low");
//     }

// });
// promise.then(
//     function (value){
//         console.log("Succes",value);
//     },
//     function (error){
//         console.log("Error",error);
//     }
// );
const promise= new Promise((resolve,reject) =>{
    // resolve("Succes!");
    reject("Succes!");
})
.then(value => {
    console.log(value);
    return "we";
})
.then(value => {
    console.log(value);
    return "can";
})
.then(value => {
    console.log(value);
    return "chain";
})
.then(value => {
    console.log(value);
    return "promises";
})
.then(value => {
    console.log(value);
})
.catch(value =>{
    console.log(value);
})
