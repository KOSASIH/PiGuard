// MonitoringManager.js
const NodeMonitor = require('./NodeMonitor');

class MonitoringManager {
  constructor() {
    this.monitors = {};
  }

  getMonitorForNode(node) {
    if (!this.monitors[node.id]) {
      this.monitors[node.id] = new NodeMonitor(node);
    }
    return this.monitors[node.id];
  }
}

module.exports = MonitoringManager;
