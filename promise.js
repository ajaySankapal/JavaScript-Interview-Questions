//we create new promise by using Promise constructor... promises is kind of special kind of objects in javascript
// the promise constructor takes just one parameter ,, and this is called the so called executable function... and this executable function takes to parameters i.resolve and other is ii. reject

const lotterPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You WIN the money')
  } else {
    reject('You LOST the money')
  }
})

lotterPromise.then((res) => console.log(res)).catch((err) => console.error(err))
