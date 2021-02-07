<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Funciones</title>
<style type="text/css">

body {
	background-color: #F65863;
}
</style>
</head>

<body>

<?php
$nombre = $_POST['nombre']; // el valor dentro de las '' debe coincidir con el valor de name de cada input
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$destino = "pablo1980_1@hotmail.com"; // la dirección de correo a dónde quiero que llegue el mail

$asunto = "Consulta enviada desde www.honaki.com"; // título/asunto del mail

$cuerpo = "Nombre: ".$nombre."\r\n". "Apellido: ".$apellido."\r\n"."Correo: ".$correo."\r\n"."telefono: ".$telefono."\r\n". "Mensaje: ".$mensaje;

$remitente = "From: $nombre $apellido $telefono <$correo>"; // dirección de respuesta

mail ($destino, $asunto, $cuerpo, $remitente); // Para probarlo deben subirlo a un servidor
?>
<h2>Muchas gracias por su mensaje</h2>


</body>
</html>
