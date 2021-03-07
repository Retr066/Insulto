(function () {
  "use strict";
  const upload = document.querySelector("#upload");
  const formData = new FormData();
  upload.addEventListener("change", (e) => {
    for (let i = 0; i < upload.files.length; i++) {
      const idImg = Math.floor(Math.random() * 50000) + "-" + Date.now();
      createImg(upload, i, idImg);
      formData.append(idImg, upload.files[i]);
    }
    e.target.value = "";
  });
  const createImg = (upload, iterador, idImg) => {
    var img = document.createElement("DIV");
    img.classList.add("upload-img", idImg);
    img.dataset.id = idImg;
    img.setAttribute(
      "style",
      `background-image:url(${URL.createObjectURL(upload.files[iterador])})`
    );
    document.getElementById("conteiner-fotos").appendChild(img);
    createButonClose(idImg);
  };
  const createButonClose = (idImg) => {
    let butonClose = document.createElement("DIV");
    butonClose.classList.add("close-buton");
    let x = document.createTextNode("x");
    butonClose.appendChild(x);
    document.getElementsByClassName(idImg)[0].appendChild(butonClose);
  };
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-buton")) {
      e.target.parentNode.remove();
      console.log(e.target);
      formData.delete(e.target.parentNode.dataset.id);
    }
  });
})();

//para el servidor
/* let btnUpload = document.getElementById(btnLoad); */

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
