const express = require("express");
const app = express();

const dbURI =
  "mongodb+srv://codebreed:<password>@cluster0.9xo7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = 5000;
app.listen(port, () => {
  console.log("listening on", port);
});

app.get("/", (req, res) => {
  res.send("hello from pluggily api");
});
