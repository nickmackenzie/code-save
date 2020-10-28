var express = require('express');
var router = express.Router();
var snipCntrl = require('../controllers/snippets')
var methodOverride = require('method-override')
const axios = require('axios');
const Snippets = require('../models/snippets');
const {
    route
} = require('.');


/* GET users listing. */
router.get('/:id', function (req, res, next) {
    console.log(req.params.id)
    let para = req.params
    Snippets.find({}, function (err, menu) {
        Snippets.findById(req.params.id,
            function (err, edit) {

                res.render('snippets/edit', {
                    user: req.user,
                    edit,
                    menu
                })
            })
    })
})

router.post('/:id', function (req, res, next) {
    Snippets.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            snippet: req.body.snippet,
        },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                res.redirect('../snippets/')

            }
        })
})









module.exports = router;