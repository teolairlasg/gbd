for (const alumno of datos) {
    let lista = document.createElement("ul");
    document.body.appendChild(lista);
    for (const propiedad in alumno) {
        let elemento = document.createElement("li");
        elemento.innerHTML = propiedad+ ": " + alumno[propiedad];
        lista.appendChild(elemento);
    }
}

//Modificad el programa para que sean listas anidadas.
// * Alumno (acg63):
//      - tiempo: 1898
//      - ...
// * Alumno (adf73):
//      - tiempo: 180
//      - ...
// * Alumno...
