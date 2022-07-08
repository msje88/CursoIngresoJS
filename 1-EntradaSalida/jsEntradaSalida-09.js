/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let Sueldo;
	let Resultado;
	let porcentaje;

	
	Sueldo=document.getElementById('txtIdSueldo').value;

	Sueldo=parseInt(Sueldo);

	porcentaje=prompt('porcentaje');
	porcentaje=parseInt(porcentaje);
	
	Resultado=((Sueldo*porcentaje)/100)+Sueldo;
	document.getElementById('txtIdResultado').value=Resultado;

}
