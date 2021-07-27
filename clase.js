//Ejemplos de la slides maquetación día 2

//Selectores del DOM (objeto document de la clase Document)
let myId = document.getElementById("myId");
console.log(myId);

let myClassesName = document.getElementsByClassName("lista");
console.log(myClassesName);

let myTagsName = document.getElementsByTagName("h3");
console.log(myTagsName);

//Selecciona el PRIMER elemento (id, clase o tag) en el HTML
//Si quieres seleccionar todo el metodo es querySelectorAll("text")
// let myQuerySelector = document.querySelectorAll(".lista");
// console.log(myQuerySelector);

//Función que llaman los eventos onclick/onmouseover
// function isAlert() {
//     alert("Hola mundo!");
// }

// var correcto = () => {
//     alert("Se ha cargado completamente");
// }

//get, set y remove atribute
// console.log("Original: ", myId.getAttribute("id"));
// myId.removeAttribute("id");
// console.log("Eliminado: ", myId.getAttribute("id"));
// myId.setAttribute("id", "newId");
// console.log("Cambiado: ", myId.getAttribute("id"));

//Ejemplo get, set y remove con lik
// let myLink = document.getElementsByTagName("link");
// console.log(myLink);
// console.log("Original: ", myLink[0].getAttribute("href"));

//Classlist
// myTagsName[0].classList.add("add");
// console.log(myTagsName[0].getAttribute("class"));
// myTagsName[0].removeAttribute("class");

//Style SOLO FUNCIONA CONTRA OBJETOS ELEMENT
//myQuerySelector[0].style.cssText = "background:red; color:black";

//Nuevas etiquetas createElement()
// let newElement = document.createElement("a");
// myClassesName[0].appendChild(newElement);
// console.log(myClassesName[0]);
// newElement.textContent = "Link";
// console.log(newElement.textContent);
// newElement.textContent = "Google";
// newElement.setAttribute("href", "https://www.google.es/");

//Remove
// myTagsName[1].remove();

//InnerHTML
// console.log(myTagsName[0].innerHTML);
// myTagsName[0].innerHTML = "<h1>Ahora lo he cambiado!</h1>";
// console.log(myTagsName[0].innerHTML);
// console.log(myTagsName[0]);

//EventListener
const myAlert = () => {
    console.log("Hola mundo!");
    myId.removeEventListener("click", myAlert);
}
myId.addEventListener("click", myAlert);