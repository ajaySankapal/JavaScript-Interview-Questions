//function that is passed inside other function which can be called after sometime in that function in which they are passing

//due to callback we can do asynchronous tasks in javascript

// setTimeout(function xyz() {
//   console.log('timer')
// }, 7000)

// //this xyz function is a callback function.... that will be called after 3sec

// function x(y) {
//   console.log('x is called')
//   y()
// }
// x(function y() {
//   console.log('y is called')
// })

// function attachEventListener() {
//   let count = 0
//   document.getElementById('btn').addEventListener(
//     'click',
//     (xyz = () => {
//       console.log('button clicked ', ++count)
//     })
//   )
// }

// attachEventListener()

console.log('start')
fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((data) => console.log(data))
fetch('https://fakestoreapi.com/carts')
  .then((res) => res.json())
  .then((data) => console.log(data))
fetch('https://fakestoreapi.com/users')
  .then((res) => res.json())
  .then((data) => console.log(data))
for (let i = 0; i < 1000000000; i++) {}
console.log('lot of lines of code')
setTimeout(() => {
  console.log('0 sec timer')
}, 400)
console.log('end')
console.log('end')
