/*
Al presionar el botón pedir 5 números e informar 
la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
/*
	contador=0;*/
	acumulador=0;

/*
	while(contador<5){
		numeroIngresado=prompt("Ingresa un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador++;
		acumulador+=numeroIngresado;
	}
	
	promedio=acumulador/contador;
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;
*/
	
for(contador=0;contador<5;contador++){
		numeroIngresado=prompt("Ingresa un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador+=numeroIngresado;
	}

	promedio=acumulador/contador;
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=promedio;



}//FIN DE LA FUNCIÓN
