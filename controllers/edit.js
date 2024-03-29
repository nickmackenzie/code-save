let Snippets = require("../models/snippets");

function editIndex(req, res, next) {
  Snippets.find({}, function (err, menu) {
    Snippets.findById(req.params.id, function (err, edit) {
      res.render("snippets/edit", {
        user: req.user,
        edit,
        menu,
      });
    });
  });
}

function submitEdit(req, res, next) {
  console.log("body", req.body);
  Snippets.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      snippet: req.body.snippet,
      categories: req.body.categories,
    },
    function (err, docs) {
      if (err) {
        res.redirect("error");
      } else {
        res.redirect("../snippets/");
      }
    }
  );
}

module.exports = {
  editIndex,
  submitEdit,
};
