// Declare global variables on the window explicitly
window.myName = 'Eric'
console.log(window.myName) // => Eric

// Variables are implicity added without the window keyword
myName = 'Ted'
console.log(window.myName) // => Eric

// any var declared without var, let or const
// is automatically a global var
function newScope() {
  function evenDeeperScope() {
    windowVar = "I'm on the window"
  }
  evenDeeperScope()
}

newScope()
console.log(window.windowVar) // => I'm on the window

/*
Eric
Ted 
I'm on the window
*/