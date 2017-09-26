var mongoose = require('mongoose');

// Tell mongoose that it should use the built-in promise libriary
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

module.exports = {mongoose};
