let name = {
  firstname: 'ajay',
  lastname: 'sankapal',
  printfullName: function () {
    console.log(this.firstname + ' ' + this.lastname)
  },
}

name.printfullName()

//now suppose we have another user and want to print its fullname
let name2 = {
  firstname: 'kuldeep',
  lastname: 'sankapal',
  //if we want to print the full name of this user also... the method generally we use is that we copy the code from that object and paste it here.... but it is not a good practice.... so we can use 'call()' method
}

//call() - method is a concept of function borrowing
//each method of object and function has access to this 'call()' method

name.printfullName.call(name2) //here we are calling the method which is defined on 'name' and passing the object where we want to call that method

//what we do is make this printfullName method as general method

let getfullName = function (hometown, state) {
  console.log(
    this.firstname + ' ' + this.lastname,
    ' from ' + hometown + ', ' + state
  )
}

getfullName.call(name, 'khandwa', 'Madhya Pradesh') //parameters comma separated
getfullName.call(name2, 'bhopal', 'Madhya Pradesh')
//call method directly invoke that method
//we can pass list of parameters as comma separated

//apply method is just same as the apply method... but it has the parameters in the form of list
console.log(getfullName.apply(name, ['khandwa', 'madhyapradesh'])) //arraylist of parameters

//bind method is just like the call method... but instead just involing the method it bind and returns the copy of that method which we can use later
console.log(getfullName.call(name2, 'khandwa', 'm.p.')) //it is logging undefined because call method dont return any method
console.log(getfullName.bind(name2, 'khandwa', 'madhypradesh')) //it is logging the function body because this are returning the copy of the method

let bindMeth = getfullName.bind(name2, 'khandwa', 'm.p.')
bindMeth()

// output based question
var status = '😎'
setTimeout(() => {
  const status = '😍'
  const data = {
    status: '🥑',
    getStatus() {
      return this.status
    },
  }
  console.log(data.getStatus())
  console.log(data.getStatus.call(this)) //here this will refer to the object where settimeout is defined in... settimeout is not a function, it can not refer to the 'status' defined in settimeout function,, it will refer to the context in which the settimeout is called so global object there is status''😎'' so it will print this
}, 0)

//Call printanimals such that it prints all animals in object

const animal = [
  { species: 'Lion', name: 'king' },
  { species: 'Whale', name: 'Queen' },
]

function printAnimals(i) {
  this.print = function () {
    console.log('#' + i + ' ' + this.species + ':' + this.name)
  }
  this.print()
}

for (let i = 0; i < animal.length; i++) {
  printAnimals.call(animal[i], i)
}

//append an array into another array
const array = ['a', 'b']
const elements = [0, 1, 2]
// array.push(elements) //push the whole array... but we only want to push the elements of the array
console.log(array)
array.push.apply(array, elements) //here array is the object 'this' refers and the elements is the single array of parameters( just like what the apply method expect)
console.log(array)

//math of the array
const nums = [1, 5, 6, 9, 88, 7]
// const max = Math.max(1, 5, 6, 9, 8, 7)
// const max = Math.max(nums) //NaN
const max = Math.max.apply(null, nums) //we dont need to provide the first  argument we just  want the arguments
console.log(max, 'max number')

//bound function
function f() {
  console.log(this)
}

let user = {
  g: f.bind(null),
}

user.g() //logging window object
//the this in f() will bound to global object unless it is provided with another object in bind method when we are binding the f() in user object we are binding null values so it does not affect what f()'s 'this' refering to so it will refer to the global object only and that's what we get the global object (window object in this case)

function f() {
  console.log(this.name)
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' })
//a function which is bound to one object can be changes later it will bound the same object
//so bind chaining does not work
f() //logs john

//fix the line where we are invoking the function to make it work
function checkPassword(success, failed) {
  let password = prompt('Password ? ', '')
  if (password == 'ajay_sankapal') success()
  else failed()
}

// let cust = {
//   name: 'Ajay Sankapal',
//   loginSuccessful() {
//     console.log(`${this.name} logged in`)
//   },
//   loginFailed() {
//     console.log(`${this.name} failed to log in`)
//   },
// }

// checkPassword(cust.loginSuccessful, cust.loginFailed) //it is printing logged in and failed to log in.... but does not printing the name
//because it does not have access to 'this' keyword whom will the 'this' keyword refer to
//so we can use bind() method and pass the cust as the first argument so that 'this' keyword refer to this cust object

// checkPassword(cust.loginSuccessful.bind(cust), cust.loginFailed.bind(cust))

// partial application for logoin function

let cust = {
  name: 'Ajay Sankapal',
  login(result) {
    console.log(this.name + (result ? ' login successful ' : ' login failed '))
  },
}

// checkPassword(cust.login.bind(cust, true), cust.login.bind(cust, false))

//explicit binding with arrow function

const age = 10

var person = {
  name: 'Ajay',
  age: 20,
  getAgeArrow: () => {
    console.log(this.age)
  },
  getAge: function () {
    console.log(this.age)
  },
}

var person2 = { age: 24 }
person.getAge.call(person2)
person.getAgeArrow.call(person2) //no matter your applying 'call(), apply(), and bind()' over arrow function it behaves just as it behave normally. so it will get its context from its parent's normal function...so here it does not any parent function so 'this' here refers to the window object and tries to find 'age' there
//const age = 10(in window object) ... here age is block scoped variable so arrowfunction unables to find it so it prints undefined.... if we convert it from block scoped to var(function scoped it prints 10)
//we can not change the context of arrow function by using call,apply and bind

//polyfill for call

const car1 = {
  color: 'Red',
  company: 'Ferrari',
}

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  )
}

//polyfill for call
//it will have 'context' as the fist arguments and list of arguments if any
Function.prototype.myCall = function (context = {}, ...args) {
  //first handle the errors -- if the type is not function then throw an error
  if (typeof this !== 'function') {
    throw new Error(this + `It's not callable`)
  }
  context.fn = this
  //we are creating a new function and adding it to the object(context) and assigning its value to 'this' this means the function on which we are calling this function... so all the this keyword used in the object refers to the object(context)

  //for example we are calling call method on 'getFullName() function' and we are passing obj1={firstname:'ajay",lastname:'sankapal'} ,, so we are creating new function and adding it to the obj1 this new function is 'this' means the getFullName()
  context.fn(...args)
}

// purchaseCar.myCall(car1, '₹', 500000)

//polyfill for apply
//apply is same as call method but it takes single array as second argument
Function.prototype.myApply = function (context = {}, args = []) {
  //first check if it is called on the function or not
  if (typeof this !== 'function') {
    throw new Error(this + `It's not callable`)
  }
  //also check the second argument provided is array or not
  if (!Array.isArray(args)) {
    throw new Error('CreateListFromArrayLike called on non-object')
  }
  context.fn = this
  context.fn(...args)
}
// purchaseCar.myApply(car1, ['₹', 500000])

//polyfill for bind

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + ` cannot be bound as it's not callable`)
  }

  //we will create the function but we will return that so it can be called later
  context.fn = this
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}

const bindFunc = purchaseCar.myBind(car1)
bindFunc('₹', 500000)
