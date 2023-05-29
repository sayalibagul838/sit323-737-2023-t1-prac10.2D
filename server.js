
'use strict';
var express = require('express')

var app = express()
app.use(express.static(__dirname))

var messages = [
    {name: 'Sayali', message: 'HI'},
    {name: 'JAne', message: 'HEllo'}
]
app.get('/', (req,res) => {
    res.send(messages)
})

app.post('/messages', (req,res) => {
    console.log(req.body)
    res.sendStatus(200)
})

const PORT = 8080;
const HOST = '0.0.0.0';


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

