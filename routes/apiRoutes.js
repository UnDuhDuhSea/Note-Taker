//DEPENDENCIES
const router = require("express").Router();
const fs = require("fs");

router.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
    res.json(JSON.parse(data));
  });
});

router.post("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    // parse than push and add ID to new notes
    // console.log(data);
    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) throw err;
      // possibly change notes to req.body
      res.json(notes);
    });
  });
});

module.exports = router;
