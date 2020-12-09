

console.log(datos.length);
let numAlumno=0;
while ( numAlumno < datos.length ) { 
    // condicion equivalente (numAlumno <= 2)
    console.log("Páginas: "+datos[numAlumno].paginas);
    numAlumno++; //numAlumno = numAlumno + 1;
}

for (let numAlumno = 0; numAlumno < datos.length; numAlumno++) {
    console.log(datos[numAlumno].calificacion);
}


for (const alumno of datos) {
    let lista = document.createElement("ul");
    let elemento1 = document.createElement("li");
    let elemento2 = document.createElement("li");
    let elemento3 = document.createElement("li");
    elemento1.innerHTML = alumno.identificacionAlumno;
    elemento2.innerHTML = alumno.tiempo;
    elemento3.innerHTML = alumno.paginas;
    lista.appendChild(elemento1);
    lista.appendChild(elemento2);
    lista.appendChild(elemento3);
    document.body.appendChild(lista);
}

console.log("final");