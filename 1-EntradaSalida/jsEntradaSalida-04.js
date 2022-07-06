/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var edad;
	edad=prompt('Ingrese su edad');
	document.getElementById('txtIdNombre').value=edad;
}

