var express = require('express');
var router = express.Router();
var snipCntrl = require('../controllers/snippets')

router.post('/', snipCntrl.addSnip)
router.get('/', snipCntrl.index);
router.delete('/:id', snipCntrl.deleteSnip)
router.get('/:language', snipCntrl.languageIndex)

module.exports = router;