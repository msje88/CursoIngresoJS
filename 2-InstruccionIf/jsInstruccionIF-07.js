/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
		let edad;
		let estadocivil;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadocivil=document.getElementById('estadoCivil').value;

	if(edad<18 && estadocivil!="Soltero")//tomo la edad 
	{
		alert("Es muy pequeño para NO ser soltero");

		}
}//FIN DE LA FUNCIÓN