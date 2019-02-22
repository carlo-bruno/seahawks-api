const express = require("express");
const app = express();

const port = 3000;

// show all
app.get("/widgets", (req, res) => {
  //
});

// create new
app.post("/widgets", (req, res) => {
  //
});

// show one
app.get("/widgets/:id", (req, res) => {
  //
});

//delete
app.delete("/widgets/:id", (req, res) => {
  //
});

// update
app.put("/widgets/:id", (req, res) => {
  //
});

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
