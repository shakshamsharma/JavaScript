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
// let heroes = ["Iron Man", "Thor", "Hulk"];
// console.log(heroes.length);
// console.log(heroes[0]);
// console.log(heroes[0]="Spiderman");
// for(let idx = 0; idx < heroes.length; idx++){
//   console.log(heroes[idx]);
// }
// for (let el in heroes){
//     console.log(el);
// }

// let cities = ["Mumbai","Delhi","Goa","Chandigarh"];
// for (let city of cities){
// console.log(city.toUpperCase());
// console.log(city.toLowerCase());
// }

//Practice
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks){
// sum += val;
// }
// console.log(sum)  

// let avg = sum / marks.length;
// console.log(`avg marks of the clas = ${avg}`);

//Practice 
// let items = [250, 645, 300, 900, 50]
// let i = 0
// for (let item of items){
// console.log(`value at index ${i} = ${item}`);
// let offer = item / 10;
// items[i] = items[i] - offer;
// console.log(`Value after offer = ${items[i]}`); 
// i++;
// }


// Array Methods
//Push(): Add to end
// let foodItems = ["Apple","Mango","Litchi","Banana"];
// let items = foodItems.push("Kurkure","Paneer");


//POP - Delete From End and Return
// let foodItems = ["Apple","Mango","Litchi","Banana"];
// console.log(foodItems);
// let deleted_items = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted Items is: ", deleted_items);


//toString: don't change in origional Array
// let foodItems = ["Apple","Mango","Litchi","Banana"];
// console.log(foodItems);
// console.log(foodItems.toString());



//Concatination
// let marvel_heroes = ["Thor","Iron Man","SpiderMan","Vision"];
// let dc_heroes = ["BatMan","SuperMan","Wonder Women","AquaMan"];
// let indian_heroes = ["ShaktiMan","Krish"];
// console.log(marvel_heroes + dc_heroes);
// let heroes = marvel_heroes.concat(dc_heroes, indian_heroes);
// console.log(heroes);


//unshift: Add to Start
// let marvel_heroes = ["Thor","Iron Man","SpiderMan","Vision"];
// marvel_heroes.unshift("AntMan");
// let val = marvel_heroes.shift();
// console.log("deleted", val);


//Slice - Return a piece of a array
// let marvel_heroes = ["Thor","Iron Man","SpiderMan","Vision"];
// console.log(marvel_heroes);
// console.log(marvel_heroes.slice(1,3));


//Splice - Change origional array (add, remove, replace)
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2,2,101,102);


//Functions
//Block of code that perform a specific task, can be invoked whenever needed
// function myfunction(){
// console.log("Hello Saksham");
// console.log("How are you?");
// }
// myfunction()

// function myfunction(msg, n){
//Parameter
// console.log(msg, n);
// }
// myfunction("Hello The Great Saksham", 100); //Arguement


// function sum(x,y){
// console.log(x+y);
// }


// function sum(x,y){
//Local Variable
// s = x + y;
// console.log("Saksham")
// return s;
// console.log("Sharma")
// }
// let val = sum(3, 4);
// console.log(val);


//Arrow Function
// =>
// const ArrowSum = (a, b) =>{
// return a + b;
// };
// let ArrowMul = (a, b) =>{
// return a * b;
// };
// ArrowMul = 5;


//Practice
// function countVowel(str){
// let count = 0;
// for (const char of str){
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
// count++;
// }
// }
// console.log(count);
// }


//Practice with Arrow Function
// const countVow = (str) =>{
// let count = 0;
// for (const char of str){
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
// count++;
// }
// }
// return count;
// }


//For Each Loop In Array
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val){
// console.log(val);
// });
// arr.forEach((val) =>{
// console.log(val)
// })


// let arr = ["Palampur","Delhi","Mumbai"];
// arr.forEach((val) =>{
// console.log(val.toUpperCase());
// });


// let arr = ["Palampur","Delhi","Mumbai"];
// arr.forEach((val, idx, arr) =>{
// console.log(val.toUpperCase(), idx, arr);
// });

// let num = [1,2,3,4,5];
// num.forEach((num) =>{
// console.log(num*num);
// });


//Map Method
// let nums = [10,20,30,40];
// let newarr = nums.map((val) =>{
// return val * 2;
// });


//filter
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let evenArray = arr.filter((val) =>{
// return val%2===0;
// });
// console.log(evenArray);


//Reduce
// let arr = [1,2,3,4];
// const output = arr.reduce((res, cur) =>{
// return res + cur;
// })
// console.log(output);



//largest number in Array
// let arr = [1,2,3,4];
// const output = arr.reduce((res, cur) =>{
// return res > cur ? res: cur;
// })
// console.log(output);


// let n = prompt("Enter the number");
// let arr = [];
// for(let i=1;i<=n;i++){
// arr[i-1] = i;
// }
// console.log(arr);


// let arr = [1,2,3,4];
// const output = arr.reduce((res, cur) =>{
// return res + cur;
// })
// console.log(output);
// let sum = arr.reduce((res, cur) =>{
// return res + cur;
// });
// console.log(sum);



// let n = prompt("Enter the number");
// let arr = [];
// for(let i=1;i<=n;i++){
// arr[i-1] = i;
// }
// console.log(arr);
// let factorial = arr.reduce((res, cur) =>{
// return res * cur;
// });
// console.log(factorial);