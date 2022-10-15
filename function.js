//what is function declaration / funcation defination/function statement?

//when we define a function with the function keyword and the name of the function it is called function declaration

function a() {} //this is a valid function declaration

//what is function expression?

//when a function is assigned to a variable then it is called function expression
//when you store a function inside a variable it is called function expression

var a = function x() {
  console.log('a is called')
}
a()

//what is anonymous function?
//a function which has no name is called anonymous function... we can use anonymous function when we want to use function as the value.... it can also be passed as the callback function

var x = function () {}

//what are first class functions?
//in any language if the functions are treated as variables then it is called first class function
//the ability of function that it can be used as variables, can pass as the arguements and can be returned from the function is called first class functions

function squareFunc(num) {
  return num * num
}

function displaySquare(fn) {
  console.log('Square is ', fn(5))
}

displaySquare(squareFunc) //here we are using function as the arguement

//what is IIFE?
//IIFE - means immidiately invoked function expression
//by this we can call that function at the place where we are declaring it
;(function sum(a, b) {
  console.log('sum is ', a + b)
})(5, 5)

//Function hoisting

//functions are hoisted a bit differently how the variables are hoisted
func('Ajay') //if we are using it at the top of the function declaration also we have access to that function...bcz functions are hoisted completely

//if a variable is hoisted it gives us undefined(for var only ... bcz for let and const it also get hoisted but they are in temporal dead zone)

function func(name) {
  console.log(`Hello ${name}`)
}

//if we assign functions to variables and then check if it hoisted or not.... then the function also behave the same as variables behave in the hoisting
console.log(xyz) //if we console.log xyz then it shows 'undefined'
//and if we try to call xyz then it shows xyz is not a function.. which is true because it is undefined
var xyz = function () {
  console.log('x is called')
}

//
var num = 21
var fun = function () {
  console.log(num, ' here in the o/p question') //it will print undefined... because no matter what the variable it is looking for it will first check in its local scope. if it finds it, it console.log the result, if dont find there then only it check for it in the parent scope
  //here in this example it check for num in the local scope... and in the local scope num is present there with the value 'undefined' because of hoisting .... so he finds the value and just console.log the result without checking for it in the parent scope
  var num = 10
}

fun()

//params vs arguements

//params are used at the time of function definition
const getFulName = function (firstname, lastname) {
  console.log(firstname + ' ' + lastname)
} //here firstname and lastname are the parameters which are used in the definition of the function

//arguements are used at the time of function invokation
getFulName('ajay', 'sankapal')

//spread and rest operator

function multiply(...nums) {
  //it is called the rest operator
  console.log(nums[0] * nums[1])
}

var nums = [5, 6]

multiply(...nums) //here it is called the spread operator

//NOTE: A rest parameter must be last in a parameter list.
// const fn = (a,...numbers,x,y)=>{
//     console.log(x,y);
// }

// fn(5,6,7,8)

const fn = (a, x, y, ...numbers) => {
  console.log(numbers)
}
fn(5, 6, 7, 8)

//what is a callback function?

//a function which is passed inside other function,, which is called sometime later in the code is called callback function
setTimeout(function cb() {
  console.log('callback function')
}, 2000)

//this cb is called callback function which will be invoked after sometime(2 secs)

//arrow functions
const add = (a, b) => a + b
console.log(add(10, 10))

//difference between arrow function and regular function
//1. syntax

//2. implicit 'return' keyword

//3. arguements
function regFun() {
  console.log(arguments) //we can access arguments even if we dont recieve them as parameter
}
regFun(5, 6, 7)

const arrFun = () => {
  console.log(arguments) //arguments is not defined
}
// arrFun(7, 8, 9)

//the main diff is about the 'this' keyword
const user = {
  name: 'Ajay Sankapal',
  rc1: () => {
    console.log(this.name + ' is the name') //here 'this' keyword is refering to undefined
  },
  rc2() {
    console.log(this.name + ' is the name') //here 'this' keyword is refering to the the property of the object
  },
}
user.rc1()
user.rc2()
