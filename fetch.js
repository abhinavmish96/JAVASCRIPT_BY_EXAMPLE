// fetch returns a promise
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
// You can also pass options as a second param
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'get',
  headers: {
      'Content-Type': 'application/json'
    },
}).then((response) => response.json())
.then(json => console.log(json))