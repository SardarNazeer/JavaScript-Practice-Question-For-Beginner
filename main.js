// q1) how to add two numbers 
// i) for static number (jo fixed ho)
// ii) for dynamic number (jo user dega)

// for static 

let a = 11;
let b = 16;
let c = a + b;

document.write("The sum of "+ a + " and " + b + " is: " + c + "<br>");

// for dynamic 

let x = prompt("enter value 1");
let y = prompt("enter value 2");
let integerNumber1 = parseInt(x);
let integerNumber2 = parseInt(y);
let z = integerNumber1 + integerNumber2;

document.write("The sum of "+ x + " and " + y + " is: " + z);

// q2) Square root of a Number

var a = prompt("enter a number for square root");
var sqr = Math.sqrt(a);

document.write("The square root of = " + sqr);

// q3) Calculate the Area of a Triangle

let base = prompt("enter the value of base of a triangle");
let height = prompt("enter the value of height of a triangle");

area = (base * height) / 2;

document.write("The area of a triangle is = " + area);

// for a regular triangle 

var a = 5;
var b = 18;
var c = 24;
var s = (a+b+c)/2;
var temp = s*(s-a)*(s-b)*(s-c);

var area = Math.sqrt(temp);

console.log("the area is = " + temp);