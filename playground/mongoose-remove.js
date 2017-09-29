const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove({})

Todo.findByIdAndRemove('59cba417bed9681118abd94b').then((todo) => {
  console.log(todo);
});
