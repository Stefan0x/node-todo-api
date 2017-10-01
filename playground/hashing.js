const crypto = require('crypto');
const jwt = require('jsonwebtoken'); //https://jwt.io/

var data = {
  id: 33
};

var token = jwt.sign(data, 'I looove Pizza');
console.log(token);

var decoded = jwt.verify(token, 'I looove Pizza');
console.log(decoded);



/// ******** Nachfolgend der ähnliche Code ohne jwt Modul in langer form *** ///

// var password = '123456';
// var hash = crypto
//   .createHash('sha256')
//   .update(password)
//   .update('I looove Pizza') // Secret Salt
//   .digest('hex');
//
// console.log('password: ', password);
// console.log('Hash: ', hash);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: crypto
//     .createHash('sha256')
//     .update(JSON.stringify(data))
//     .update('I looove Pizza')
//     .digest('hex')
// }
//
// console.log('Token hash: ',token.hash);
//
// var resultHash = crypto
//   .createHash('sha256')
//   .update(JSON.stringify(token.data))
//   .update('I looove Pizza')
//   .digest('hex');
//
// console.log('Result hash: ',resultHash);
// console.log('*********');
//
// // JSON Web token
// if (resultHash === token.hash) {
//   console.log('Data was not changed by a hacker');
// } else {
//   console.log('Data was changed by a hacker!');
// }
