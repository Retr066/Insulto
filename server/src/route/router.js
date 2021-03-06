const { Router } = require("express");
const multer = require("multer");
const router = Router();
const path = require("path");
//midlewares mutler el que procesa la img por nosotros
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const minetype = filetypes.test(file.minetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (minetype && extname) {
      cb(null, true);
    } else {
      cb(null, false);
    }
    cb(
      new Error(
        `Solo se adminten imagenes con algunas de estas extensiones ${filetypes}`
      )
    );
  },
});
const upload = multer({ storage: storage }).array("image", [8]);

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/upload", upload, (req, res) => {
  console.log(req.files);

  res.send("subido");
});

module.exports = router;
