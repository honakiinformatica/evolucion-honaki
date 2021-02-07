window.onload = function() {
    var canvas = document.querySelector("#myCanvas");
    var lienzo = canvas.getContext("2d");

    var texto1 = "Hon@ki";
    var gradiente = lienzo.createLinearGradient(0, 0, 0, 70);
    gradiente.addColorStop(.25, "#7EFF54");
    gradiente.addColorStop(.50, "#FD9416");
    gradiente.addColorStop(.75, "#FFB81F");
    gradiente.addColorStop(1, "#7EFF54");

    lienzo.lineWidth = 2.0;
    lienzo.font = "70px Frijole";
    lienzo.strokeStyle = "Black";
    lienzo.fillStyle = gradiente;

    lienzo.save();

    lienzo.shadowColor = "#254A1A";
    lienzo.shadowOffsetX = 10;
    lienzo.shadowOffsetY = 5;
    lienzo.shadowBlur = 20;

    lienzo.strokeText(texto1, 10, 70);
    lienzo.fillText(texto1, 10, 70);

    lienzo.restore();
    lienzo.fillStyle = "#FFAE1F";
}