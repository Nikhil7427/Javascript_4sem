// CLASSES AND OBJECTS

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// "this" keywords refer to the object it belongs to,so it is thee first property of the (Current caalling object)

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }

// let dog=new Dog("JavaScript",2.4,"brown","chihuahua");
// console.log(dog.dogName);

// CONSTRUCTOR: there can be one constructer in the class.(to initialise the object automaticaly)
// class:-it is convention to start the class name with capital letter

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }

// let p=new Person("Maaike","van Putten");
// console.log("hi",p.firstname);

// METHODS:when defining these methods we dont use the function keyword.we start diectly with the name.(Function on a class)

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there!");
//     }
//     compliment(name,object){
//         return "That's a wonderful " + object + "," + name;
//     }
// }
// let p=new Person("Maaike","van Putten");
// p.greet();
// let compliment=p.compliment("harry","hat");
// console.log(compliment);

// Properties: it sometimes called the fields,holds the data of the class

// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }

// let p =new Person("nihkil","maurya");
// console.log(p.firstname);

// constructor(firstname,lastname){
//     if(firstname.startsWith("M")){
//         this.#firstname=firstname;
//     }else{
//         this.#firstname = "M"+firstname;
//     }
//     this.#lastname = lastname;
// }

// let p = new Person("kay","moon");

// GATTERS AND SETTERS:

// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname = firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("kay","moon");
// console.log(p.firstname);

// Inheritance: Reusability of code

// class Vehicle{
//     constructor(color,currentSpeed,maxSpeed){
//         this.color=color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);  // super word in the constructor used to call the parent class in child class   /////////
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }

// }
// let motor = new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.color);
// console.log(motor.fuel);
// motor.accelerate(50);
// motor.move();

// PROTOTYPE: we can add attribute and method later on.

class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("Hi there!");
    }
}
Person.prototype.introduce = function(){
    console.log("Hi,I'm",this.firstname);
};
Person.prototype.favColor="green";
let p=new Person("maria","Saga");
console.log(p.favColor);
p.introduce();




