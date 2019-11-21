// An object literal:
const felixTheCat = {}

// Use bracket notation to give properties to felixTheCat:
felixTheCat['name'] = 'felix'
felixTheCat['color'] = 'orange'
console.log(felixTheCat)

// Access the information with bracket or dot notation
console.log(felixTheCat.name)
console.log(felixTheCat['color'])

// You can make anything a value, such as a function
felixTheCat['sayHi'] = () => console.log('meow')
felixTheCat.sayHi()

/*
node jsbyexample.js
{ name: 'felix', color: 'orange' }
felix
orange
meow
*/