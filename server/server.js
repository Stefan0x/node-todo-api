//Libriary Imports
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

// Local Imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// Middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validate id using isValid
  if (!ObjectID.isValid(id)) {
    // if not -> 404 send back empty body
    return res.status(404).send();
  }

  // find by id
  Todo.findById(id).then((todo) => {
    if (!todo) {
      // if no todo - send back 404 with empty body
      return res.status(404).send();
    }
    // Happypath
    // success if todo - send it back
    res.status(200).send({todo});
  }, (e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Todo App started on Port 3000');
});

module.exports = {app};
