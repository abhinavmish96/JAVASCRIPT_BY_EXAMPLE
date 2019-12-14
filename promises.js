// Create a new Promise:
let timeOutLogger = new Promise(resolve => setTimeout(resolve, 500))
timeOutLogger().then(() => console.log('Waited half a second'));

// Async functions can be chained together
// This is the preferred syntax
readFile(file1)
    // When the function returns, manipulate it's return value
  .then((file1Data) => { /* do something to the returned data */ })
  .then((previousPromiseData) => { /* do the next thing */ })
  .catch( /* handle programmer errors */ )