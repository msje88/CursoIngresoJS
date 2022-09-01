/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/

function mostrar()
{
	let nombre;
	let carrera;
	let estadoCarrera;
	let genero;
	let nota;
	let flagAlumnos;
	let respuesta;
	let cantAlumnosProgramacion;
	let cantAlumnosPsicologia;
	let cantAlumnosDiseño;
	let cantAlumnosMujeres;
	let cantAlumnosNoBinarios;
	let cantAlumnosFinalizado;
	let acumuladorFinalizado;
	let mejorNotaNoBinario;
	let nombreMejorNotaNoBinario;
	let promedioNotaFinalizado;
	let carreraMasAlumnos;
	let mensaje;


	flagAlumnos=true;
	respuesta=true;
	acumuladorFinalizado=0;
	cantAlumnosProgramacion=0;
	cantAlumnosPsicologia=0;
	cantAlumnosDiseño=0;
	cantAlumnosMujeres=0;
	cantAlumnosNoBinarios=0;
	cantAlumnosFinalizado=0;




	while(respuesta){
		do{
			nombre=prompt("Ingrese su nombre:");
			carrera=prompt("Ingrese la carrera que esta cursando: (Programación, Psicología, Diseño gráfico)").toLowerCase();				
		}while(carrera!="programacion" && carrera!="psicologia" && carrera!="diseño grafico");
		do{
			estadoCarrera=prompt("Ingrese el estado de la carrera: (curso-abandono-finalizado)").toLowerCase();
		}while(estadoCarrera!="curso" && estadoCarrera!="abandono" && estadoCarrera!="finalizado");
		do{
			genero=prompt("Ingrese su genero: (femenino-masculino-nobinario)").toLowerCase();
		}while(genero!="femenino" && genero!="masculino" && genero!="nobinario");
		do{
			nota=prompt("Ingrese su nota: (entre 1 y 10)");
			nota=parseInt(nota);
		}while(nota<1 || nota>10);



		if(carrera=="programacion")
			{
				cantAlumnosProgramacion++;
			}else if(genero=="femenino")
				{
					cantAlumnosMujeres++;
				}
		if(carrera=="psicologia")
			{
				cantAlumnosPsicologia++;
			if(genero=="nobinario")
				{
					if(flagAlumnos==true)
						{
						mejorNotaNoBinario=nota;
						nombreMejorNotaNoBinario=nombre;
						flagAlumnos=false;
						}
					if(nota>mejorNotaNoBinario)
						{
						mejorNotaNoBinario=nota;
						nombreMejorNotaNoBinario=nombre;
						}
				}					
			}
		if(carrera=="diseño grafico")
			{
				cantAlumnosDiseño++;
			}
		if(genero=="nobinario")
			{
				cantAlumnosNoBinarios++;
			}
		if(estadoCarrera=="finalizado")
			{
				cantAlumnosFinalizado++;
				acumuladorFinalizado=acumuladorFinalizado+nota;
			} 		
			respuesta=confirm("Desea ingresar otro alumno?");
	}

	promedioNotaFinalizado=acumuladorFinalizado/cantAlumnosFinalizado;

	if(cantAlumnosProgramacion>cantAlumnosPsicologia && cantAlumnosProgramacion>cantAlumnosDiseño)
		{
			carreraMasAlumnos="programacion";
		}
	else if(cantAlumnosPsicologia>cantAlumnosDiseño)
		{
			carreraMasAlumnos="psicologia";
		}
	else
		{
			carreraMasAlumnos="diseño grafico";
		}

	mensaje="La cantidad total de que ingresaron es:  Programación "+cantAlumnosProgramacion+"  Psicología "+cantAlumnosPsicologia+"  Diseño gráfico "+cantAlumnosDiseño;
	mensaje+=" Cantidad total de mujeres que cursan la carrera de programación: "+cantAlumnosMujeres;
	mensaje+=" Cantidad de alumnos no binarios: "+cantAlumnosNoBinarios;
	mensaje+=" Promedio de notas de los alumnos finalizantes: "+promedioNotaFinalizado;
	mensaje+=" Nombre  del mejor alumno no binario en la carrera de psicología "+nombreMejorNotaNoBinario;
	mensaje+=" La carrera que tiene mas alunos es: "+carreraMasAlumnos;

	alert(mensaje);

}

