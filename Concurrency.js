//CONCURRENCY: Concurrency iS WHENEVER THINGS ARE HAPPENING AT THE SAME TIME  OR IN PARALLEL

//CALLBACKS: it is a function that takes another function as an argument.(which is then called when the rest of the intial function has finished)
// CALLBACKS BECOME REALLY VALUABE IN AN asynchronous context,for example when one function is still waiting for the result of call to the database before calling the callback function the is going to process the data

// function doSomething(callback){
//     callback();
//     console.log("hiiii");
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
// const promise= new Promise((resolve,reject) =>{
//     resolve("Succes!");
//     reject("Succes!");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// })
// .then(value => {
//     console.log(value);
//     return "promises";
// })
// .then(value => {
//     console.log(value);
// })
// .catch(value =>{
//     console.log(value);
// })

/* async and awiat */
// //ASYNC AND AWAIT with the async keyword we can make a function return a promise.
// //this makes the promise nicer to read and look a lot like synchronus(non-concurrent) code.
// //we can use the more powerful await keyword to wait untill the proimse is done,await only works in an asynchronous. 

// function saySomething(x) {
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("something"+x);
//         },2000);
//     });
// }
// async function talk(x){
//     const words= await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

/*EVENT LOOP: */
//javascript is a single threaded language. A thread in this context means a path of execution.
// this single executer is the event loop
//PROCESS: a program under execution.

/*CALL STACK AND CALLBACK QUEUE */
//callstack and call queue: the eveent loop is a process that is constantly
//monitoring this call stack and whenever there are tasks to do ,the event loop
//does them one by one, the tasks on top get executed first.

// console.log("hi there");
// add(4,5);
// function add(x,y){
//     return x+y;
// }
// console.log("Hi there");
// setTimeout(()=> console.log("Sorry I'm late"),1000);
// console.log(add(4,5));


// the seTimeout() task gets outsourced to the browser's web API.
// when it is done, this appears in special place: the callback queue.
//whenn the call stack is empty , the event loop will check the callback queue for work to do.
//if there is any callback waiting, they will be executed,one by one. after every action

// function add(x,y){
//     return x+y;
// }
// console.log("Hi there");
// setTimeout(()=> console.log("Sorry I'm late"),0);
// console.log(add(4,5));