let Snippets = require('../models/snippets')

function searchIndex(req, res) {
    let userId = req.user.googleId
    let search = new RegExp(req.query.search) //Creates a pattern so the $regex will be able to use it
    Snippets.find({
        google: userId
    }, function (err, menu) {
        Snippets.find({
            google: userId,
            "name": {
                $regex: search, //User input 
                $options: 'i', //Option 'i" Case insensitivity to match upper and lower cases.
            }
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

function tagIndex(req, res) {
    let userId = req.user.googleId
    let tagName = req.params.tags
    Snippets.find({
        google: userId
    }, function (err, menu) {

        Snippets.find({
            categories: tagName,
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

module.exports = {
    searchIndex,
    tagIndex
}