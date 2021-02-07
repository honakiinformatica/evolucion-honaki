function comenzar() {

    var miBoton = document.getElementById('boton');

    miBoton.addEventListener('click', localizar, false);
}

function localizar() {

    navigator.geolocation.getCurrentPosition(mostrar_posicion, gestionar_errores);
}

function mostrar_posicion(posicion) {

    var ubicacion = document.getElementById('ubicacion');

    var miUbicacion = "";

    miUbicacion += "Latitud: " + posicion.coords.latitude + "<br>";

    miUbicacion += "Longitud: " + posicion.coords.longitude + "<br>";

    miUbicacion += "Exatitud: " + posicion.coords.accuracy + "<br>";

    /*var mapurl = 'http://maps.google.com/maps/api/staticmap?center=' +
        posicion.coords.latitude + ',' + posicion.coords.longitude + '&zoom=12&size=400x400 & sensor = false & markers = ' + posicion.coords.latitude + ', ' + posicion.coords.longitude;

    ubicacion.innerHTML = "<img src='" + mapurl + "'>";*/

    ubicacion.innerHTML = miUbicacion;
}

function gestionar_errores(error) {

    alert('Se ha producido un error en la obtención de tu posición ' + error.code + ' ' + error.mesagge);
}

window.addEventListener('load', comenzar, false);