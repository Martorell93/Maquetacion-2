//Función para obtener información del form
let datos = [];

function getInformacion() {
    let destino = document.getElementById("destino").value;
    let fechaInicio = document.getElementById("fechaInicio").value;
    let fechaFin = document.getElementById("fechaFin").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let tlf = document.getElementById("tlf").value;
    let persona = new Persona(destino,fechaInicio,fechaFin,
        nombre,apellidos,email,tlf);
    datos.push(persona);
    alert("Información enviada correctamente: ");
    console.log(datos);
}

function getFiltro() {
    let filtro = document.getElementById("filtro").value;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].destino === filtro) {
            console.log(datos[i]);
        }
    }
}