const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  sticky: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    unique: true,
    required: true
  },
  catagory: {
    type: String,
    required: true
  },
  tag: {
    type: Array,
    required: true
  },
  hits: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
