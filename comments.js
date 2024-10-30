// Create web server with Express
const express = require('express');
const app = express();
const port = 3000;

// Load the comments module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a single comment by