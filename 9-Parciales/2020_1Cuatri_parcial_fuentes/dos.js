/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , 
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/

function mostrar()
{
  let peso;
  let precioKilo;
  let tipo;
  let acumulador;
  let respuesta;
  let continuar;
  let flagIngredientes;
  let tipoMaximo;
  let precioMaximo;
  let precioTotal;
  let precioTotalDescuento;
  let contador;
  let acumuladorPeso;

  flagIngredientes=true;
  respuesta=true;
  acumuladorPrecio=0;
  contador=0;
  acumuladorPeso=0;

while(respuesta){
  do{
  	tipo=prompt("Ingrese el tipo de producto: v (vegetal) a (animal) o m (mezcla)").toLowerCase();

  }while(tipo!="v" && tipo!="a" && tipo!="m");
  do{
  	peso=prompt("Ingrese el peso del producto: (entre 10 y 1000kg");
  	peso=parseInt(peso);

  }while(peso<10 || peso>1000);
  do{
  	precioKilo=prompt("Ingrese el precio por kilo del producto:");
  	precioKilo=parseInt(precioKilo);

  }while(precioKilo<0);

  if(flagIngredientes==true){
  	precioMaximo=precioKilo;
  	tipoMaximo=tipo;
  	flagIngredientes=false;
  }
  else{
  	if(precioMaximo<precioKilo)
  	{
  		precioMaximo=precioKilo;
  		tipoMaximo=tipo;
  	} 	
  }
    acumuladorPrecio+=precioKilo;
    acumuladorPeso+=peso;
  	contador++;
  	respuesta=confirm("desea continuar?");
}
if(acumuladorPeso>100 && acumuladorPeso<300)
  	{
  		precioTotalDescuento=acumuladorPrecio*0.85;
  	}
  if(acumuladorPeso>299)
  	{
  		precioTotalDescuento=acumuladorPrecio*0.75;
  	}
  else {
  	precioTotalDescuento=acumuladorPrecio*1;
  }

	promedio=acumuladorPrecio/contador;

  	mensaje="El importe total a pagar es: "+acumuladorPrecio;
  	mensaje+="el importe total a pagar con descuento es: "+precioTotalDescuento;
  	mensaje+="el tipo de alimento más caro es: "+tipoMaximo;
  	mensaje+="el promedio de precio por kilo en total es: "+promedio;

  	alert(mensaje);


}
