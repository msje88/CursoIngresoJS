/*A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx 
y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ". */

function mostrar()
{

	let nombre1;
	let nombre2;
	let peso1;
	let peso2;
	let pesototal;
	let pesopromedio;

	nombre1=prompt('Nombre Uno');
	nombre2=prompt('Nombre Dos');

	peso1=prompt('Peso Uno');
	peso1=parseInt(peso1);

	peso2=prompt('Peso Dos');
	peso2=parseInt(peso2);

	pesototal=peso1+peso2;
	pesopromedio=pesototal/2;

	alert("Ustedes se llaman "+nombre1+" y "+nombre2);
	alert("Pesan "+peso1+" y "+peso2+" kilos");
	alert("Sumados son "+pesototal+" kilos ");
	alert("Y el promedio de peso es "+pesopromedio+" kilos");

}
