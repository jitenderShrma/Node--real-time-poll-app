const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
.connect('mongodb://jitender:jitender1@ds121588.mlab.com:21588/storybook',{useNewUrlParser:true})
.then(()=> console.log('connect to db...'))
.catch(err => console.log(err));
