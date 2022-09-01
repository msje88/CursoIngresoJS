/*
Simulacro Sabados
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/

/*
VERSION NINJA
se pide la altura , 
la edad y 
la estacion del año en la que nacio(invierno,verano , otoño, primavera)


i) la nota y nombre de la persona mas alta
j) de los nacidos en otoño el primer varon
k) de los adolescente el nombre del mas bajo en altura
L) la estacion del año que mas alumnos nacieron
M) el sexo , nombre, edad y altura del primer aprobado
*/
function mostrar()
{
	let nota;
	let sexo;
	let nombre;
	let respuesta;
	let contadorNotasTotales;
	let acumuladorNotasTotales;
	let promedio;
	let flagNotaMasBaja;
	let notaMasBaja;
	let sexoNotaMasBaja;
	let nombreNotaMasBaja;
	let contadorVaronesNotaSeis;
	let flagPrimeraMujer;
	let notaPrimeraMujer;
	let nombrePrimeraMujer;
	let contadorMujeresAprobadas;
	let contadorVaronesDesaprobados;
	let contadorMujeresDesaprobadas;
	let sexoMasDesaprobado;
	let promedioAprobados;
	let promedioNotasMujeres;
	let acumuladorNotaVaronesAprobados;
	let acumuladorNotaMujeresAprobadas;


	respuesta=true;
	contadorNotasTotales=0;
	acumuladorNotasTotales=0;
	flagNotaMasBaja=true;
	contadorVaronesNotaSeis=0;
	flagPrimeraMujer=true;
	contadorMujeresAprobadas=0;
	contadorVaronesDesaprobados=0;
	contadorMujeresDesaprobadas=0;
	acumuladorNotaVaronesAprobados=0;
	acumuladorNotaMujeresAprobadas=0;


	while(respuesta)
	{
		do{
			nombre=prompt("Ingresa tu nombre:").toLowerCase();
		}while(isNaN(nombre)==false);
		do{
			sexo=prompt("Ingresa tu sexo: m(masculino) f(femenino)").toLowerCase();
		}while(isNaN(sexo)==false || sexo!="f" && sexo!="m");
		do{
			nota=prompt("Ingresa tu nota: (del 0 al 10)");
			nota=parseInt(nota);
		}while(isNaN(nota) || nota<0 || nota>10);

		contadorNotasTotales++;
		acumuladorNotasTotales+=nota;

		if(flagNotaMasBaja==true)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
			nombreNotaMasBaja=nombre;
			flagNotaMasBaja=false;
		}
		else
		{
			if(nota<notaMasBaja)
			{
				notaMasBaja=nota;
				sexoNotaMasBaja=sexo;
				nombreNotaMasBaja=nombre;
			}
		}
		if(sexo=="m" && nota>=6)
		{
			contadorVaronesNotaSeis++;
			acumuladorNotaVaronesAprobados+=nota;
		}
		if(flagPrimeraMujer=true && sexo=="f")
		{
			notaPrimeraMujer=nota;
			nombrePrimeraMujer=nombre;
			flagPrimeraMujer=false;
		}
		if(sexo=="f" && nota>=6)
		{
			contadorMujeresAprobadas++;
			acumuladorNotaMujeresAprobadas+=nota;
		}
		if(sexo=="m" && nota<=5)
		{
			contadorVaronesDesaprobados++;
		}
		if(sexo=="f" && nota<=5)
		{
			contadorMujeresDesaprobadas++;
		}

		respuesta=confirm("Desea continuar?");

	}

	if(contadorVaronesDesaprobados>contadorMujeresDesaprobadas)
	{
		sexoMasDesaprobado="Masculino";
	}
	else
	{
		sexoMasDesaprobado="Femenino";
	}
	if(contadorVaronesDesaprobados==0 || contadorMujeresDesaprobadas==0)
	{
		sexoMasDesaprobado="ninguno"
	}

	promedio=acumuladorNotasTotales/contadorNotasTotales;
	contadorTotalAprobados=contadorVaronesNotaSeis+contadorMujeresAprobadas;
	acumuladorTotalAprobados=acumuladorNotaVaronesAprobados+acumuladorNotaMujeresAprobadas;
	promedioAprobados=acumuladorTotalAprobados/contadorTotalAprobados;
	promedioNotasMujeres=acumuladorNotaMujeresAprobadas/contadorMujeresAprobadas;

	mensaje="El promedio de las notas totales es: "+promedio+".<br>";
	mensaje+=" La nota más baja es "+notaMasBaja+" y pertenece a "+nombreNotaMasBaja+" que es del sexo "+sexoNotaMasBaja+".<br>";
	mensaje+=" La cantidad de varones que su nota haya sido mayor o igual a 6: "+contadorVaronesNotaSeis+".<br>";
	mensaje+=" la nota de la primer mujer ingresada es "+notaPrimeraMujer+" y pertenece a "+nombrePrimeraMujer+".<br>";
	mensaje+=" cantidad de aprobados masculinos "+contadorVaronesNotaSeis+" cantidad de aprobados femeninos "+contadorMujeresAprobadas+".<br>";
	mensaje+=" el sexo que mas desaprobo fue "+sexoMasDesaprobado+".<br>";
	mensaje+=" el promedio de notas de los aprobados es "+promedioAprobados+".<br>";
	mensaje+=" el promedio de notas de las mujeres es "+promedioNotasMujeres+".<br>";

	document.write(mensaje);

}
















/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{	
	var nombre;
	var edad;
	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;
	alert("Usted se llama "+nombre+" y su edad es "+edad);

	
}*/

