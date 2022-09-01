/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia 
como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder 
calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let destinoIngresado;
	let estacion;
	let preciobase;
	let mensaje;

	estacion=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;
	
	preciobase=15000;

	if(estacion=="Invierno") 
	{
		switch(destinoIngresado)
		{
		case "Bariloche":
		mensaje = preciobase*1.2;
		break;
		case "Mar del plata":
		mensaje = preciobase - (preciobase*0.2);
		break;
		default:		
		mensaje = preciobase - (preciobase*0.1);
		break;
		}		
	}else
		{
		if(estacion=="Verano")
			{
			switch(destinoIngresado)
				{
			case "Bariloche":
			mensaje = preciobase - (preciobase*0.2);
			break;
			case "Mar del plata":
			mensaje = preciobase*1.2;
			break;
			default:
			mensaje = preciobase*1.1;
			break;
				}
			}
		if(estacion=="Otoño"|| estacion=="Primavera")
			{
			switch(destinoIngresado)
				{
			case "Cordoba":
			mensaje = preciobase;
			break;
			default:
			mensaje = preciobase*1.1;
			break;		
				}
			}	
		
		}

	alert(mensaje);

}//FIN DE LA FUNCIÓN