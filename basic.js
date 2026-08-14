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