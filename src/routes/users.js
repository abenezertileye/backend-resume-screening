const express = require('express');
const router = express.Router();

// GET home page.
router.get("/", function (req, res) {
  res.send("hello from users page");
});

// Export the router
module.exports = router;
