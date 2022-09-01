/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='s';

		while(respuesta=='s'){
		numeroIngresado=prompt("Ingresa un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
			{
		contador++;
		sumaPositivos+=numeroIngresado;
			}else
				{
					multiplicacionNegativos*=numeroIngresado;
				}
		respuesta=prompt("Desea continuar? s/n").toLowerCase();
		}
		if(multiplicacionNegativos==1)
		{
			multiplicacionNegativos="No se ingresaron numeros negativos";
		}
		if(sumaPositivos==0)
		{
			sumaPositivos="No se ingresaron numeros positivos";
		}

		


	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN