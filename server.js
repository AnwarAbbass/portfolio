'use strict';

const express = require('express');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));



server.get('/test',(request,response)=>{
    response.send('You server is alive!!')
})



server.listen (PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})