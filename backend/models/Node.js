// Node.js
const mongoose = require('mongoose');
const reputationCalculator = require('../utils/reputationCalculator');

const nodeSchema = new mongoose.Schema({
  // ...
  reputation: {
    type: Number,
    default: 0
  }
});

nodeSchema.methods.updateReputation = function() {
  this.reputation = reputationCalculator(this);
  return this.save();
};

module.exports = mongoose.model('Node', nodeSchema);
