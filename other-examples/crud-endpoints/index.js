const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

let port = 3000;
let server;

/**
 * Set headers for CORS
 */
app.use((req, res, next) => {
  // this can cause an error when 'withCredentials' is set to true.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/**
 * Use the body parser to get content out of POST, PUT, UPDATE, and DELETE reqs
 */
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

/**
 * These are the basic crud operations:
 */
app.get('/get', (req, res) => {
  res.send({ msg: 'Response from get route'});
});

app.post('/post', (req, res) => {
  const data = req.body;
  res.send(data);
});

app.put('/put/:id', (req, res) => {
  const data = req.params.id;
  res.send(data);
});

app.delete('/delete/:id', (req, res) => {
  const data = req.params.id;
  res.send(data);
});


/**
 * Serve static content
 */
app.use('/', express.static('public'));


/**
 * We start the server in a function, incase we need to call it again
 */
function startServer () {
  // Close the server if it is running
  if (server && server.close && app.address()) {
    server.close();
  }
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

};

startServer();
