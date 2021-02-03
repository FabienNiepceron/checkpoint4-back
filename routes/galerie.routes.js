const router = require("express").Router();
const connection = require("../db_connection");

router.get("/", (_, res) => {
  const sql = "SELECT name, titre, image FROM galerie";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  const { name, titre, image } = req.body;
  const sql = "INSERT INTO galerie (name, titre, image) VALUES (?, ?, ?)";
  connection.query(sql, [name, titre, image], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
