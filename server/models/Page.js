const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const pageSchema = new Schema({
  pageName: {
    type: String,
    required: true,
    min: 1,
    max: 30,
    trim: true,
  },
  pageTitle: {
    type: String,
    required: true,
    trim: true,
  },
  pageText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Page = model('Page', pageSchema);

module.exports = Page;
