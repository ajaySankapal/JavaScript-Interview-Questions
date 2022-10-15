const arr = [5, 2, 4, 99, 3, 8]
const double = arr.map((i) => i * 2)
console.log(double)
const even = arr.filter((i) => i % 2 == 0)
console.log(even)
const binary = arr.map((i) => i.toString(2))
console.log(binary)

//how to take the sum of the array elements
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(sum, ' sum by for loop')

//max of the arr
let max = Number.MIN_VALUE
for (let i = 0; i < arr.length; i++) {
  max = Math.max(max, arr[i])
}
console.log(max, ' max by for loop')

//we can also find the sum of the arr by reduce method
const sumRed = arr.reduce(function (acc, cur) {
  acc = acc + cur
  return acc
}, 0)

console.log(sumRed, ' sum by reduce function')

//max by reduce method
const maxRed = arr.reduce(function (acc, curr) {
  acc = Math.max(acc, curr)
  return acc
}, Number.MIN_VALUE)

console.log(maxRed, ' max by reduce method')
//reduce method takes two arguements
//i. is the function to do the calculation....this function takes two arguements i.acc ii.curr
//ii. is the initial value of the accumulator

//if we compare the reduce method with for loop
// the arr[i] wala part is curr(current represent the current element running in the iteration)
// the sum or max wala variable is acc(accumulator-->which carries out the calculation with them through out the iteration)

const users = [
  { firstname: 'ajay', lastname: 'sankapal', age: 23 },
  { firstname: 'elon', lastname: 'musk', age: 50 },
  { firstname: 'donald', lastname: 'trump', age: 70 },
  { firstname: 'durgesh', lastname: 'verma', age: 23 },
]

//get the full name of the users
const usersWithFullName = users.map(
  (user) => user.firstname + ' ' + user.lastname
)

console.log(usersWithFullName)

//how many people are there with the particular age
// {23:1,50:1,70:1,20:1}
// so the value we want to reduce the array into is object so we take the acc initial value as empty object
const ageArr = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]
  } else {
    acc[curr.age] = 1
  }
  return acc
}, {})

console.log(ageArr)
console.log(users[0].firstname, ' users firstname')
//get the first name of all the uses whose age is less than 30
const less30 = users.filter((x) => x.age < 30).map((user) => user.firstname)

console.log(less30)

const less30red = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstname)
  }
  return acc
}, [])

console.log(less30red, ' from reduce function')

//polyfills for map,filter and reduce

//polyfill for map
//syntax of map
// Array.map((num, ind, arr) => {})
Array.prototype.myMap = function (cb) {
  //the map method returns the new array so
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  //here cb is the logic we want to apply on the array... we gave that logic as callback function
  return temp
}

const doubleArr = arr.myMap((i) => i * 2)
console.log(doubleArr, ' from myMap')

//polyfill for filter method
Array.prototype.myFilter = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    // temp.push(if(cb(this[i])))
    // we have to push only those elements to the new array if it fulfills the condition so
    if (cb(this[i], i, this)) temp.push(this[i])
  }
  return temp
}

const evenArr = arr.myFilter((i) => i % 2 == 0)
console.log(evenArr, ' from filter polyfill')

//polyfill for reduce method
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
  }
  return accumulator
}

const sumMyRed = arr.myReduce(function (acc, curr) {
  acc += curr
  return acc
}, 0)
const sumWithNoAcc = arr.reduce(function (acc, curr) {
  //if we dont provide the acc then the first value of the array is assigned to the acc and the curr will have the second value or we can say that the iteration will start from the second index
  acc += curr
  return acc
})
console.log(sumWithNoAcc, ' sum with no acc')
console.log(sumMyRed, ' from polyfill for reduce')

//what is diffrence b/w map and forEach
//map returns new array while forEach does not return a new array
//we can other array methods with map

//output based questions
const students = [
  { name: 'ajay', rollNumber: 12, marks: 80 },
  { name: 'durgesh', rollNumber: 13, marks: 69 },
  { name: 'akash', rollNumber: 14, marks: 35 },
  { name: 'akash', rollNumber: 7, marks: 55 },
]

//return only the name of the students and in capital letters
const studentCap = students.map((stu) => stu.name.toUpperCase())
console.log(studentCap)

//return only those students who scored more than 80
const moreThan80 = students.filter((stu) => stu.marks > 80)
console.log(moreThan80, ' moreThan80')

//return only those students who scored more than 80 and the number is greater than 12
const moreThan80Rol12 = students.filter(
  (stu) => stu.marks > 80 && stu.rollNumber > 12
)

console.log(moreThan80Rol12, ' moreThan80Rol12')

//we have to calculate the sum of the marks of all of the students
const marksSum = students.reduce(function (sum, curr) {
  sum += curr.marks
  return sum
}, 0)

console.log(marksSum, ' sum of the marks of the students')

//return only the name of the students who scores more than 80
const nameScoredMore80 = students
  .filter((stu) => stu.marks > 80)
  .map((stu) => stu.name)

console.log(nameScoredMore80, ' nameScoredMore80')

//return total marks of the students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20
    }
    return stu
  })
  .filter((stu) => stu.marks > 60)
  .reduce(function (sum, curr) {
    sum += curr.marks
    return sum
  }, 0)

console.log(totalMarks, ' total marks of the students')
