const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 8088;

app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
