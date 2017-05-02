'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  			
  res.send('Por si se queria el hola mundo, aqui esta jejeje\n');
});



app.listen(PORT);
console.log('Running on http://localhost:' + PORT);