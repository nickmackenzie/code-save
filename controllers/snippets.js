let Snippets = require('../models/snippets')
let Users = require('../models/users')
let Languages = require('../models/languages')



function addSnip(req, res) {
    console.log(req.body)
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    };
    if (req.body.tags) req.body.tags = req.body.tags.split(' ');
    console.log(req.body)
    const snip = new Snippets({
        google: req.user.googleId,
        snippet: req.body.snippet,
        name: req.body.name,
        language: req.body.language,
        categories: req.body
    })
    let catArray = req.body
    console.log("heyheyehey", snip)
    Snippets.findById({
        id: snip._id
    }).populate('categories').exec((err, posts) => {
        console.log("Populated User " + posts);
    })
    snip.save(function (err) {
        if (err) return res.render('snippets/index')
        res.redirect('/snippets')
    })
}

function index(req, res) {
    console.log(req.params.language)
    let x = req.params.language
    Snippets.find({}, function (err, menu) {
        Snippets.find({}, function (err, snip) {
            console.log("menu", menu)
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

// function index(req, res) {
//     Snippets.find({}, function (err, menu) {
//         res.render('snippets/index', {
//             menu,
//             user: req.user,
//             name: req.query.name,
//             googleId: req.query.googleId
//         })
//     })
// }
// function index(req, res) {
//     console.log(req.params.language)
//     let x = req.params.language
//     Snippets({}, function (err, panel) {
//         return panel
//     })
//     Snippets.find({
//         language: req.params.language
//     }, function (err, snip) {
//         res.render('snippets/index', {
//             snip,
//             user: req.user,
//             name: req.query.name,
//             googleId: req.query.googleId

//         })
//     })
// }

function languageIndex(req, res) {
    console.log(req.params.language)
    let x = req.params.language
    Snippets.find({}, function (err, menu) {

        Snippets.find({
            language: req.params.language
        }, function (err, snip) {
            console.log("menu", menu)
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

function editSnip(req, res) {
    res.render('index', {
        title: 'Express'
    });
}
// function index(req, res) {
//     console.log(typeof req.user)
//     const x = new Promise(function (resolve, reject) {
//         let ida = req.user.googleId
//         resolve(ida)
//     })
//     x.then(function (result) {
//         Snippets.find({
//             google: result
//         }, function (err, snippet) {
//             console.log("this snippet", snippet)
//             res.render('snippets/index', {
//                 snippet,
//                 user: req.user,
//                 name: req.query.name,
//                 googleId: req.query.googleId
//             })
//         })
//     })



// }


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


// function deleteSnip(req, res) {
//     console.log(req.params.id)
//     Snippets.deleteOne(req.params.id)
//     res.redirect('/snippets')
// }

function deleteSnip(req, res) {

    Snippets.findOne({
        _id: req.params.id
    }, function (err, lan) {
        res.redirect(`/snippets/${lan.language}`)
    })
    Snippets.deleteOne({
        _id: req.params.id
    }, (error) => {
        if (error) {
            res.redirect('/snippets/')
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
    deleteSnip,
    languageIndex,
    editSnip
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