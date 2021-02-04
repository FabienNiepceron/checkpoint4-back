const router = require("express").Router();
const connection = require("../db_connection");

router.get("/", (_, res) => {
  const sql = "SELECT idtresorie, type, valeur FROM tresorie";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  const tresorerie = req.body;
  const sql = "INSERT INTO tresorie (name, type, valeur) VALUES (?, ?, ?)";
  const { name, type, valeur } = tresorerie;
  connection.query(sql, [name, type, valeur], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

router.put("/", (req, res) => {
  const tresorerie = req.body;
  // const { id } = req.params;
  const sql = `UPDATE tresorie SET ? WHERE idtresorie = ?`;
  connection.query(sql, [tresorerie, req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
