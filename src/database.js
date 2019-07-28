const mongoose = require('mongoose');
const URI = 'mongodb://localhost/octopus';

mongoose.connect(URI,{useNewUrlParser: true})
    .then(db => console.log("db conected"))
    .catch(err => console.error(err));

module.exports = mongoose;