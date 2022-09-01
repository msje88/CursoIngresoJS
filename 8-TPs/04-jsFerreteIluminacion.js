/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () /*
{
 	let cantidad;
 	let precio;
 	let marca;
 	let preciobruto;
 	let preciofinal;
 	let ingresosbrutos;
 	let precioimpuesto;

 	cantidad=document.getElementById('txtIdCantidad').value;
 	cantidad=parseInt(cantidad);

 	marca=document.getElementById("Marca").value;

 	precio=35;

 	preciobruto=cantidad*precio;
 	

 	if(cantidad>=6)
 			{
 					preciofinal=preciobruto-(preciobruto*50/100);
 			}
 			else if(cantidad==5)
 			{
 			if(marca=="ArgentinaLuz")
 				{
 					preciofinal=preciobruto-(preciobruto*40/100);
 				}
 				else
 				{
 					preciofinal=preciobruto-(preciobruto*30/100);
 				}
 			}

 			else if(cantidad==4)
 			{
 			if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
 				{
 					preciofinal=preciobruto-(preciobruto*25/100);
 				}
 				else
 				{
 					preciofinal=preciobruto-(preciobruto*20/100);
 				}
 			}
 		
 			else if(cantidad==3)
 			{
 			if(marca=="ArgentinaLuz")
 				{
 					preciofinal=preciobruto-(preciobruto*15/100);
 				}
 			else if(marca=="FelipeLamparas")
 				{
 					preciofinal=preciobruto-(preciobruto*10/100);
 				}
 				else
 				{
 					preciofinal=preciobruto-(preciobruto*5/100);
 				}
 			}


				if(preciofinal>=120)
				{
					ingresosbrutos=preciofinal*0.10;
					precioimpuesto=preciofinal+ingresosbrutos;
					alert("Usted pago "+precioimpuesto+"donde "+ingresosbrutos+" son ingresos brutos" );

				}

				document.getElementById("txtIdprecioDescuento").value=preciofinal;
 			
 				
}*/

/*
{
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    let mensaje;
    let preciototal;
    
    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;
    descuento=1;
    
    if(cantidadLamparas>=6)
    {
        descuento=0.50;
    }
    else
    {
        if(cantidadLamparas==5)
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                descuento=0.60;
            }
            else
            {
                descuento=0.70;
            }
        }
        else
        {
            if(cantidadLamparas==4)
            {
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
                {
                    descuento=0.75;
                }
                else
                {
                    descuento=0.80;
                }
            }
            else
            {
                if(cantidadLamparas==3)
                {
                    if(marcaLamparas=="ArgentinaLuz")
                    {
                        descuento=0.85;
                    }
                    else
                    {
                        if(marcaLamparas=="FelipeLamparas")
                        {
                            descuento=0.90;
                        }
                        else
                        {
                            descuento=0.95;
                        }
                    }
                }
            }
        }
    }
    precioFinal=precioBruto*descuento;
    if(precioFinal>=120)
    {   
        ingresosBrutos=precioBruto*0.10;//la otra forma es calcularlo sobre el precioFinal directamente
        preciototal=precioFinal+ingresosBrutos;
        mensaje="Usted pago: "+preciototal+" donde: "+ingresosBrutos+"$ son ingresos brutos";
        alert(mensaje);
    }
    document.getElementById("txtIdprecioDescuento").value=precioFinal.toFixed(2);
}
*/
/*
{
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;
    let mensaje;
    let descuento;
    
    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;
    mensaje=parseInt(mensaje);
    
    switch(cantidadLamparas)
    {
            case 5:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                    descuento=0.60;
                    mensaje=precioBruto*descuento;
                    break;
                    default:
                    descuento=0.70;
                    mensaje=precioBruto*descuento;
                    break; 
                }
            break;
   
            case 4:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                    descuento=0.75;
                    mensaje=precioBruto*descuento;
                    break; 
                    default:
                    descuento=0.80;
                    mensaje=precioBruto*descuento;
                    break;   
                }
            break;    

            case 3:
                switch(marcaLamparas)
                {
                    case "ArgentinaLuz":
                    descuento=0.85;
                    mensaje=precioBruto*descuento;
                    break;
                    case "FelipeLamparas":
                    descuento=0.90;
                    mensaje=precioBruto*descuento;
                    break;
                    default:
                    descuento=0.95;
                    mensaje=precioBruto*descuento;
                    break;
                }
            break;    
            case 2:
            mensaje=precioBruto;
            break;
            case 1:
            mensaje=precioBruto;
            break;
            default:
            descuento=0.50;
            mensaje=precioBruto*descuento;
            break;

    }

    if(mensaje>=120)
        {
            ingresosbrutos=mensaje*0.10;
            precioimpuesto=mensaje+ingresosbrutos;
            alert("Usted pago "+precioimpuesto+"donde "+ingresosbrutos+" son ingresos brutos" );

        }
                        
        document.getElementById("txtIdprecioDescuento").value=mensaje.toFixed(2);
    
}
*/
{
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;
    let mensaje;
    let descuento;
    
    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;
    mensaje=parseInt(mensaje);
    
    if(cantidadLamparas>=6)
        {
            switch(marcaLamparas)
                {
                    default:
                    descuento=0.50;
                    mensaje=precioBruto*descuento;
                    break;
                }
        }
                    else
                        {
                            if(cantidadLamparas==5)
                                {
                                switch(marcaLamparas)
                                    {
                                        case "ArgentinaLuz":
                                        descuento=0.60;
                                        mensaje=precioBruto*descuento;
                                        break;
                                        default:
                                        descuento=0.70;
                                        mensaje=precioBruto*descuento;
                                        break; 
                                    }
                                }
                            if(cantidadLamparas==4)
                                {
                                    switch(marcaLamparas)
                                        {
                                            case "ArgentinaLuz":
                                            case "FelipeLamparas":
                                            descuento=0.75;
                                            mensaje=precioBruto*descuento;
                                            break; 
                                            default:
                                            descuento=0.80;
                                            mensaje=precioBruto*descuento;
                                            break;   
                                        }
                                }
                            if(cantidadLamparas==3)
                                {
                                    switch(marcaLamparas)
                                        {
                                            case "ArgentinaLuz":
                                            descuento=0.85;
                                            mensaje=precioBruto*descuento;
                                            break;
                                            case "FelipeLamparas":
                                            descuento=0.90;
                                            mensaje=precioBruto*descuento;
                                            break;
                                            default:
                                            descuento=0.95;
                                            mensaje=precioBruto*descuento;
                                            break;
                                        }
                                }
                            if(cantidadLamparas<=2)
                                {
                                    switch(marcaLamparas)
                                        {
                                            default:
                                            mensaje=precioBruto;
                                            break;
                                        }

                                }

                        }

    if(mensaje>=120)
        {
            ingresosbrutos=mensaje*0.10;
            precioimpuesto=mensaje+ingresosbrutos;
            alert("Usted pago "+precioimpuesto+"donde "+ingresosbrutos+" son ingresos brutos" );

        }
                        
        document.getElementById("txtIdprecioDescuento").value=mensaje.toFixed(2);
    
}




