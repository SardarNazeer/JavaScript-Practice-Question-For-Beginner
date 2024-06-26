// q1) print hello word

let print = "Hello word";
document.write(print);

// q2) how to add two numbers 
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

// q3) Square root of a Number

var a = prompt("enter a number for square root");
var sqr = Math.sqrt(a);

document.write("The square root of = " + sqr);

// q4) Calculate the Area of a Triangle

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

// q5) Swap Two Numbers Using temporary Variable & Without Temporary Variable

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


// q6) Convert kilometers to miles using JavaScript Function

function convert(){
    var kms = document.getElementById('data').value;
    const factor = 0.621371;
    var miles = kms * factor;
    document.getElementById('result').innerText = miles;
}

// q7) Convert Celsius to Fahrenheit using JavaScript Function

function convertCelcius(){
    var celcius = document.getElementById('celcius').value;
    const Fahrenheit = celcius * 1.8 + 32;
    document.getElementById('res').innerText = Fahrenheit;
}


// q8) JavaScript Program to Check if a number is Positive, Negative, or Zero

function check(){
    var input = document.getElementById("num").value;
    var res = Math.sign(input);
    document.getElementById("resu").innerText = res;
}

// method2

function check(){
    var input = document.getElementById("num").value;
    // var res = Math.sign(input);
    if (input > 0) {
        res = `${input} is a positive number`;
    } else if(input < 0){
        res = `${input} is an negative number`;
    } else if(input == 0){
        res = `${input} is a zero`;
    }
    document.getElementById("resu").innerText = res;
}

// q9) JavaScript Program to Generate a Random Number using Math.random() Function

// get a random number between 1 to 10 

let a = Math.random() * (10-1) + 1;
console.log(a);

// floating number khatm krne ke liye 

console.log(Math.floor(a));


// q10) JavaScript Program to Check if a Number is Odd or Even

// using if-else 

var a = parseInt(prompt("enter any number to check it is even or odd"));

if(a%2 == 0){
    alert('${a} is even number');
} else if(a%2 != 0){
    alert('${a} is odd number')
} else {
    alert('not a valid input')
}

// using ternary operator 

var a = parseInt(prompt("enter any number to check it is even or odd"));

var res = a%2 == 0 ? "even" : "odd";

alert(res);

// q11) JavaScript Program to Check if a Number is a Prime Number 

var num = parseInt(prompt("enter num to check prime number"));

if (num == 1) {
    res = '${num} is not a prime number neither composite';
} else if (num < 1) {
    res = '${num} is not a prime number';
} else {
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            res = '${num} is not a prime number';
        } else {
            res = '${num} is a prime number';
        }
    }
    document.write(res);
}


// Q12) JavaScript Program to Find Largest Number Among Three Numbers

// method1 

var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var num3 = parseInt(prompt("Enter third number"));

if (num1 > num2 && num1 > num3) {
    alert(`${num1} is greater than among all`);
} else if (num2 > num1 && num2 > num3) {
    alert(`${num2} is greater than among all`);
} else if (num3 > num1 && num3 > num2) {
    alert(`${num3} is greater than among all`);
} else{
    alert('invalid input');
};


// method2 


var a = parseInt(prompt("Enter first number"));
var b = parseInt(prompt("Enter second number"));
var c = parseInt(prompt("Enter third number"));
var x = Math.max(a,b,c);
document.write(`${a}, ${b}, ${c}: largest = ${x}`);


// q13) JavaScript Program to Find the Factorial of a Number

var number = prompt('please enter a number');
var fact = 1;

if(number == 0) {
    console.log(`The Factorial Of ${number} is 1`);
}else if(number < 0){
    console.log('The Factorial Of A Negative Num Is Not Possible')
}else{
    for (var i = 0; i <= number; i++) {
        fact = fact * i;
    }
    console.log(`The Factorial Of ${number} is ${fact}`);
};

// q14) JavaScript Program to Find the Factorial of a Number Using Recursion

var num = prompt('enter a number');
var fact = 1;

function factorial(n){
    if (n>num) {
        return;
    }
    var tmp = fact;
    fact = fact * n;
    console.log(fact);
    n++;
    factorial(n);
};

factorial(1);