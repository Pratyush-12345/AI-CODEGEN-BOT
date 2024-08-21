const express = require('express');
const router = express.Router();
const { generateCode } = require('../controllers/codeController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/generate', protect, generateCode);

module.exports = router;
