// Node.js
const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ipAddress: {
    type: String,
    required: true
  },
  port: {
    type: Number,
    required: true
  },
  reputation: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Node', nodeSchema);
