const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => { res.send(`<h1> Welcome to my website </h1>`);})
app.get('/about', (req, res) => { res.send ({name: 'Maria'});});
app.get('/help', (req, res) => { res.send ('<p> Sorry, no help for you today ^_^ </p>');});
app.get('/enter', (req, res) => { res.send (`<p> Drinks and refreshements are on the table to the left </p>`);});

app.listen(port, () => { console.log(`Server is up on port ${3000}`) })
