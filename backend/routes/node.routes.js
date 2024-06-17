const express = require('express');
const router = express.Router();
const Node = require('../models/Node');

// Get all nodes
router.get('/', async (req, res) => {
  try {
    const nodes = await Node.find().exec();
    res.json(nodes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching nodes' });
  }
});

// Create a new node
router.post('/', async (req, res) => {
  try {
    const node = new Node(req.body);
    await node.save();
    res.json(node);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating node' });
  }
});

module.exports = router;
