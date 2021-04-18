//DEPENDENCIES
const router = require("express").Router();
const fs = require("fs");
const { nanoid } = require("nanoid");

// GET
router.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
    res.json(JSON.parse(data));
  });
});

// POST
router.post("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    let note = req.body;
    note.id = nanoid();
    notes.push(note);
    // parse than push and add ID to new notes
    // console.log(data);
    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) throw err;
      // possibly change notes to req.body
      res.json(notes);
    });
  });
});

// DELETE

module.exports = router;
