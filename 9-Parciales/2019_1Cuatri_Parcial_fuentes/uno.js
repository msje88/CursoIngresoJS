/* Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero 
por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
	let longitudlado;
	let resultado;

	longitudlado=prompt('Longitud de lado');
	longitudlado=parseInt(longitudlado);

	resultado=longitudlado*3;

	alert("El perimetro es "+resultado);


}
