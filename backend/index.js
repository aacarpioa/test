var express = require('express');
var app =  express();
var bodyParser = require('body-parser');
var cors = require('cors');
const PORT = process.env.PORT || 8000

const ruta = require('./ruta');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/transaction', ruta);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:`)
})