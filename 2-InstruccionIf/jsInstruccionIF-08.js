/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
		let edad;
		let estadocivil;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadocivil=document.getElementById('estadoCivil').value;

	if(edad>=18 && estadocivil=="Soltero")//tomo la edad 
	{
		alert("Es soltero y no es menor");

		}

}//FIN DE LA FUNCIÓN