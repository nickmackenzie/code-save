let Snippets = require('../models/snippets')
let Users = require('../models/users')
let Languages = require('../models/languages')



function searchIndex(req, res) {
    let userId = req.user.googleId
    let search = new RegExp(req.query.search)
    Snippets.find({
        google: userId
    }, function (err, menu) {
        Snippets.find({
            google: userId,
            "name": {
                $regex: search,
                $options: 'i',
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
    console.log("body", req.params.tags)
    let tagName = req.params.tags

    Snippets.find({
        google: userId
    }, function (err, menu) {

        Snippets.find({
            categories: tagName

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