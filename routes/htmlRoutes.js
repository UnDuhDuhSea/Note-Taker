//DEPENDENCIES
const router = require("express").Router();
const path = require("path");

//ROUTING

// module.exports = (app) => {
// => HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "notes.html"));
});
// If no matching route is found default to home
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// };
module.exports = router;
