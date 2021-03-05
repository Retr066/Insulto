const express = require("express");
const path = require("path");
const multer = require("multer");

const almacenar = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//inicializacion
const app = express();
//configuracion
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//midlewares mutler el que procesa la img por nosotros
app.use(
  multer({
    almacenar,
  }).array("image")
);

//cargar archivos staticos
app.use(express.static(path.join(__dirname, "/public")));

//rutas
app.post("/upload", (req, res) => {
  console.log(req.files);
  res.send("subido");
});
app.get("/", function (req, res) {
  res.render("index");
});

app.listen(app.get("port"));
