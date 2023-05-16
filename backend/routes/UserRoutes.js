const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controller/UserController');
const {protect} =require('../middleware/authMiddlewere')
router.post('/', registerUser);

router.post('/login', loginUser);
router.get('/me',protect, getMe)
module.exports = router;
