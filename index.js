const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const port = process.env.PORT || 3001;

app.use('/api', api);

app.use(express.static('public'));

// GET Route for notes  static page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// GET Route for index 
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});