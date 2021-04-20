var fs = require('fs');
const fetch = require('node-fetch');
fs.access('result/', (err) => {
    if (err) throw err
    console.log('The folder exists');
})
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
        console.log("Users in the array:");
        const wite= fs.writeFile('result/posts.json', JSON.stringify(json), function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
        console.log(json);
        
})
