/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

function mostrar()
{
	
	let tipo;
	let raza;
	let edad;
	let nombre;
	let i;
	let masViejoPerro;
	let masViejoGato;
	let masViejoOtros;
	let razaGatosMasCantidad;
	let promedio;
	let flagMascota;
	let nombreMasViejoPerro;
	let nombreMasViejoGato;
	let nombreMasViejoOtros;
	let contadorGato;
	let contadorPerro;
	let contadorOtros;
	let cantSiames;
	let cantTurco;
	let cantMestizo;
	let acumSiames;
	let acumTurco;
	let acumMestizo;

	i=true;
	flagMascota=true;
	masViejoPerro=0;
	contadorGato=0;
	contadorPerro=0;
	contadorOtros=0;
	masViejoPerro=0;
	masViejoGato=0;
	masViejoOtros=0;
	cantSiames=0;
	cantTurco=0;
	cantMestizo=0;
	acumSiames=0;
	acumTurco=0;
	acumMestizo=0;


	for(i=0;i<10;i++)
	{
		do{
			nombre=prompt("Ingresa el nombre de tu mascota");
		}while(!isNaN(nombre));
		do{
			tipo=prompt("Ingresa el tipo de mascota: (gato , perro y otros)").toLowerCase();
		}while(tipo!="gato" && tipo!="perro" && tipo!="otros");

		if(tipo=="perro"){
			do{
				raza=prompt("Ingresa la raza de tu mascota: (pastor, toy, callejero)").toLowerCase();
			}while(raza!="pastor" && raza!="toy" && raza!="callejero");
			do{
				edad=prompt("Ingresa la edad de tu mascota: (entre 1 y 20)");
				edad=parseInt(edad);
			}while(edad<1 || edad>20);
			if(edad>=masViejoPerro)
			{
				masViejoPerro=edad;
				nombreMasViejoPerro=nombre;
			}
			contadorPerro++;
		}
		if(tipo=="gato")
		{
			do{
				raza=prompt("Ingresa la raza de tu mascota: (siamés, turco, mestizo)").toLowerCase();
			}while(raza!="siames" && raza!="turco" && raza!="mestizo");
			do{
				edad=prompt("Ingresa la edad de tu mascota: (entre 1 y 20)");
				edad=parseInt(edad);				
			}while(edad<1 || edad>20);
			if(edad>=masViejoGato)
			{
				masViejoGato=edad;
				nombreMasViejoGato=nombre;
			}
			switch(raza)
    		{
    			case"siames":
    			cantSiames++;
    			acumSiames=acumSiames+edad;
    			break;
    			case"turco":
    			acumTurco=acumTurco+edad;
    			cantTurco++;
    			break;
    			case"mestizo":
    			acumMestizo=acumMestizo+edad;
    			cantMestizo++;
    			break;
    		}
			contadorGato++;	
		}
		if(tipo=="otros")
		{
			raza=prompt("Ingresa la raza de tu mascota:").toLowerCase()
			do{
				edad=prompt("Ingresa la edad de tu mascota: (entre 1 y 100)");
				edad=parseInt(edad);
			}while(edad<1 || edad>100);
			if(edad>=masViejoOtros)
			{
				masViejoOtros=edad;
				nombreMasViejoOtros=nombre;
			}
			contadorOtros++;
			}
		}
/*
		if(tipo=="perro")
		{
			do{
				edad=prompt("Ingresa la edad de tu mascota: (entre 1 y 20)");
				edad=parseInt(edad);
			}while(edad<1 || edad>20);
			if(edad>=masViejoPerro)
			{
				masViejoPerro=edad;
				nombreMasViejoPerro=nombre;
			}
			contadorPerro++;
		}
		if(tipo=="gato")
		{
			do{
				edad=prompt("Ingresa la edad de tu mascota: (entre 1 y 20)");
				edad=parseInt(edad);				
			}while(edad<1 || edad>20);
		if(edad>=masViejoGato)
			{
				masViejoGato=edad;
				nombreMasViejoGato=nombre;
			}
			switch(raza)
    		{
    			case"siames":
    			cantSiames++;
    			acumSiames=acumSiames+edad;
    			break;
    			case"turco":
    			acumTurco=acumTurco+edad;
    			cantTurco++;
    			break;
    			case"mestizo":
    			acumMestizo=acumMestizo+edad;
    			cantMestizo++;
    			break;
    		}
			contadorGato++;	
		}
		else
			{
			do{
				edad=prompt("Ingresa la edad de tu mascota: (entre 1 y 100)");
				edad=parseInt(edad);
			}while(edad<1 || edad>100);
			if(edad>=masViejoOtros)
			{
				masViejoOtros=edad;
				nombreMasViejoOtros=nombre;
			}
			contadorOtros++;
			}*/
	
	if(cantSiames>cantTurco&&cantSiames>cantMestizo)
	{
		razaMayor= "siamés";
		promedioEdad=acumSiames/cantSiames;
	}
	else if(cantTurco>cantPeterbeald&&cantidadTurco>cantMestizo)
	{
		razaMayor= "turco";
		promedioEdad=acumTurco/cantTurco;
	}
	else{
		razaMayor="mestizo";
		promedioEdad=acumMestizo/cantMestizo;
	}

	if(cantPerros!=0)
	{
		document.write("El perro mas viejo se llama "+nombreMasViejoPerro+".<br>");
	}

	if(cantOtros!=0)
	{
		document.write("De tipo otro, el mas viejo es un "+raza+" llamado "+nombreMasViejoOtros+".<br>");
	}
	if(cantGatos!=0)
	{
		document.write("El gato mas viejo se llama "+nombreMasViejoGato+".<br>");
		document.write("La raza de gatos con mas animales es "+razaMayor+" y el promedio de edad es de "+promedioEdad+" años.<br>");
	}

}