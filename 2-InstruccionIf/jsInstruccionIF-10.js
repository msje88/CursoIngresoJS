/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	let numero
	let mensaje

	numero=Math.floor(Math.random() * 10+1); //Genero el número RANDOM entre 1 y 10 
	if (numero>8)
	{
		mensaje="nota = " + numero + " (EXCELENTE)";
	}else
	if (numero<5)
	{
		mensaje="nota = " + numero + " (Vamos, la proxima se puede)";
	}
	if (numero>4)
	{
		mensaje="nota = " + numero + " (APROBÓ)";
	}	

	alert(mensaje);

}//FIN DE LA FUNCIÓN