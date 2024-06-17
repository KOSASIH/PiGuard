// AnalyticsManager.js
const NodeAnalyzer = require('./NodeAnalyzer');

class AnalyticsManager {
  constructor() {
    this.analyzers = {};
  }

  getAnalyzerForNode(node) {
    if (!this.analyzers[node.id]) {
      this.analyzers[node.id] = new NodeAnalyzer(node);
    }
    return this.analyzers[node.id];
  }
}

module.exports = AnalyticsManager;
