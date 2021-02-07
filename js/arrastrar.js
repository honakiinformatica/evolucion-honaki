var elemento;

var elementoDestino;

function comenzar() {

    elemento = document.getElementById("imagen1");

    elemento.addEventListener("dragstart", arrastrar, false);

    elementoDestino = document.getElementById("imagen3");

    elementoDestino.addEventListener("dragenter", entrando, false);

    elementoDestino.addEventListener("dragover", function(e) {
        e.preventDefault();
    }, false);

    elementoDestino.addEventListener("drop", soltar, false);

    elemento.addEventListener("dragend", finaliza, false);

    elementoDestino.addEventListener("dragleave", salida, false);


}

function arrastrar(e) {

    var codigo = "<img src= img/fuente.jpg>";

    e.dataTransfer.setData("Text", codigo);

}

function soltar(e) {

    e.preventDefault();

    elementoDestino.innerHTML = e.dataTransfer.getData("Text");

}

function finaliza(e) {

    var elemento = e.target;

    elemento.style.visibility = "hidden";

}

function entrando(e) {

    e.preventDefault();
    elementoDestino.style.backgroundColor = "green";
}

function salida(e) {

    e.preventDefault();
    elementoDestino.style.backgroundColor = "white";
}

var elemento1;

var elementoDestino1;

function comenzar1() {

    elemento1 = document.getElementById("imagen2");

    elemento1.addEventListener("dragstart", arrastrar1, false);

    elementoDestino1 = document.getElementById("imagen4");

    elementoDestino1.addEventListener("dragenter", entrando1, false);

    elementoDestino1.addEventListener("dragover", function(e) {
        e.preventDefault();
    }, false);

    elementoDestino1.addEventListener("drop", soltar1, false);

    elemento1.addEventListener("dragend", finaliza1, false);

    elementoDestino1.addEventListener("dragleave", salida1, false);
}

function arrastrar1(e) {

    var codigo1 = "<img src= img/disco.jpg>";

    e.dataTransfer.setData("Text", codigo1);

}

function soltar1(e) {

    e.preventDefault();

    elementoDestino1.innerHTML = e.dataTransfer.getData("Text");

}

function finaliza1(e) {

    var elemento1 = e.target;

    elemento1.style.visibility = "hidden";

}

function entrando1(e) {

    e.preventDefault();
    elementoDestino1.style.backgroundColor = "green";
}

function salida1(e) {

    e.preventDefault();
    elementoDestino1.style.backgroundColor = "white";
}



window.addEventListener('load', comenzar, false);

window.addEventListener('load', comenzar1, false);