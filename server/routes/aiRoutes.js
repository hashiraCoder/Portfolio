const express = require('express');
const router = express.Router();
const { analyzeJobDescription } = require('../controllers/aiController');

// POST /api/ai/analyze
router.post('/analyze', analyzeJobDescription);

module.exports = router;