// Función para abrir la ventana emergente (modal)
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Función para cerrar la ventana emergente (modal)
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Cierra la ventana emergente cuando el usuario hace clic fuera de ella
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}