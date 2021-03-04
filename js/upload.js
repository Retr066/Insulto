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
