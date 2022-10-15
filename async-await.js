//it enables asynchronous promise based behavior to be written in a cleaner style, avoiding the needs to be explicitly configure promise chains

//syntatic sugar to avoid .then() and catch()

const btn = document.getElementById('btn')
const whereAmI = async function (country) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    console.log(data[0].title)
  } catch (err) {
    console.log(err, 'error is here')
  }
}

btn.addEventListener('click', whereAmI)
//we can use try and catch block to handle the errors
