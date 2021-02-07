function comenzar() {
    var boton = document.getElementById("grabar");
    boton.addEventListener('click', grabar1, false);

}

function grabar1() {
    var id = document.getElementById("id").value;
    var nivel = document.getElementById("nivel").value;
    var tarea = document.getElementById("tarea").value;
    var fecha = document.getElementById("fecha").value;

    var valores = [nivel, tarea, fecha];

    sessionStorage.setItem(id, valores);

    mostrar(id);

    document.getElementById("id").value = " ";

    document.getElementById("nivel").value = " ";

    document.getElementById("tarea").value = " ";

    document.getElementById("fecha").value = " ";
}

function mostrar(id) {

    var datos = document.getElementById("zonadatos");

    var valor = sessionStorage.getItem(id);

    zonadatos.innerHTML = " ";

    for (var i = 0; i < sessionStorage.length; i++) {

        var id = sessionStorage.key(i);

        var valor = sessionStorage.getItem(id);

        datos.innerHTML += "<div>Id: " + id + '---' + "Trabajo: " + valor + "</div>";
    }
}

window.addEventListener("load", comenzar, false);