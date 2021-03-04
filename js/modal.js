const cerrar = document.querySelectorAll(".close")[0];
const abrir = document.querySelectorAll(".cta")[0];
const modal = document.querySelectorAll(".modal")[0];
const modalConteiner = document.querySelectorAll(".conteiner-modal")[0];
//abrir modal
abrir.addEventListener("click", (e) => {
  e.preventDefault();
  modalConteiner.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});
//cerrar modal
cerrar.addEventListener("click", () => {
  modal.classList.toggle("modal-close");
  setTimeout(() => {
    modalConteiner.style.visibility = "hidden";
  }, 700);
});
//cerrar modal cuando toques algo fuera del modadl
window.addEventListener("click", (e) => {
  if (e.target == modalConteiner) {
    modal.classList.toggle("modal-close");
    setTimeout(() => {
      modalConteiner.style.visibility = "hidden";
    }, 800);
  }
});
//cerrar modal con la tecla esc
document.body.addEventListener("keydown", function (event) {
  if (event.code === "Escape" || event.keyCode === 27) {
    modal.classList.toggle("modal-close");
    setTimeout(() => {
      modalConteiner.style.visibility = "hidden";
    }, 800);
  }
});
