/*

1)De 5  personas que ingresan a la farmacia se deben tomar y validar los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona.
b)La cantidad de personas que su DNI es menor a 80.000.000 
y la cantidad de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write

*/
function mostrar()
{
	let i;
	let nombre;
	let numeroEspera;
	let dni;
	let montoFactura;
	let promedio;
	let acumulador;
	let contadorDni;
	let contadorDniMayor;
	let flagMayorGasto;
	let mayorGasto;
	let mayorGastoNombre;
	let mayorGastoNumeroEspera;

	i=true;
	acumulador=0;
	contadorDni=0;
	contadorDniMayor=0;
	flagMayorGasto=true;



for(i=0;i<2;i++)
{
	do{
        nombre=prompt("Ingrese el nombre:").toLowerCase();
	}while(isNaN(nombre)==false);
	do{
        numeroEspera=prompt("Ingrese el numero de espera:");
        numeroEspera=parseInt(numeroEspera);
	}while(isNaN(numeroEspera) || numeroEspera<0 || numeroEspera>99);
	do{
        dni=prompt("Ingrese el DNI:");
        dni=parseInt(dni);
	}while(isNaN(dni) || dni<10000000 || dni>99999999);
	do{
        montoFactura=prompt("Ingrese el monto de la factura:");
        montoFactura=parseInt(montoFactura);
	}while(isNaN(montoFactura) || montoFactura<=0);

	acumulador+=montoFactura;

	if(dni<80000000)
	{
		contadorDni++;
	}
	if(dni>=80000000)
	{
		contadorDniMayor++;
	}

	if(flagMayorGasto==true)
	{
	mayorGasto=montoFactura;
	mayorGastoNombre=nombre;
	mayorGastoNumeroEspera=numeroEspera;
	flagMayorGasto=false;
	}
	if(montoFactura>mayorGasto)
	{
		mayorGasto=montoFactura;
		mayorGastoNombre=nombre;
		mayorGastoNumeroEspera=numeroEspera;
	}

}

promedio=acumulador/i;

	mensaje="el promedio gastado es: "+promedio+".<br>";
	mensaje+="La cantidad de personas que su DNI es menor a 80.000.000"+contadorDni+".<br>";
	mensaje+="la cantidad de personas que su DNI es igual o mayor a los 80.000.000"+contadorDniMayor+".<br>";
	mensaje+="el nombre del que más gastó es: "+mayorGastoNombre+"y su numero de eséra es:"+mayorGastoNumeroEspera+".<br>";

	document.write(mensaje);


}