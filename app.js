const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Pusher = require('pusher');

// db
require('./config/db');
// require route
const poll = require('./routes/poll');

// initialize point
const app = express();

// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// cors middleware
app.use(cors());
// static path
app.use(express.static(path.join(__dirname,'./public')));

// route use
app.use('/poll',poll);
// port
const port = 3000;

// listen to server
app.listen(3000,()=>console.log(`server listen at port ${port}...`));