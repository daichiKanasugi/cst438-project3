const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },

  email : {
    type: String,
    required: true,
    min: 6, 
    max: 255
  },

  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3 
  }
});

const Login = mongoose.model('Account', account);

module.exports = Login;