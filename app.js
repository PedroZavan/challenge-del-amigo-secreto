// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let sorteoRealizado = false;

//Referencias al DOM
const inputNombre = document.querySelector("#amigo");
const listaVisualAmigos = document.querySelector("#listaAmigos");
const resultadoSorteo = document.querySelector("#resultado");
const botonReiniciar = document.querySelector("#botonReiniciar");

//Función para agregar amigos
function agregarAmigo (){
    if (sorteoRealizado){
        //Reinicia el juego
        amigos = [];
        listaVisualAmigos.innerHTML = "";
        resultadoSorteo.innerHTML = "";
        resultadoSorteo.classList.remove("resultado-visible");
        sorteoRealizado = false;
    }
 
    const nombre = inputNombre.value.trim();
    if (nombre === ""){
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    amigos.push(nombre);
    inputNombre.value = "";
    mostrarListaAmigos();
}

//Función para mostrar a los amigos
function mostrarAmigos(){
    listaVisualAmigos.innerHTML = "";
    amigos.forEach(function(nombre){
    const li = document.createElement("li");
    li.textContent = nombre;
    listaVisualAmigos.appendChild(li);
    });
}

//Función para mostrar la lista de amigos
function mostrarListaAmigos(){
    listaVisualAmigos.innerHTML = "";
    amigos.forEach(function(nombre){
    const li = document.createElement("li");
    li.textContent = nombre;
    listaVisualAmigos.appendChild(li);
    });
}

//Función para sortear un amigo
function sortearAmigo(){
    if (amigos.length < 2) {
        alert ("Necesitas ingresar almenos a 2 amigos para realizar el sorteo");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

//Limpiar lista visual de amigos una vez ya sorteado
listaVisualAmigos.innerHTML = "";

//Mostrar el resultado en pantalla
resultadoSorteo.textContent = "🎉El amigo secreto es: " + amigoSorteado;
resultadoSorteo.classList.add("resultado-visible");
sorteoRealizado = true;

}

function reiniciarJuego() {
    amigos = [];
    listaVisualAmigos.innerHTML = "";
    resultadoSorteo.textContent = "";
    resultadoSorteo.classList.remove("resultado-visible");
    sorteoRealizado = false;
}
botonReiniciar.addEventListener("click", reiniciarJuego);
