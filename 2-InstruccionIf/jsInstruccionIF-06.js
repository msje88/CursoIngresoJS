/*
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
		let edad;
		let mensaje;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if(edad>17)//si esto es false descarta a los mayores 
	{
		mensaje="Mayor de edad";

	}
	else
	{
		mensaje="Adolescente";
		if(edad<13)
		{
		mensaje="Niño";
		}
	}
		alert(mensaje);
		

}//FIN DE LA FUNCIÓN