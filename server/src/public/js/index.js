let btnNombre = document.querySelector("#btnNombre");
let nombre = document.querySelector("#nombre");
let insulto = document.querySelector("#insulto");
let area = document.querySelector("#area");

btnNombre.addEventListener("click", () => {
  let valueNombre = nombre.value;
  let valueInsulto = insulto.value;
  const pattern = new RegExp(
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/
  );
  if (!pattern.test(valueInsulto) || !pattern.test(valueNombre)) {
    alert("Porque favor coloca letras nomas");
    /* else if (pattern.test(valueNombre)) {
    alert("Porque favor coloca letras nomas"); */
  } else if (
    valueInsulto == null ||
    valueInsulto.length == 0 ||
    /^\s+$/.test(valueInsulto) ||
    valueNombre == null ||
    valueNombre.length == 0 ||
    /^\s+$/.test(valueNombre)
  ) {
    alert("Escriba algun nombre con su insulto");
  } else {
    let code = `Tu victima se llama ${valueNombre} y es ${valueInsulto} ,en conclusion es un conshasumare :)    
     `;
    area.innerHTML += code;
  }
});
