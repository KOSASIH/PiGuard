// app.js
const express = require('express');
const app = express();
const nodesRouter = require('./routes/nodes');

app.use(express.json());
app.use('/nodes', nodesRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
