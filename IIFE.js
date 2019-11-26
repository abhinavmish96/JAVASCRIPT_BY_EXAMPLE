// This won't run until its called.
function logSomething() {
    console.log('something');
  }
  
  // This will run without being called, as soon as the page is loaded.
  (function immediateLogger() {
    console.log('something')  
  })()

  /*
  $ node jsbyexample.js
  something
  */