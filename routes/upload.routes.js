const router = require("express").Router();
const multer = require("multer");

router.get("/", (req, res) => {
  res.status(200).send("hello upload");
});

router.post("/", (req, res) => {
  const storage = multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, "public/Images");
    },
    filename: (_, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  const upload = multer({ storage }).single("file");

  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.status(201).json({ filename: req.file.filename });
    }
  });
});

module.exports = router;
