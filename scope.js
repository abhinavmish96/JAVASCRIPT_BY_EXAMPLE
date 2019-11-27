//Variables in  Global Scope are accessible everywhere
let popularFruit = 'banana'

function changeFruit() {
  popularFruit = 'apple'
}
changeFruit()
console.log(popularFruit)
// => apple

// A new local scope is established in functions
// Local variables aren't available outside their scope
function newFruit() {
  var fruit = 'apple'
}

// This doesn't work:
// console.log(fruit)
// error! fruit is not defined

// let and const variables have block scope
// They're assigned to _any_ curly brace block
// including if, switch, loops, etc
function fruitLogger () {
  if (true) {
    const es6Fruit = 'blueberry'
    var oldSchoolJsFruit = 'pear'

  }
  // console.log(es6Fruit)
  // => error! fruit is not definied

  console.log(oldSchoolJsFruit)
  // => pear
}

fruitLogger()

/*
$ node jsbyexample.js
apple
pear
*/