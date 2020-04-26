const express = require('express')
const bodyParser = require('body-parser')
const { getData, saveData } = require('./src/basic-crud')
const server = express()

// request mappings
server.get('/', getData);
server.post('/save', saveData);

// specify the port
server.use(bodyParser.json())
server.listen(8000, () => {
    console.log('Server started!')
})
