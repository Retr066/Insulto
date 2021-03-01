const btnNombre = document.querySelector("#btnNombre");
const nombre = document.querySelector("#nombre");
const insulto = document.querySelector("#insulto");
const area = document.querySelector("#area");

btnNombre.addEventListener("click", () => {
  let valueNombre = nombre.value;
  let valueInsulto = insulto.value;
  const pattern = new RegExp("^[A-Z]+$", "i");
  if (!pattern.test(valueInsulto)) {
    alert("Porque favor coloca letras nomas");
  } else if (!pattern.test(valueNombre)) {
    alert("Porque favor coloca letras nomas");
  } else {
    let code = `Tu victima se llama ${valueNombre} y ${valueInsulto} ,en conclusion es un conshasumare :)`;
    area.innerHTML += code;
  }
});
