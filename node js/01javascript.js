const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>display</title>
      <style>
          body{
              background-color: bisque;
          }
          img{
              width: 60px;
              height: 60px;
              margin: auto;
              padding: 4px;
              display: block;
          }
          header{
              /* border: 4px solid black; */
              width: 1000px;
              margin: 10px auto;
          }
          h2{
              text-align: center;
          }
          .first{
              background-color: gray;
              border: 4px solid blue;
              box-sizing: border-box;
              padding: 10px;
              width: 33%;
              display:inline-block
          }
      </style>
  </head>
  <body>
      <header>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5bmL7qz0kQhYeRcXpTWPAMohYQqZTEUa1w&usqp=CAU" alt="image">
          <h2>this is about display</h2>
      </header>
      <div class="first">Lorem ipsum dolor <span style="color: red;">sitdsafvcccv</span>  amet consectetur adipisicing elit. Porro, pariatur? Dolore, nemo cum. Natus temporibus aut distinctio facilis qui esse aliquid beatae commodi corrupti rem ipsum nobis voluptate reprehenderit id a autem recusandae, ex alias, cupiditate provident ullam explicabo nam?
      </div>
      <div class="first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, pariatur? Dolore, nemo cum. Natus temporibus aut distinctio facilis qui esse aliquid beatae commodi corrupti rem ipsum nobis voluptate reprehenderit id a autem recusandae, ex alias, cupiditate provident ullam explicabo nam?
      </div>
      <div class="first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, pariatur? Dolore, nemo cum. Natus temporibus aut distinctio facilis qui esse aliquid beatae commodi corrupti rem ipsum nobis voluptate reprehenderit id a autem recusandae, ex alias, cupiditate provident ullam explicabo nam?
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
