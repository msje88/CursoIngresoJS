/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let respuesta;
	let promedio;
	contador=0;
	acumulador=0;
	respuesta='s';

	while(respuesta=='s'){
		numeroIngresado=prompt("Ingresa un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador++;
		acumulador+=numeroIngresado;
		respuesta=prompt("Desea continuar? s/n").toLowerCase();
	}


	promedio=acumulador/contador;
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;

}//FIN DE LA FUNCIÓN