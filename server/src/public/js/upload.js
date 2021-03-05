(function () {
  "use strict";
  const upload = document.querySelector("#upload");
  upload.addEventListener("change", () => {
    for (let i = 0; i < upload.files.length; i++) {
      createImg(upload, i);
    }
  });
  const createImg = (upload, iterador) => {
    var img = document.createElement("DIV");
    img.classList.add("upload-img");
    img.setAttribute(
      "style",
      `background-image:url(${URL.createObjectURL(upload.files[iterador])})`
    );
    document.getElementById("conteiner-fotos").appendChild(img);
  };
})();

//para el servidor
let btnUpload = document.getElementById(btnLoad);

/* btnUpload.addEventListener("click", (e) => {
  e.preventDefault();
  axios
    .post("http://localhost:5000/upload")
    .then(function (response) {
      console.log(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}); */
