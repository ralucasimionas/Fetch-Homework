fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => { 
        console.log(posts);
        
        const myPost = document.getElementById('post');
        // const myTitle = document.getElementById('title');
        // const myDescription = document.getElementById('description');

        const firstTenPosts = posts.filter(post => {
            return post.id <= 10;
        });

        firstTenPosts.forEach(post => {
            myPost.innerHTML += `<h1>${post.title}</h1> <p>${post.body}</p>`;
        });
    });
