const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Verbunden zum MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59ca6bea38b36754b99909b8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos: ', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos: ', err)
  // });

  db.collection('Users').find({name: 'julia'}).count().then((count) => {
    console.log('Users count: ', count);
  }, (err) => {
    console.log('Unable to fetch todos: ', err)
  });

  db.close();
});
