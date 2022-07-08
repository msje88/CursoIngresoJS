/* Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */

function mostrar()
{
	let precio;
	let porcentaje;
	let preciofinal;

	precio=prompt('Precio');
	precio=parse(precio);

	porcentaje=prompt('Porcentaje');
	porcentaje=parseFloat(porcentaje);

	preciofinal=precio-((precio*porcentaje)/100);
	preciofinal=parseFloat(preciofinal);
	document.getElementById('elPrecioFinal').value=preciofinal.toFixed(2);

}
