// ES6 object destructuring
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// ES6 object destructuring
// var user = {name: 'Stefan', age: 33};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Verbunden zum MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo: ', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   fullName: 'Stefan Euchenhofer',
  //   name: 'euchenhofer',
  //   age: 33,
  //   location: '79859 Schluchsee'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert user: ', err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  db.close();
});
