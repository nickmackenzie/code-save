var express = require('express');
var router = express.Router();

const Snippets = require('../models/snippets');

router.get('/:id', function (req, res, next) {
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
                res.redirect('error')
            } else {
                res.redirect('../snippets/')
            }
        })
})

module.exports = router;