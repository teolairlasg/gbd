for (const alumno of datos) {
    let parrafo = document.createElement("p");
    document.body.appendChild(parrafo);
    for (const propiedad in alumno) {
        parrafo.innerHTML = parrafo.innerHTML + " " + alumno[propiedad];
    }
}
