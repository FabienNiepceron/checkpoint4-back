const router = require("express").Router();
const connection = require("../db_connection");

router.get("/", (_, res) => {
  const sql = "SELECT name, montant FROM billeterie";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  const { name, montant } = req.body;
  const sql = "INSERT INTO billeterie (name, montant) VALUES (?, ?)";
  connection.query(sql, [name, montant], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
