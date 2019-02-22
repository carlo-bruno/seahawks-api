const express = require("express");
const db = require("./models");
const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("/players");
});

// show all
app.get("/players", (req, res) => {
  db.player.findAll().then(players => {
    res.json(players);
  });
});

// create new
app.post("/players", (req, res) => {
  db.player
    .findOrCreate({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        position: req.body.position
      }
    })
    .spread((player, created) => {
      res.redirect("/players");
    });
});

// show one
app.get("/players/:id", (req, res) => {
  let id = req.params.id;
  db.player.findById(id).then(player => {
    res.json(player);
  });
});

//delete
app.delete("/players/:id", (req, res) => {
  db.player
    .destroy({
      where: { id: req.params.id }
    })
    .then(() => {
      res.redirect("/players");
    });
});

// update
app.put("/players/:id", (req, res) => {
  db.player
    .update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        position: req.body.position
      },
      {
        where: { id: req.params.id }
      }
    )
    .then(() => {
      res.redirect("/players/" + req.params.id);
    });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
