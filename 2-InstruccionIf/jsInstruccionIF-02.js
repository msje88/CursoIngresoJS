/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	if(edad>=18)//tomo la edad 
	{
		alert("Mayor de edad");

		}
	

}//FIN DE LA FUNCIÓN