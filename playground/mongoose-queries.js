const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59cb4d204fcf7a66bb6183af';
var userId = '59ca99073141566211eb954a';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

if (!ObjectID.isValid(userId)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  // return arrayn with objects
  console.log('Todos: ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  // returns object
  console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  // returns object
  console.log('Todo by Id: ', todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    // Stop function and return
    return console.log('Id not found');
  }
  // returns object
  console.log('User by Id: ', user);
}, (e) => {
  console.log(e);
});

// => More in the docs:
// http://mongoosejs.com/docs/guide.html
