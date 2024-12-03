const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin_controller')

router.get('/', controller.getHome)

// Export the router
module.exports = router;
