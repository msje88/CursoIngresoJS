/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let resultado;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseFloat(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseFloat(ancho);

	resultado=((largo+ancho)*2)*3;

	alert("Se necesitan "+resultado.toFixed(2)+" metros de alambre");

}
function Circulo () 
{
	let radio;
	let resultado;

	radio=document.getElementById('txtIdRadio').value;
	radio=parseFloat(radio);

	resultado=(2*radio*Math.PI)*3;

	alert("Se necesitan "+resultado.toFixed(2)+" metros de alambre");
	
}
function Materiales () 
{
	let largo;
	let ancho;
	let cemento;
	let cal;
	let superficie;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseFloat(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseFloat(ancho);

	superficie=largo*ancho;
	
	cemento=superficie*2;
	cemento=Math.ceil(cemento);
	
	cal=superficie*3;
	cal=Math.ceil(cal);

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");	
	
}