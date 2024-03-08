let personas = [];
function capturaDatos() {
  console.log("Capturando datos...");
  let persona = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    fecha: document.getElementById("fecha").value,
    ciudad: document.getElementById("ciudad").value,
  };
  personas.push(persona);
  mostrarCards();
}
function mostrarCards() {
  document.getElementById("cards").innerHTML = "";
  personas.map(function (persona) {
    let card = document.createElement("section");
    let nombre = document.createElement("p");
    let correo = document.createElement("p");
    let telefono = document.createElement("p");
    let fecha = document.createElement("p");
    let ciudad = document.createElement("p");
    nombre.textContent = persona.nombre;
    correo.textContent = persona.correo;
    telefono.textContent = persona.telefono;
    fecha.textContent = persona.fecha;
    ciudad.textContent = persona.ciudad;
    card.append(nombre, correo, telefono, fecha, ciudad);
    document.getElementById("cards").append(card);
  });
}


let numeros = []
numeros.push(1)
numeros.push(2)
numeros.push(0)

numeros.pop()
numeros.pop()
numeros.pop()





console.log(numeros)
