const noraTheCat = {
    name: 'Nora',
    color: 'orange',
    whatsMyName: function () {
      console.log(this.name)
    }
  }
  
  // whats my name is called on the object 
  // 'noraTheCat', so that is what 'this' is
  noraTheCat.whatsMyName() // => Nora
  
  /*
  node $ jsbyexample.js
  Nora
  */


  //this is tricky in JavaScript, when you consider scope.
  
  function doTwice (func) {
    func()
    func()
  }
  
  const noraTheCat = {
    name: 'Nora',
    color: 'orange',
    whatsMyName: function () {
      console.log(this.name)
    }
  }
  
  // This will throw an error.
  // doTwice calls the function as a
  // stand alone function, which sets 'this'
  // to the global scope. whatsMyName doesn't
  // exist on the window
  doTwice(noraTheCat.whatsMyName())
  // Error! func is not defined