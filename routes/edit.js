var express = require('express');
var router = express.Router();
var snipCntrl = require('../controllers/snippets')
var methodOverride = require('method-override')
const axios = require('axios');


/* GET users listing. */
// router.get('/:id', function (req, res, next) {
//     res.send('hello');
// });


async function makeGetRequest() {

    let res = await axios.get('http://localhost:3000/edit/:id');

    let data = res.data;
    console.log(data);
}

makeGetRequest();
module.exports = router;