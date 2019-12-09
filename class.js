class Animal {
    constructor(name) {
      this.name = name
    }
    
    greet() {
      return `Hello, my name is ${this.name}`
    }
  }
  
  class Cat extends Animal {
    constructor(name, breed) {
      super(name)
      this.breed = breed
    }
    
    purr() {
      return 'purrrrr'
    }
  }
  
  const nora = new Cat('Nora', 'tabby')
  nora.greet()
  nora.purr()

  /*
  $ node jsbyexample.js
  Hello, my name is Nora
  purrrrr
  */