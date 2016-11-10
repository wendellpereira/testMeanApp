var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlUser = require('../controllers/user');

/* GET home page. */
router.get('/', ctrlMain.index);

/* User pages */
router.get('/user',ctrlUser.wellcome);
router.get('/user/signup',ctrlUser.signup);
router.get('/user/login',ctrlUser.login);


module.exports = router;
