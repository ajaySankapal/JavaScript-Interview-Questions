//there are two types when talk about object binding
//i. implicit binding
//ii. explicit binding

//implicit binding - is applied when you call a function in object  using dot(.) notation
//this keyword in this scenerio refers to the object which is in the left side of the dot(.)

//explicit binding can be applied using 'call(), apply() and bind()' where this keyword refers to the object that is passed as arguments in this method

//in 'js' this keyword is used to refer something -> like an object
//what 'this' keyword or who it will refer depends on what context we are in..

//so here it is global context
//so here it will refer to the gloval object or window object
console.log(this) //>Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//when using into a function of object... 'this' keyword will refer to the imidiate parent object only(lexical scoping dont work with wrt to 'this')
const name = 'ajju bhai'
const grandParent = {
  name: 'Ajay',
  parent: {
    name: 'ajay_sankapal',
    children: {
      getName: () => {
        console.log(this.name)
      },
    },
  },
}

console.log(grandParent.parent.children.getName())

//'this' keyword in arrow function refers to its outer parent function

//this keyword in classes refers to the variables and methods define in constructor
class user {
  constructor(n) {
    this.name = n
  }
  getName() {
    console.log(this.name)
  }
}

const User = new user('ajay')
User.getName()

//Q1 - o/p

const stu = {
  name: 'Ajay',
  getName() {
    const name = 'Ajay Sankapal'
    return this.name
  },
}

console.log(stu.getName()) //will print "Ajay" because this keyword points to the parent object not the function in which it is used

function makeUser() {
  //   return {
  //     name: 'John',
  //     ref: this,
  //   }
  return {
    name: 'John',
    ref() {
      return this
    },
  }
}

let user1 = makeUser()
console.log(user1.ref().name) //we are not getting anything

//when are returning object we are making ref:this (this here points to the parent object and the parent of makeUser is window(global object)) so ref contains reference to the window object
//and here in the console we want to access ref.name (but name is not defined on ref(window object)) so we doesnot get any value

//to handle this we can make ref as regular function and return 'this' from that function... in that case the 'this' will refer to the parent object where the function is defined so the object

const user2 = {
  name: 'Ajay Sankapal',
  logMessage() {
    console.log(this.name) //what will be logged?
  },
}

setTimeout(user2.logMessage, 1000)
//user2.logMessage this function is act as callback function (like this function is taken out from the user2) so it no longer has access to the 'name' field of user2 object

//so now this 'this' refers to the global object and there is no field like 'name' in the global object so we got nothing on the console

//so if interviewer ask how to fix it? we can use regular function instead of callback function
setTimeout(function () {
  user2.logMessage()
}, 1000)

//create an object calculator

let calculator = {
  read() {
    this.a = +prompt('a = ', 0) //here + is converting string to integer
    this.b = +prompt('b = ', 0)
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
}

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

//Q6 - o/p
var length = 4
function callback() {
  console.log(this.length)
}

const object = {
  length: 5,
  //   method(fn) {
  //     fn()
  //   },
  method() {
    //arguments = [callback,1,2] this array in itself is a object
    arguments[0]() //callback will be called... but it will refer to its parent object... so what is its parent object this arguments array...and we are logging length(length here means the length of the  array) so it will return 3
  },
}

object.method(callback)
//if i pass more arguments in the method()
//and try to call the argument[0]() there in the method then --
object.method(callback, 1, 2)

//Q7 - implement calc

const calc = {
  total: 0,
  add(a) {
    this.total += a
    return this //here this will return the complete object... because we want to chain the other method also
  },
  multiply(a) {
    this.total *= a
    return this
  },
  substract(a) {
    this.total -= a
    return this
  },
}

const result = calc.add(10).multiply(5).substract(30).add(10)
console.log(result.total)
