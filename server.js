// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const path = require("path");
// Tells node that we are creating an "express" server
const app = express();
// Sets an initial port.
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
