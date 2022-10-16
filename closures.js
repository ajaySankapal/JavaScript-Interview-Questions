//closures

//what is lexical scope

//->here global scope

function someName() {
  //local scope
}

//if a variable is declared outside the function can be accessible inside another function then this is called lexical scope.... while the opposite is not true

//what is closures?
//a closure is a function that references to the variables in the outer scope from its inner scope

//example
function makefunc() {
  var name = 'mozila'
  function displayName() {
    console.log(name)
  }
  return displayName
}
var temp = makefunc()
//on calling this 'makefunc' function it is returning the display name function and it got popped up from the callstack

temp() //now here we are calling that displayName function... and it display the name without any error...the thing is that the displayName is accessing the variable which is in its outerscope and after calling the outerfunction we are removing it from the call stack and after some time we are calling this displayname then also it has access to the variables of its parent scope .... this is because it forms closure with its outerscope and even after calling the outer scope(removing it from the callstack)..it has access to its variables

//what are the advantages of closures?
//for private variables

//what is closures scope chain?
//every closures has three scopes
//i. local scope
//ii. function or outer scope
//iii. global scope

// global scope
const e = 10
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)) // log 20

//output based question

// function a() {
//   for (var i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
// }
// a() //it will print '4' times because the 'var' variable is function scoped... for all the iteration we are having the reference of 'i' kept... and register the settimeout in the web apis .... when the timer is over and callback function is about to access the 'i' it is refering to the same updated value which is '4' so it console.log it 4 times

//we can use let to avoid this problem.... because let is block scope and the callback function will look for 'i' for that block only

// function b() {
//   for (let i = 0; i < 4; i++)
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
// }
// b()

//some interviewers are very smart and tell you to not use var.... then we can solve this problem by using closure

// for (var i = 0; i < 4; i++) {
//   function timer(i) {
//     //i will be local variable for this function
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
//   timer(i) //everytime we moving forward the loop we are passing new value of 'i' to the timer function
// }

//how would you use a closure to create a private counter?

function counter() {
  var _counter = 0
  function add(increment) {
    _counter += increment
  }
  function retrieve() {
    return 'counter = ' + _counter
  }
  return {
    add,
    retrieve,
  }
}

const c = counter()
c.add(10)
c.add(5)
console.log(c.retrieve())

//what is module pattern?

var module = (function () {
  function privateMethod() {
    console.log('private method')
  }
  return {
    publicMethod: function () {
      //can also call and use private variables and methods
      console.log('public method')
    },
  }
})()

module.publicMethod() //successfully logs the output
// module.privateMethod() //return error because module is not returning that private method so we dont have the acess to it

//make this run only once
let view
function likeTheVideo() {
  let called = 0
  return function () {
    if (called == 0) {
      view = 'roadside coder'
      console.log(`subscribe to ${view}`)
      called++
    } else {
      console.log('already subscribed')
    }
  }
}

let sub = likeTheVideo()
sub()
sub()
sub()
sub()

//once polyfill
