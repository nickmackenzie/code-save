var express = require('express');
var router = express.Router();
var searchCntrl = require('../controllers/search')



router.get('/', searchCntrl.searchIndex);

router.get('/:tags', searchCntrl.tagIndex)

module.exports = router;