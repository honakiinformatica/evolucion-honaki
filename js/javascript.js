'use strict'

var nombre = document.getElementById('nombre')

var apellido = document.getElementById('apellido')

var email = document.getElementById('correo')

var telefono = document.getElementById('telefono')

function validacionGeneral(){
	nombre.addEventListener('input', validaNombre)
	apellido.addEventListener('input', validaApellido)
	email.addEventListener('input',validaCorreo)
	telefono.addEventListener('input', validaTelefono)
	validaNombre()
	validaApellido()
	validaCorreo()
	validaTelefono()
}

function validaNombre(){
	if(nombre.value == ''){
		nombre.setCustomValidity('Debes completar con tu nombre')
		nombre.style.background = '#ad2424';
	}else{
		nombre.setCustomValidity('')
		nombre.style.background = white;
	}
}

function validaApellido(){
	if(apellido.value == ''){
		apellido.setCustomValidity('Debes completar con tu apellido')
		apellido.style.background = '#ad2424';
	}else{
		apellido.setCustomValidity('')
		apellido.style.background = white;
	}
}

function validaCorreo(){

	if(email.value == ''){
		email.setCustomValidity('Por favor verifica de escribir bien tu email, debe contener un @ y un punto')
		email.style.background = '#ad2424';
	}else{
		email.setCustomValidity('')
		email.style.background = white;
	}
}

function validaTelefono(){
	if(telefono.value == '' && isNaN(telefono)){
		telefono.setCustomValidity('El telefono debe contener 10 números')
		telefono.style.background = '#ad2424';
	}else{
		telefono.setCustomValidity('')
		telefono.style.background = white;
	}
}


window.addEventListener('load', validacionGeneral)




