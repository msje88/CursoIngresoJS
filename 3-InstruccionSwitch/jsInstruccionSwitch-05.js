/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	let hora;
	let mensaje="No es una hora valida";

	hora=document.getElementById('txtIdHora').value;
	hora=parseInt(hora);
/*
	switch(hora) 
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:		
		mensaje = "Es de mañana";
		break;
		default:
		mensaje = "No es de mañana";
		break;

	}
	if(hora>23 || hora<0)
	{
		mensaje = "No es una hora valida";
	}
	//En un principio lo habia realizado de esta manera
	pero despues lo volvi a plantear de la siguiente forma
	por lo que vimos en la clase
	*/


	if(hora>0 && hora<24) 
	{
		switch(hora)
		{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:		
		mensaje = "Es de mañana";
		break;
		default:
		mensaje="No es de mañana";
		break;
		}
	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN