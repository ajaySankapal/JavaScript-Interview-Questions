//what is objects?

//an object is the collection of properties. and property is an association between key and a value
//property can be function,,, in that case it is called as method
const user = {
  name: 'ajay',
  age: 23,
  //how to add the property which is like statement(space separated)
  //   like the video:true  //...like this property
  'like the video': true,
}

//user is a object
//we can access it by using .(dot)
console.log(user)
//we can modify the properties
user.name = 'ajay sankapal'
console.log(user)

//we can also delete the properties of object
// delete user.age
// console.log(user)

//delete keyword is only works when you want to delete the property from the object

//output based question
const func = (function (a) {
  delete a //a is the local variable ... so delete cant delete this variable
  return a
})(5)

console.log(func)

console.log(user['like the video'])

//how to add dynamic property and value to the object

//we want to add
const property = 'firstname'
const name = 'Ajay Sankapal'
const student = {
  //   property: name, //it is showing -->{ property: 'Ajay Sankapal' } we want firstname:'Ajay sankapal"
  [property]: name,
}
console.log(student)

//how to iterate over the object and print the key and values

//we can use 'for in' loop
for (key in user) {
  console.log(key)
}

//for printing the values
for (key in user) {
  console.log(user[key])
}

//output based question
const obj = {
  a: 'one',
  b: 'two',
  a: 'three',
}

console.log(obj) //it will give output --> { a: 'three', b: 'two' }
//if the two keys are same it will consider the key which are defined later in the object

//Q2 - create a function multiplyByTwo(obj) that multiplies all numeric property values of num by 2

const object = {
  a: 100,
  b: 200,
  name: 'ajay',
}

function multiplyByTwo(obj) {
  for (key in obj) {
    if (Number.isInteger(obj[key])) {
      obj[key] = obj[key] * 2
    }
  }
}
multiplyByTwo(object)
console.log(object)

//Q3 - what is the output of the followind code/
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }
a[b] = 123
a[c] = 456
console.log(a[b]) // the output is 456
//if we console.log 'a' we get ->{ '[object Object]': 456 }
//why so?
//a[b] = 123 we are assigning 'b' as a key to 'a' and value as '123'
//this is assigned just like this a['[object Object]'].... bcz object can not be converted into a key unless it is a string... so when it tries to convert it into the string it becomes '[object object]'
//so of the assignment look like this
//a['[object Object]']:123
//a['[object Object]']:456 both the keys are same ... so we it log the most recent value of the key which is added later....means 456
//

//what is JSON.stringify and JSON.parse()
//Q4 - JSON.stringify convert the objects to JSON
const strObj = JSON.stringify(user)
console.log(strObj) //{"name":"ajay sankapal","age":23,"like the video":true}
//JSON.parse() convert the json to object
const obJ = JSON.parse(strObj)
console.log(obJ)
//used in localstorage -- because we can't stores the object directly into the localstorage(actually it got stored but as [object Object])
//we can stores the object as stringified and when we want to access them we parse them to object to do operation on them

//Q5 - what's the output?

console.log([...'Lydia']) //[ 'L', 'y', 'd', 'i', 'a' ]
//spread this string into the array
//... this are spread operators which are used to spread the properties of an object and an array
//inside the above console.log this spread operators spread the characters of this string into the array(toArray())

//q6 - what's the output?
const user1 = { name: 'ajay', age: 23 }
const admin = { admin: true, ...user1 }
console.log(admin) //it will copy the properties of user1 and add new propery 'admin':true

const settings = {
  name: 'Ajay',
  level: 23,
  health: 90,
}

const data = JSON.stringify(settings, ['level', 'health']) // this will return the json of the settings object, but only those 'fields' which are mentioned in the array which is passed as the second argument
console.log(data) //we get the json of the setting but only the level and health field

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
    //here in regular function this 'this' keyword refers to the object in which it is defined
  },
  perimeter: () => {
    return 2 * Math.PI * this.radius
    //in arrow funtion this 'this' keyword refers to the global object
  },
}

console.log(shape.diameter()) //log 20
console.log(shape.perimeter()) //log NaN (not a number)

//what is destructuring in objects?

//in destructuring we can make use fields as the variables
//take the properties from the object and assign them to a variable
const product = {
  pro_name: 'Mobile',
  brand: 'Apple',
  price: '85k',
  address: {
    city: 'Khandwa',
    state: 'M.P.',
  },
}
const { pro_name, brand, price } = product //this is called object destructuring
//how to give our custom name(different from the name which is in the object)
const { pro_name: product_name } = product
console.log(product_name)
console.log(pro_name)
console.log(brand)
console.log(price)

//how to destructure the nested object
const { address } = product

console.log(address) //gives the object we want to take the city out of it
const {
  address: { city },
} = product
console.log(city)

//NOTE- we can not use rest operator in between the parameters when passing in a function
//but we can use spread operator whenever we want
//...dots used before sth and passed as parameter then it is called the rest operator
//...dots which are used other than in parameters it is called spread operator

//Q-11 what's the output?
let greet = { greeting: 'hey!!' }
let sayGreet
sayGreet = greet
greet.greeting = 'hello'
console.log(sayGreet.greeting) //it will print "hello"
//because by doing this( sayGreet = greet ) we are storing the reference of greet in sayGreet so anything we change in 'greet' and 'sayGreet' it reflect in both the objects because it is storing the reference not the value

//Q-12 what's the output

console.log({ a: 1 } == { a: 1 }) //returns false because both of these are different objects, both have diff space in the memory
console.log({ a: 1 } === { a: 1 })
console.log(greet === sayGreet) //this will give true ... because they are referencing to the same memory

//Q-13 what's the output?
let person = { name: 'Lydia' }
let members = [person] //this is just like this members[0] = person
person.name = null //this thing does not affect the members variable
console.log(members)

//Q14 what's the output?
const value = { number: 10 }
const multiply = (x = { ...value }) => {
  //when we dont provide any value in the argument it will take this default value({...value}) which is the clone of the object defined above

  //but when we call the multiply function by providing some value as argument it will have reference to that object and for the first time it do the calculation and update the number in the 'value' object which will also get reflected in the original object because it is refering to the same object... and for the second time it will do the calculation on the updated object
  console.log((x.number *= 2))
}
multiply() //20 //will take the value object as defualt value and clone that object
multiply() //20
multiply(value) //20 //will take the reference of the object 'value' that we are passing as argument
multiply(value) //40

//Q-15 o/p

function changeAndReference(person) {
  person.age = 25
  person = {
    name: 'John',
    age: 50,
  }
  return person
}

const personObj1 = {
  name: 'Alex',
  age: 30,
}

const personObj2 = changeAndReference(personObj1)
//personObj2 - {name:'John',age:50}
//personObj1 - {name:'Alex',age:25}
console.log(personObj1)
console.log(personObj2)

//Q16- what is shallow copy and what is deep copy of an object?
//when one object has the reference to other object it is called "shallow copy"
//when we completely clone one object into another object it is called "deep copy"

//how to create the deep copy of the objects

const object1 = {
  name: 'Ajay',
  age: 23,
}

//method-1 by using Object.assign() method
const cloneObj1 = Object.assign({}, object1)
console.log(object1)
cloneObj1.name = 'Ajay Sankapal' //does not affect the old one
console.log(cloneObj1)

//method-2 by using the json.strinify and then using json.parse
const cloneObj2 = JSON.parse(JSON.stringify(object1))
cloneObj2.name = 'ajay_sankapal'
console.log(cloneObj2)

//method-3 by using the spread operator
const cloneObj3 = { ...object1 }
cloneObj3.name = 'ajaySankapal'
console.log(cloneObj3)
