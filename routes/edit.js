var express = require("express");
var router = express.Router();

var editCntrl = require("../controllers/edit");

router.get("/:id", editCntrl.editIndex);

router.post("/:id", editCntrl.submitEdit);

module.exports = router;
