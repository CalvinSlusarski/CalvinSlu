var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.sendfile('site\wwwroot\bin\public\main\index.html');
});

module.exports = router;
