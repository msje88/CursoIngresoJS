/*
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
		let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if(edad<13)//tomo la edad 
	{
		alert("Niño");

		}else
		if(edad<18)
			{
		alert("Adolescente");

		}else
		if(edad>=18)
			{
		alert("Mayor de edad");
		}

}//FIN DE LA FUNCIÓN