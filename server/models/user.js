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

//添加管理员
userModel.findOne({ 'id': 1}).exec(function(err, user) {
  if(!user)
    userModel.create({
      'id': 1,
      'name': Util.name,
      'password': Util.password,
      'authority': 1
    });
})

module.exports = userModel;










