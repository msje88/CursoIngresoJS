/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
	let pais;
	let continente;
	let cantidadHabitantes;
	let temperaturaMinima;
	let i;
	let flagPais;
	let temperaturasPares;
	let paisMenosHab;
	let temperaturaPaisMasFrio;
	let paisMasFrio;
	let temperaturaBajoCero;
	let paisMenosMillones;
	let acumuladorHabitantes;
	let promedioHabitantes;
	let mensaje;

	temperaturaPaisMasFrio=51;
	temperaturaBajoCero=0;
	paisMenosMillones=0;
	temperaturasPares=0;
	acumuladorHabitantes=0;
	flagPais=true;


	for(i=0;i<5;i++)
	{
		do{
			continente=prompt("Ingresa el nombre del continente:(America, Asia o Europa)").toLowerCase();
			
		}while(continente!="america" && continente!="asia" && continente!="europa");
		
			pais=prompt("Ingresa el nombre del paisdel continente elegido:");
		
		do{
			cantidadHabitantes=prompt("Ingresa cantidad de habitantes en millones del pais:(entre 1 y 2000)");
			cantidadHabitantes=parseInt(cantidadHabitantes);
		}while(cantidadHabitantes<1 || cantidadHabitantes>2000);
		do{
			temperaturaMinima=prompt("Ingresa la temperatura minima en grados celsius que registra el pais:(entre -50 y 50)");
			temperaturaMinima=parseInt(temperaturaMinima);
		}while(temperaturaMinima<-50 || temperaturaMinima>50);		
	
		

		if(temperaturaMinima%2==0)
			{
				temperaturasPares++;
			}
		if(temperaturaMinima<temperaturaPaisMasFrio)
			{
			temperaturaPaisMasFrio=temperaturaMinima;
			paisMasFrio=pais;
			}
		if(continente=="america" && temperaturaMinima<0)
			{				
				temperaturaBajoCero++;
			}
		if(flagPais==true)
			{
				paisMenosMillones=cantidadHabitantes;
				paisMenosHab=pais;
				flagPais=false;
			}
		else{
			if(cantidadHabitantes<paisMenosMillones)
			{
				paisMenosMillones=cantidadHabitantes;
				paisMenosHab=pais;
			}
		}
		acumuladorHabitantes+=cantidadHabitantes;
	}

	promedioHabitantes=acumuladorHabitantes/i;

	mensaje="La cantidad de temperaturas pares es: "+temperaturasPares;
	mensaje+=" El nombre del pais con menos habitantes es: "+paisMenosHab;
	mensaje+=" la cantidad de paises de america que tienen menos de 0 grados son: "+temperaturaBajoCero;
	mensaje+=" el promedio de habitantes entre los paises ingresados es: "+promedioHabitantes;
	mensaje+=" la temperatura mínima ingresada es: "+temperaturaPaisMasFrio+" y el nombre del pais que registro esa temperatura es: "+paisMasFrio;

	alert(mensaje);

}