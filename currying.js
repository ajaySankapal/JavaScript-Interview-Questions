//currying in javascript
//f(a,b) into f(a)(b)

function f(a, b) {
  console.log(a, b)
}

function fc(a) {
  return function (b) {
    return `${a} ${b}`
  }
}

console.log(fc(5)(6))

//why we use currying?
//i. to avoid passing the same variable again and again
//ii. to create higher order function
//iii. to make your function pure and less prone to errors

//implement sum(2)(6)(1)

function sum(num) {
  return function (num2) {
    return function (num3) {
      return num + num2 + num3
    }
  }
}

console.log(sum(2)(6)(1))

// evaluate('sum')(4)(2) => 6
// evaluate('multiply')(4)(2) =>8
// evaluate('divide')(4)(2) => 2
// evaluate('substract')(4)(2) =>2

function evaluate(operation) {
  return function (b) {
    return function (c) {
      if (operation === 'sum') {
        return b + c
      } else if (operation === 'multiply') {
        return b * c
      } else if (operation === 'divide') {
        return b / c
      } else if (operation === 'substract') {
        return b - c
      } else {
        return 'invalid operation'
      }
    }
  }
}

console.log(evaluate('sum')(4)(2))
console.log(evaluate('multiply')(4)(2))
console.log(evaluate('substract')(4)(2))
console.log(evaluate('divide')(4)(2))

//infinite currying
//add(2)(3)(4)...(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b)
    return a
  }
}

console.log(add(2)(3)(4)(), 'add function')

//currying vs partial application

//what is partial application - a function returning another function that might return another function, but each returned function can take several parameters
//which is not the case with currying all the returned function should accept only one parameter
sum(2)(3)(4) //currying
sum(2)(3, 4) //partial application

//manipulating dom
function content(id) {
  return function (text) {
    document.getElementById(id).textContent = text
  }
}

const updateHeader = content('heading')
updateHeader('subscribe to roadside coder')
updateHeader('Learn DSA')

//curry() implementation
//this function will take this function f(a,b,c) and convert it into f(a)(b)(c)

// function curry(func) {
//   return function curriedFunc(...args) {
//     //initially only the first argument will be called,,, we only return the answer when the no. of arguments and length of the function becomes equal or exceed..so we call function with second argument and pass it into the curried function(here recursion is happening) then also the same process
//     console.log(...args, ' args ')
//     if (args.length >= func.length) {
//       console.log(func, 'original function')
//       return func(...args)
//     } else {
//       return function (...next) {
//         console.log(...next, ' next ')
//         return curriedFunc(...args, ...next)
//       }
//     }
//   }
// }

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args)
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next)
      }
    }
  }
}

const addition = (a, b, c, d) => a + b + c + d
const totalSum = curry(addition)
console.log(totalSum(10)(20)(10)(10), 'sum of the numbers')
