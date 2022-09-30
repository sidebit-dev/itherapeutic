const express = require('express');
const path = require('path');
const cors = require('cors');

// Solve CORS
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
// const mysql = require('./db/conn')

// Public folder for images
// app.use(express.static('public'))

const port = 5000;



const app = express();

// config JSON form-data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.listen(5000);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
