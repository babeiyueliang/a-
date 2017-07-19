var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
   res.render('admin', { title: '百度新闻后台管理' });
});


module.exports = router;
