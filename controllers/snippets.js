let Snippets = require('../models/snippets')

function index(req, res) {
    let userId = req.user.googleId
    Snippets.find({
        google: userId
    }, function (err, menu) {
        Snippets.find({
            google: userId
        }, function (err, snip) {
            if (err) {
                res.redirect("index")
            }
            res.render('snippets/index', {
                snip,
                user: req.user,
                name: req.query.name,
                googleId: req.query.googleId,
                menu: menu
            })
        })
    })
}

function languageIndex(req, res) {
    let x = req.params.language
    let userId = req.user.googleId
    Snippets.find({
        google: userId
    }, function (err, menu) {
        Snippets.find({
            language: req.params.language,
            google: userId
        }, function (err, snip) {
            res.render('snippets/index', {
                snip,
                user: req.user,
                name: req.query.name,
                googleId: req.query.googleId,
                menu: menu
            })
        })
    })
}

function addSnip(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    };
    if (req.body.categories) req.body.categories = req.body.categories.split(" ")

    const snip = new Snippets({
        google: req.user.googleId,
        snippet: req.body.snippet,
        name: req.body.name,
        language: req.body.language,
        categories: req.body.categories
    })
    snip.save(function (err) {
        if (err) return res.render('snippets/index')
        res.redirect('/snippets')
    })
}

function deleteSnip(req, res) {
    if (language = null) return res.redirect('/snippets/')
    Snippets.findOne({
        _id: req.params.id
    }, function (err, lan) {
        res.redirect('/snippets/')
    })
    Snippets.deleteOne({
        _id: req.params.id
    }, (error) => {
        if (error) {
            res.redirect('/snippets/')
        }
    })
}

module.exports = {
    index,
    addSnip,
    deleteSnip,
    languageIndex
}