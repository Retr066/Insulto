const { Router } = require("express");
const multer = require("multer");
const router = Router();
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

/* const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/duaj7oxcq/image/upload";
const CLOUDINARY_USER = "Retr0"; */

//midlewares mutler el que procesa la img por nosotros
var storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    await cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: async function (req, file, cb) {
    await cb(null, Date.now() + "-" + file.originalname.toLowerCase());
  },
});

async function fileFilter(req, file, cb) {
  const filetypes = /jpeg|jpg|png|gif|svg|JPEG|JPG|PNG|GIF|SVG/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname));
  if (mimetype && extname) {
    return await cb(null, true);
  }
  await cb(
    new Error(
      `Solo se adminten imagenes con algunas de estas extensiones ${filetypes}`
    )
  );
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5000000 },
}).array("image", [5]);

router.get("/", async (req, res) => {
  await res.render("index");
});
router.get("/uploads", async (req, res) => {
  res.render("img-upload");
});

/* router.post("/upload", async function (req, res) {
  await cloudinary.uploader.upload(req.file.path);

  res.redirect("/");
}); */

router.post("/upload", async function (req, res) {
  await upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.log("MulterError", err);
      return res.send({
        error: "Solo se adminten imagenes con un peso menor a 5 megas",
      });
    } else if (err) {
      console.log("UnhandledError", err);
      return res.send({
        error:
          "Solo se adminten imagenes con algunas de estas extensiones /jpeg|jpg|png|gif",
      });
    }
    if (err) {
      return await res.sendStatus(403);
    }

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    /* const uniqueFilename = new Date().toISOString();
    const storage2 = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: {
        folder: "hentai",
        format: async (req, file) => "png", 
        public_id: (req, file) => uniqueFilename,
      },
    }); */

    /*  cloudinary.uploader.upload(req.file.path); */
    console.log(req.files, "Se subio correctamente");
    res.redirect("/");
  });
});

module.exports = router;
