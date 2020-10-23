let Snippets = require('../models/snippets')
let Users = require('../models/users')
let Languages = require('../models/languages')

function index(req, res) {
    Users.find({}, function (err, language) {
        Snippets.find({}, function (err, snippet) {
            res.render('snippets/index', {
                language,
                snippet,
                user: req.user,
                name: req.query.name,
                googleId: req.query.googleId
            })
        })

    })
}


// function index(req, res) {
//     Snippets.findById(req.params.id)
//         .populate('google').exec(function (err, user) {
//             // Performer.find({}).where('_id').nin(movie.cast) <-- Mongoose query builder
//             // Native MongoDB approach 
//             Users.find({
//                 },
//                 function (err, documents) {
//                     res.render('snippets/index', {
//                         user,
//                         documents
//                     });
//                 }
//             );
//         });
// }

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

// function addSnip(req, res) {
//     console.log("hello")
//     Snippets.findById(req.params.id, function (err, snippet) {
//         Users.find({}, function (err, user) {
//             res.render('snippets/index', {
//                 user: user,

//             })
//         })

//     })

// }

function addSnip(req, res) {


    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    };
    if (req.body.tags) req.body.tags = req.body.tags.split(' ');
    Users.find({}, function (err, users) {
        console.log("something", users)
        users
    })

    const snip = new Snippets(req.body)

    console.log("hello", req.query.name)

    snip.google.push(req.user)
    snip.save(function (err) {
        if (err) return res.render('snippets/index')
        res.redirect('/snippets')
    })
}





module.exports = {
    index,
    addSnip
}