const router = require("express").Router();
const connection = require("../db_connection");

router.get("/", (_, res) => {
  const sql = "SELECT name, email, mdp FROM admin";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  const login = req.body;
  const sql = "INSERT INTO admin (name, email, mdp) VALUES (?, ?, ?)";
  const { name, email, mdp } = login;
  connection.query(sql, [name, email, mdp], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
