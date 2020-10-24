let Snippets = require('../models/snippets')
let Users = require('../models/users')
let Languages = require('../models/languages')

function index(req, res) {



    Users.find({}, function (err, language) {

        Snippets.find({


        }, function (err, snippet) {

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

// function addSnip(req, res) {
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key]
//     };
//     if (req.body.tags) req.body.tags = req.body.tags.split(' ');
//     const snip = new Snippets(req.body)
//     console.log("hshshsh", req.body)
//     req.tags.push(req.body)
//     snip.save(function (err) {
//         if (err) return res.render('snippets/index')
//         res.redirect('/snippets')
//     })
// }

// function addSnip(req, res) {
//     console.log("hello")
//     Snippets.findById(req.params.id, function (err, snippet) {
//         Users.find({}, function (err, user) {
//             res.render('snippets/index', {
//                 user: user,

//             })
//         })

//     })

// // }

function addSnip(req, res) {
    console.log(req.body)
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    };
    if (req.body.tags) req.body.tags = req.body.tags.split(' ');
    const snip = new Snippets({
        google: req.user.googleId
    })

    snip.categories.push(req.body)

    console.log("snip", snip)
    snip.save(function (err) {
        if (err) return res.render('snippets/index')
        res.redirect('/snippets')
    })
}
// function deleteSnip(req, res) {
//     console.log(req.params.id)
//     Snippets.deleteOne(req.params.id)
//     res.redirect('/snippets')
// }

function deleteSnip(req, res) {
    console.log(req.params.id)
    Snippets.deleteOne({
        _id: req.params.id
    }, (error) => {
        if (!error) {
            console.log("did this delete?")
            res.redirect('/snippets')
        }
    })

}


// function addSnip(req, res) {
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key]
//     };
//     if (req.body.tags) req.body.tags = req.body.tags.split(' ');
//     Users.findById(req.params.id, function (err, flight) {
//         Ticket.find({
//             flight: flights._id
//         }, function (err, tickets) {
//             res.render('flights/ticket', {
//                 flight: flight,
//                 tickets: tickets
//             })
//         })

//     })
// }




module.exports = {
    index,
    addSnip,
    deleteSnip
}


// function addSnip(req, res) {
//     const snip = new Snippets(req.body)
//     Users.find({}, function (err, user) {
//         Snippets.find({}, function (err, tickets) {
//             let googleId = user[0].googleId
//             console.log("user", user[0].googleId, "snippet", tickets)
//             console.log(req.params)
//             snip.google.push(googleId)
//             snip.save(function (err) {
//                 if (err) return res.render('snippets/index')
//                 res.redirect('/snippets')
//             })
//         })
// //     })
// }