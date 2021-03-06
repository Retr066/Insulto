const express = require("express");
const path = require("path");
const router = require("./route/router");

//inicializacion
const app = express();
//configuracion
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//cargar archivos staticos
app.use(express.static(path.join(__dirname, "/public")));

//rutas
app.use(router);
//abriendo el puerto
app.listen(app.get("port"));
