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

// "this" keywords refer to the object it belongs to,so it is thee first property of the 

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

// CONSTRUCTOR: there can be one constructer in the class.
// class:-it is convention to start the class name with capital letter

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }

// let p=new Person("Maaike","van Putten");
// console.log("hi",p.firstname);

// METHODS:when defining these methods we dont use the function keyword.we start diectly with the name.

class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("Hi there! I'm",this.firstname);
    }
    compliment(name,object){
        return "That's a wonderful " + object + "," + name;
    }
}
let p=new Person("Maaike","van Putten");
p.greet();
let compliment=p.compliment("harry","hat");
console.log(compliment);