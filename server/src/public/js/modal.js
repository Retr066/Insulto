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
const cerrarModal = (e) => {
  modal.classList.toggle("modal-close");
  setTimeout(() => {
    modalConteiner.style.visibility = "hidden";
  }, 700);
};
cerrar.addEventListener("click", cerrarModal);

//cerrar modal cuando toques algo fuera del modadl
const windowCerrar = (e) => {
  e.target.removeEventListener(e.type, windowCerrar);
  if (e.target == modalConteiner) {
    modal.classList.toggle("modal-close");
    setTimeout(() => {
      modalConteiner.style.visibility = "hidden";
    }, 800);
  }
};
window.addEventListener("click", windowCerrar);
//cerrar modal con la tecla esc
const cerrarEsc = (event) => {
  event.target.removeEventListener("keydown", cerrarEsc);
  if (event.code === "Escape" || event.keyCode === 27) {
    modal.classList.toggle("modal-close");
    setTimeout(() => {
      modalConteiner.style.visibility = "hidden";
    }, 800);
  }
};
document.body.addEventListener("keydown", cerrarEsc);
