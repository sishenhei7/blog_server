const mongoose = require('mongoose');
const Util = require('./../../config/util');

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  authority: {
    type: Number,
    default: 0
  }
});

const userModel = mongoose.model('UserYZ', UserSchema);

module.exports = userModel;










