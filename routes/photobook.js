var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/photobook', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendfile('photobook.html');
});

module.exports = router;
