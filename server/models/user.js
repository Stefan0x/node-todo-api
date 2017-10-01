const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      // http://mongoosejs.com/docs/validation.html#async-custom-validators
      isAsync: false
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    // MongoDB function (not available in SQL)
    access: {
      type: String,
      required: true
    },
    token:{
      type: String,
      required: true
    }
  }]
});

// Update the Mongoose user-method
UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

// generateAuthToken ist eine eigene Method
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt
    .sign({_id: user._id.toHexString(), access}, 'I looove Pizza')
    .toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, 'I looove Pizza');
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });

};

var User = mongoose.model('User', UserSchema);

module.exports = {User};
