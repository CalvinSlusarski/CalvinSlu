var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(path.resolve(__dirname + '/public/main/unity/unity.html'));
});

module.exports = router;
