let Snippets = require('../models/snippets')

function index(req, res) {
    Snippets.find({}, function (err, language) {
        res.render('snippets/index', {
            language
        })
    })
}

function addSnip(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    };
    if (req.body.tags) req.body.tags = req.body.tags.split(' ');
    const snip = new Snippets(req.body)
    snip.save(function (err) {
        if (err) return res.render('snippets/index')
        res.redirect('/snippets')
    })
}


module.exports = {
    index,
    addSnip
}