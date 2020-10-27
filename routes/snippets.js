var express = require('express');
var router = express.Router();
var snipCntrl = require('../controllers/snippets')
var methodOverride = require('method-override')
const axios = require('axios');


/* GET users listing. */
router.get('/edit', function (req, res, next) {
    res.send('hello');
});

router.post('/', snipCntrl.addSnip)

router.get('/', snipCntrl.index);

router.delete('/:id', snipCntrl.deleteSnip)

router.get('/:language', snipCntrl.languageIndex)





module.exports = router;