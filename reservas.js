/*const Clickbutton = document.querySelectorAll('.button');*/

function iniciar(){
	var bloqueFormulario= document.getElementById("formulario");
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
    var comentario = document.getElementById("comentario").value;

    document.getElementById("parrafo1").innerHTML = "Cantidad de Comenzales: " +cantComenzales;
    document.getElementById("parrafo2").innerHTML = "Servicio Solicitado: " +servicio;
    document.getElementById("parrafo3").innerHTML = "Fecha Reservada: " +fecha;
    document.getElementById("parrafo4").innerHTML = "Horario Reservado: " +horario;
    document.getElementById("parrafo5").innerHTML = "Apellido y Nombre: " +nombreYApellido;
    document.getElementById("parrafo6").innerHTML = "DNI: " +dni;
    document.getElementById("parrafo7").innerHTML = "Teléfono de Contacto: " +telefono;
    document.getElementById("parrafo8").innerHTML = "Comentario: " +comentario;

}

/*Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToArrayItem)
})*/