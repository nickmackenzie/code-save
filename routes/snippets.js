var express = require('express');
var router = express.Router();
var snipCntrl = require('../controllers/snippets')

/* GET users listing. */

router.post('/', snipCntrl.addSnip)

router.get('/', snipCntrl.index);





module.exports = router;