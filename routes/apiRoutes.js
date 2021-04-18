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
    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) throw err;
      res.json(notes);
    });
  });
});

// DELETE
// router.delete("/api/notes/:id", function (req, res) {
//   fs.readFile("./db/db.json", "utf8", function (err, data) {
//     if (err) throw err;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].id == req.params.id) {
//         // Splice takes i position, and then deletes the 1 note.
//         data.splice(i, 1);
//         break;
//       }
//     }
//     fs.writeFile("./db/db.json", JSON.stringify(data), function (err) {
//       if (err) throw err;
//       res.json(data);
//     });
//   });
// });

module.exports = router;
