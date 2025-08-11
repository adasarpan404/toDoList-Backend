const express = require('express');
const { protect } = require('../middleware/auth');
const authRouter = require('./auth');
const taskRouter = require('./tasks');
const router = express.Router();

router.use('/auth', authRouter);
router.use(protect);
router.use('/tasks', taskRouter);
module.exports = router;