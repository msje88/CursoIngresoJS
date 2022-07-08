/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let Sueldo;
	let Resultado;
	let Descuento;
	let porcentaje;

	/*Descuento=25;*/

	Sueldo=document.getElementById('txtIdImporte').value;

	Sueldo=parseInt(Sueldo);

	porcentaje=prompt('porcentaje');
	porcentaje=parseInt(porcentaje);


	Descuento=porcentaje;
	
	Resultado=Sueldo-(Sueldo*Descuento/100);
	document.getElementById('txtIdResultado').value=Resultado;
}
