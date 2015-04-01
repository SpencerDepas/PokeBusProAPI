var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/spencer', function(req, res) {
  res.send("Hi there Spencer!!");
});

module.exports = router;
