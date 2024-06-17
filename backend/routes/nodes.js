// nodes.js
const express = require('express');
const router = express.Router();
const Node = require('../models/Node');

// GET /nodes
router.get('/', async (req, res) => {
  const nodes = await Node.find().exec();
  res.json(nodes);
});

// GET /nodes/:id
router.get('/:id', async (req, res) => {
  const node = await Node.findById(req.params.id).exec();
  if (!node) {
    res.status(404).json({ error: 'Node not found' });
  } else {
    res.json(node);
  }
});

// POST /nodes
router.post('/', async (req, res) => {
  const node = new Node(req.body);
  try {
    await node.save();
    res.json(node);
  } catch (err) {
    res.status(400).json({ error: 'Invalid node data' });
  }
});

// PUT /nodes/:id
router.put('/:id', async (req, res) => {
  const node = await Node.findById(req.params.id).exec();
  if (!node) {
    res.status(404).json({ error: 'Node not found' });
  } else {
    node.name = req.body.name;
    node.ipAddress = req.body.ipAddress;
    node.port = req.body.port;
    try {
      await node.save();
      res.json(node);
    } catch (err) {
      res.status(400).json({ error: 'Invalid node data' });
    }
  }
});

// DELETE /nodes/:id
router.delete('/:id', async (req, res) => {
  await Node.findByIdAndRemove(req.params.id).exec();
  res.json({ message: 'Node deleted' });
});

module.exports = router;
