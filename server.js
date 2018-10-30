const express = require('express');
const bodyParser = require('body-parser'); //middleware
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const app = express();

mongoose  //connect to the db synchronously
    .connect(db)
    .then(() => console.log("mongoDB connected"))
    .catch(err =>console.log(err))
    
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json())

const users = require('./routes/api/users');

app.use('api/users', users);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("You are listening on port" + port)
});

app.get('/', (req, res) => res.send(`<h1>Hello</h1>`))
