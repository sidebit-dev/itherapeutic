require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

// const mysql = require('./db/conn')

// Public folder for images
// app.use(express.static('public'))

const port = process.env.PORT;

const app = express();

// config JSON form-data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Upload diretory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// DB connection
require('./config/db.js');

// router
const router = require('./routes/Router.js');
app.use(router);

// app.listen(5000);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
