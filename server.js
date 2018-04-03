const express = require("express");

// Create a new instance of express
const app = express();

// When we run the app on a server, we might want to set the port number through
// an environment variable otherwise it will be `1337`
const PORT = process.env.PORT || 1337;

// Here we're just making sure that if a user tries to access the app through
// a secure protocol, we're redirecting to http://
app.use(
  (req, res, next) =>
    req.headers["x-forward-proto"] === "https"
      ? res.redirect(`http://${req.hostname}${req.url}`)
      : next()
);

// Setup our public directory
app.use(express.static("public"));

// Start the app and listen on port process.env.PORT || 1337
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
