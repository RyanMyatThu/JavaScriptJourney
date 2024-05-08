//Variables are containers used for storing values
//A variable need a name and there are some naming rules for variables

let message = "HelloWorld";
const myNumber = 98;
var isStarted = true;

console.log(message); //HelloWorld
console.log("My Number " + myNumber); //My Number 98
if(isStarted){
    console.log("Journey has started!")
}

myNumber = 10; //Will throw an error (Cannot change the value of a constant variable)


