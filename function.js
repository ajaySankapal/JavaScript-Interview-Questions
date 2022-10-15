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
