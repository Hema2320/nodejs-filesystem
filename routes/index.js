var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/time', function(req, res, next) {
  res.render('Timestamp');
});


module.exports = router;
