var btn_verificar = document.getElementById('verifDatos');
var btnVerifDatos = document.getElementById('verifDatos1');
var btnVerifDatos1 = document.getElementById('verifDatos2');

function iniciar(){
	var bloqueFormulario= document.getElementById("formularioPrincipal");
    var bloqueDisponibilidadHoraria = document.getElementById("disponibilidadHoraria");
    var bloqueConfirmacion = document.getElementById("confirmacionDatosHorario");
    var bloqueDatosContactos = document.getElementById("datosContacto");
    var btnDisponibilidad= document.getElementById("disponibilidad");

    //Hora y fecha
    var btnAnterior = document.getElementById("anterior");
    var btnSiguiente = document.getElementById("siguiente");
    //datosContacto
    var btnAnterior1 = document.getElementById("anterior1");
    var btnSiguiente1 = document.getElementById("siguiente1");
    //Confirmacion
    var btnAnterior2 = document.getElementById("anterior2");
    var btnSiguiente2 = document.getElementById("siguiente2");


	bloqueFormulario.style.display="";
    bloqueDisponibilidadHoraria.style.display="none";
    bloqueDatosContactos.style.display="none";
    bloqueConfirmacion.style.display="none";

    //Me lleva a Fecha y hora
    btnDisponibilidad.addEventListener('click',function(){
		bloqueFormulario.style.display="none";
        bloqueDisponibilidadHoraria.style.display="";
        bloqueDatosContactos.style.display="none";
        bloqueConfirmacion.style.display="none";
	});
    //Me lleva a formulario principal
    btnAnterior.addEventListener('click',function(){
		bloqueFormulario.style.display="";
        bloqueDisponibilidadHoraria.style.display="none";
        bloqueDatosContactos.style.display="none";
        bloqueConfirmacion.style.display="none";  
        btn_verificar.style='display:block';
	});
    //Me lleva a DatosContacto
    btnSiguiente.addEventListener('click',function(){
		bloqueFormulario.style.display="none";
        bloqueDisponibilidadHoraria.style.display="none";
        bloqueDatosContactos.style.display="";
        bloqueConfirmacion.style.display="none";
	});
    //Me lleva Fecha y Hora
    btnAnterior1.addEventListener('click',function(){
		bloqueFormulario.style.display="none";
        bloqueDisponibilidadHoraria.style.display="";
        bloqueDatosContactos.style.display="none";
        bloqueConfirmacion.style.display="none";
        btn_verificar.style='display:block';
        btnVerifDatos.style='display:block';
	});
    //Me lleva a confirmacion
    btnSiguiente1.addEventListener('click',function(){
		bloqueFormulario.style.display="none";
        bloqueDisponibilidadHoraria.style.display="none";
        bloqueDatosContactos.style.display="none";
        bloqueConfirmacion.style.display="";
	});
    //Me lleva a datosContacto
    btnAnterior2.addEventListener('click',function(){
		bloqueFormulario.style.display="none";
        bloqueDisponibilidadHoraria.style.display="none";
        bloqueDatosContactos.style.display="";
        bloqueConfirmacion.style.display="none";
        btn_verificar.style='display:block';
        btnVerifDatos.style='display:block';
        btnVerifDatos1.style='display:block';
	});
    //Bloque vacio
    btnSiguiente2.addEventListener('click',function(){
        alert("Reserva Guardada Correctamente!");
        bloqueFormulario.style.display="";
        bloqueDisponibilidadHoraria.style.display="none";
        bloqueDatosContactos.style.display="none";
        bloqueConfirmacion.style.display="none";
	});
}

//Horario dependiendo de seleccion si es almuerzo o cena
const horario1 = document.getElementById('horario1');
const horario2 = document.getElementById('horario2');

function mostrarSelect(select) {
    option = select.options[select.selectedIndex];
    console.log(option);

    if(option.value == 'Almuerzo') {
        horario2.style.display="none";
        horario1.style.display="inline-block";
    } else {
        horario1.style.display="none";
        horario2.style.display="inline-block";
    }
}

//calendario. Se limita al día actual en adelante
window.addEventListener('DOMContentLoaded', (evento) => {
    /* Obtenemos la fecha de hoy en formato ISO */
    const hoy_fecha = new Date().toISOString().substring(0, 10);
    /* Buscamos la etiqueta, ya sea por ID (que no tiene) o por su selector */
    document.querySelector("input[name='fecha']").min = hoy_fecha;
});

function confirmaDatos() {
    var cantComenzales = document.getElementById("cantComenzales").value;
    var servicio = document.getElementById("opcion").value;
    var fecha = document.getElementById("fecha").value;
    var horario = document.getElementById("horario").value;
    var nombreYApellido = document.getElementById("nombreYApellido").value;
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    document.getElementById("parrafo1").innerHTML = "Cantidad de Comenzales: " +cantComenzales;
    document.getElementById("parrafo2").innerHTML = "Servicio Solicitado: " +servicio;
    document.getElementById("parrafo3").innerHTML = "Fecha Reservada: " +fecha;
    document.getElementById("parrafo4").innerHTML = "Horario Reservado: " +horario;
    document.getElementById("parrafo5").innerHTML = "Apellido y Nombre: " +nombreYApellido;
    document.getElementById("parrafo6").innerHTML = "DNI: " +dni;
    document.getElementById("parrafo7").innerHTML = "Teléfono de Contacto: " +telefono;
    document.getElementById("parrafo8").innerHTML = "E-mail: " +email;
    document.getElementById("parrafo9").innerHTML = "Comentario: " +comentario;

}

/*VALIDACION DE FORMULARIO*/
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)


    })

})()

function validarDatos() {
    let comenzales = document.getElementById('cantComenzales').value;
    let opcionSelect = document.getElementById('opcion').options.selectedIndex;
    let btn_disponibilidad = document.getElementById('disponibilidad');
    

    //console.log(comenzales); // Debe ser mayor a 0
    //console.log(opcionSelect); // la opcion por defecto es 0 si no elige nada, si elige otra opcion toma el valor 1 o 2 dependiendo lo que elija 

    // Si ambos son mayor a 0 activa el boton y oculta el anterior
    if(comenzales > 0 && opcionSelect > 0) {
        btn_disponibilidad.disabled=false;
        btn_verificar.style='display:none';
    }
}

function validarDatos1() {
    var fecha = document.getElementById("fecha").value;
    var horario = document.getElementById("horario").options.selectedIndex;
    let siguiente = document.getElementById("siguiente");

    val = 0;

    if(fecha == "") {
        val++;
    }

    //console.log(val); // val = 1 si no hay seleccion.
                        // val = 0 si hay seleccion.
    //console.log(horario); // la opcion por defecto es 0 si no elige nada, si elige otra opcion toma el valor 1 o 2 dependiendo lo que elija 

    if(val == 0 && horario > 0) {
        siguiente.disabled=false;
        btnVerifDatos.style='display:none';
    }
}

function validarDatos2() {
    var nombreYApellido = document.getElementById("nombreYApellido").value;
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;
    let siguiente1 = document.getElementById("siguiente1");

    val1 = 0;
    valDni = 0;
    valTel = 0;
    valCom = 0;
    valEm = 0;

    if(nombreYApellido == "") {
        val1++;
    }
    if(dni == "") {
        valDni++;
    }
    if(telefono == "") {
        valTel++;
    }
    if(email == "") {
        valEm++;
    }
    if(comentario == "") {
        valCom++;
    }

    /*console.log(val1);
    console.log(valDni);
    console.log(valTel);
    console.log(valEm);
    console.log(valCom);*/

    if(val1 == 0 && valDni == 0 && valTel == 0 && valEm == 0 && valCom == 0) {
        siguiente1.disabled=false;
        btnVerifDatos1.style='display:none';
    }
}