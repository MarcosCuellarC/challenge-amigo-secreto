// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = inputAmigo.value.trim();
        
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((nombre, index) => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agrega nombres antes de sortear.");
            return;
        }
        
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        
        resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎉</li>`;
        listaAmigos.style.display = "none"; // Ocultar la lista después del sorteo, quitar esta línea si se desea conservar el listado
    };
});