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
    cb(null, Date.now() + "-" + file.originalname.toLowerCase());
  },
});

function fileFilter(req, file, cb) {
  /* let valor = /jpeg|jpg|png|gif|svg/;
  const uperTypes = valor.toLocaleUpperCase();
  const filetypes = valor.concat(uperTypes); */
  const filetypes = /jpeg|jpg|png|gif|svg|JPEG|JPG|PNG|GIF|SVG/;
  /*  console.log(filetypes); */
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname));
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(
    new Error(
      `Solo se adminten imagenes con algunas de estas extensiones ${filetypes}`
    )
  );
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5000000 },
}).array("image", [8]);

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("MulterError", err);
      return res.send({
        error: "El tamaño de la imagen debe ser menor a 3 megas",
      });
    } else if (err) {
      console.log("UnhandledError", err);
      return res.send({
        error:
          "Solo se adminten imagenes con algunas de estas extensiones /jpeg|jpg|png|gif",
      });
    }
    if (err) {
      return res.sendStatus(403);
    }
    console.log("Se subio correctamente", req.files);
    res.sendStatus(200);
  });
});

/* router.post("/upload", upload, (req, res) => {
  console.log(req.files);

  res.send("subido");
}); */

module.exports = router;
