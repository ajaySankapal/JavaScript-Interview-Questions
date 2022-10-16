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
