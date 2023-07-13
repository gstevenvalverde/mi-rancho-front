const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textArea = document.getElementById('desempeño');

textArea.addEventListener("keyup", e => {
    var height = e.target.scrollHeight;
    console.log(height)
    textArea.style.height = `${height}px`
})


const expresiones = {
	nombre_colegio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    direccion_colegio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    desempeño: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.	
}

const campos = {
	nombre_colegio: false,
	direccion_colegio: false,
	desempeño: false,
    grado_escolar: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre_colegio":
			validarCampo(expresiones.nombre, e.target, 'nombre_colegio');
		break;
		case "direccion_colegio":
			validarCampo(expresiones.correo, e.target, 'direccion_colegio');
		break;
		case "desempeño":
			validarCampo(expresiones.ci, e.target, 'desempeño');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	console.log("Soy el " + campo);
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

const validarGrado = () => {
	console.log("Validando...");
	var grado = document.getElementById("grado_escolar");
	console.log(rol);
	if(grado.value == 0 || grado.value == "") {
		campos['grado_escolar'] = false;
		
	} else {
		campos['grado_escolar'] = true;
	}
	console.log(campos.grado_escolar);
}

const validarBeneficiario = () => {
	console.log("Validando...");
	var beneficiario = document.getElementById("beneficiario");
	console.log(rol);
	if(beneficiario.value == 0 || beneficiario.value == "") {
		campos['beneficiario'] = false;
		
	} else {
		campos['beneficiario'] = true;
	}
	console.log(campos.beneficiario);
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	validarGrado();
	validarBeneficiario();
	const terminos = document.getElementById('terminos');
	if(campos.nombre_colegio && campos.desempeño && campos.desempeño && campos.grado_escolar && campos.beneficiario){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});