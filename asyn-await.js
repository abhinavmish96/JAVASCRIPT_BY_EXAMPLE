// tell JavaScript that his function is asynchronous: 
async function logger() {
    // pause until fetch returns
    let data = await fetch('http://sampleapi.com/posts')
    console.log(data)
  }
  
  
  // Combine it with try / catch
  async function logger ()  {
      try {
          let user_id = await fetch('/api/users/username')
          let posts = await fetch('/api/`${user_id}`')
          let object = JSON.parse(user.posts.toString())
          console.log(posts)
      } catch (error) {
          console.error('Error:', error) 
      }
  }