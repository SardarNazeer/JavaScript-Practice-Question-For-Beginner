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

// q4) Swap Two Numbers Using temporary Variable & Without Temporary Variable

// temporay variable 

var a = prompt("enter the value of a");
var b = prompt("enter the value of b");

document.write(`the value of a is: ${a}, the value of b is: ${b}`);

var temp;

temp = a;
a = b;
b = temp;

document.write(` after swaping <br> the value of a is: ${a}, after swaping \n the value of b is: ${b}`);

// without temporary variable 

var a = parseInt(prompt("enter the value of a")); // 7
var b = parseInt(prompt("enter the value of b")); // 9

document.write(`the value of a is: ${a}, the value of b is: ${b}`);

a = a + b; // a = 7 + 9 = 16
b = a - b; // b = 16 - 9 = 7;
a = a - b; // a = 16 - 9 = 7;

document.write(` after swaping the value of a is: ${a}, after swaping  the value of b is: ${b}`);