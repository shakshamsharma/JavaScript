/*
console.log("Hello Saksham");
console.log("Sharma");

full_name = "Tony Stark";

age = 22;
console.log(age);

x = null;
console.log(x);

y = undefined;
console.log(y);

//Boolean
isfollow = true;
console.log(isfollow);

isfollow = false;
console.log(isfollow);

full_name = "thor";
console.log(full_name)


// = Assignment Operator
// var
// let
// const

let fullName = "Iron Man";
console.log(fullName);

var fullNames = "Thor";
console.log(fullNames);

const Fullname = "Tony Stark";
console.log(Fullname);

const PI = 3.14
console.log(PI)

let a;
a=10
console.log(a)

//Create a Block
{
let a = 100;
console.log(a)
}
{
let a = 1000;
console.log(a)
}
let ages = 22;
let prices = 100.50;
let names = "Sakshu";

let n = BigInt("123");
let m = Symbol("Abc");


const Student = {
    fullName: "Saksham",
    hisage: 22,
    cgpa: 9.5,
    isPass: true
};
console.log(Student["hisage"]);
console.log(Student.hisage);
console.log(Student.cgpa);
Student["hisage"] = Student["hisage"] + 1;
console.log(Student["hisage"]);
Student["fullName"] = "Saksham The Great";
console.log(Student.fullName);


// let can be update
// const can't be update but if const has object -> key then can be update

//Question 1 
const Product = {
Title: "Ball Pen",
Rating: 4,
Offer: 5,
Price: 270
};
console.log(Product);
console.log(Product["Rating"]);
console.log(Product.Offer);
*/

// const { version } = require("react");

//Arithmetic Operator
/*
let a = 10;
let b = 20;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
//Modulas 
console.log("a % b = ", a%b);
//Exponential
console.log("a ** b = ", a**b);
*/

//Unary Operator
//Increment
//Decrement
// let a = 10;
// let b = 20;
// console.log("a =", a, "& b =", b);
//a = a + 1;
//b = b + 1;
// a++; Post Increment
// b++; Post Increment
// a = a - 1;
// b = b - 1;
// a--; Post decrement
// b--; Post decrement
//console.log(a)
//console.log(b)
// console.log("--a", --a)
// console.log("--b", --b)

// Assignment Operator

// let a = 10;
// let b = 20;
// a += 4 // a = a + 4
// console.log("a = ",a)
// a *= 4 // a = a * 4
// console.log("a = ",a)
// a -= 4 // a = a - 4
// console.log("a = ",a)
// a /= 4 // a = a / 4
// console.log("a = ",a)
// a %= 4 // a = a % 4
// console.log("a = ",a)
// a **= 4 // a = a ** 4
// console.log("a = ",a)

//Comparison Operator

// let a = 10;
// let b = 20;
// console.log("a == b = ", a == b);
// console.log("a != b = ", a != b);

//Strict version
// let a = 10;
// let b = "10";
// console.log("a === b", a === b);
// console.log("a !== b", a !== b);

// let a = 10;
// let b = 20;
// console.log("a < b", a < b);
// console.log("a > b", a > b);
// console.log("a >= b", a >= b);

//Logical Operator
// let a = 10;
// let b = 20;
// let cond1 = a < b; //True
// let cond2 = a === 10; //True
// console.log(cond1);
// console.log(cond2);
// console.log("cond1 && cond2", cond1 && cond2);

// Logical OR
// let a = 10;
// let b = 20;
// let cond1 = a > b; //True
// let cond2 = a !== 10; //True
// // console.log(cond1);
// // console.log(cond2);
// console.log("cond1 || cond2", cond1 || cond2);

//Example 2
// let a = 10;
// let b = 20;
// let cond1 = a > b; //True
// let cond2 = a === 10; //True
// console.log(cond1);
// console.log(cond2);
// console.log("cond1 || cond2", cond1 || cond2);


// let age = 15;
// if (age > 18){
//   console.log("You can vote");
// }
// if (age < 18){
//   console.log("You Cannot Vote");
// }


// Conditional Statement
//If

// let mode = "dark";
// let color;
// if (mode === "dark"){
// color = "Black";
// }
// if (mode === "Light"){
// color = "White"
// }
// console.log(color);

//If Else

// let mode = "Blue";
// let color;
// if (mode === "dark"){
// color = "Black";
// }
// else {
// color = "White"
// }
// console.log(color);


//If-Else-Vote-Code

// let age = 18;
// if (age >= 18){
// console.log("You can vote");
// }
// else {
// console.log("You cannot vote");
// }

//If-Else-Even-Odd

// let num = 9;
// if (num%2===0){
// console.log(num, "Is Even Number");
// }
// else{
// console.log(num, "Is Odd number");
// }

//Else-If

// let age = 70;

// if (age < 18){
// console.log("You are underage");
// }
// else if (age > 60){
// console.log("You are Senior");
// }
// else{
// console.log("Error")
// }

//Ternary Operator

// let age = 15;
// if (result = age >= 18 ? "Adult": "Not Adult"){
// console.log(result);
// }
// age >= 18 ? console.log("Adult"): console.log("Not Adult");


// alert("Hello");


// let name = prompt("Hello");
// console.log(name);

// let num = prompt("Enter a number");
// if (num%5===0){
// console.log(num, "Number is multiple of 5");
// }
// else{
// console.log(num, "Number is NOT a multiple of 5");
// }

//LOOPS
//For Loop
//Print 1 to 5
// for (let i = 1; i<=100; i++){
// console.log("Saksham The Great");
// }
// console.log("Loop has ended")

//calculate sum 1 to n
// sum = 0;
// for (let i = 1; i <= 5; i++){
// sum = sum+i;
// }
// console.log("sum =", sum)
// console.log("Loop has ended");

// for (i = 1; i <= 5; i++){
// console.log("i = ",i)
// }

// WHILE LOOP
// let i = 1;
// while (i <= 5){
// console.log("Saksham");
// i++;
// }

//Do While
// i = 1;
// do{
// console.log("i =",i);
// i++
// }
// while (i <=10);

//For-of LOOP
// let str = "Saksham";
// for(let i of str){ //iterator = character
// console.log("i=",i)
// }

// let str = "Saksham";
// let size = 0;
// for(let i of str){ //iterator = character
// console.log("i=",i)
// size++;
// }
// console.log("Total characters are: ", size);

//For In LOOP

// let student = {
//     name: "Saksham",
//     age: 22,
//     course: "CSE",
//     isPass: "True"
// };
// for(let i in student)
// console.log(i);

// let student = {
//     name: "Saksham",
//     age: 22,
//     course: "CSE",
//     isPass: "True"
// };
// for(let key in student)
// console.log("key =", key, "Value =", student[key]);


//Print ALL Even Numbers from 1 to 100 using for Loop

// for(num=0; num<=100; num++){
// if (num%2==0){
// console.log(num);
// }
// }

// let gameNum = 10;
// let userNum = prompt("Guess the number below:");
// while(userNum != gameNum){
//   userNum = prompt("You enetered wrong number, Guess again");
// }
// console.log("Congratulation, You entered the right number");


// let str = 'Saksham'; 
// console.log(str[6]);

//Template Literals
// let specialstring = `The is the template literals`;
// console.log(/*typeof*/ specialstring);


// let obj = {
// item: "Pen",
// price: "10"
// };
// let output = `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);
//String Interpolation
//To Create Strings by doing substitution of placeholders


//Escape Characters
// console.log("Saksham\nSharma")
// console.log("Saksham\tSharma")
// let len = "Saksham\nSharma";
// console.log(len.length);


//String are Immutable 


//String Methods
//UpperCase
// let name = 'saksham';
// console.log(name.toUpperCase())
//LowerCase
// let name1 = 'SHARMA';
// console.log(name1.toLowerCase())
//Trim
// let name2 = '        Saksham Sharma The Great    ';
// console.log(name2.trim());
//Slicing
// let num = "123456";
// console.log(num.slice(1,5));
// console.log(num.slice(1));
//Concatination
// let str1 = "Saksham";
// let str2 = "Sharma";
// let result = str1.concat(str2);
// let result1 = str2.concat(str1);
// let result2 = str1 + str2
// console.log(result);
// console.log(result1);
// console.log(result2);
//Replace
// let str = 'Hello';
// console.log(str.replace("H", "Y"));
// console.log(str.replace("Hello", "Hey"));
// let str1 = 'Hello';
// console.log(str1.replaceAll("l", "S"));
//CharAt
// let name = 'Saksham';
// console.log(name.charAt(0));


//Practice
// let name = prompt("Enter your name");
// console.log("@"+name+name.length);

//Array




