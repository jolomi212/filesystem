var fs = require('fs');
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        console.log("Users in the array:");
        const wite= fs.writeFile('result/posts.json', JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
        console.log(json);
        
})