console.log(datos);

for (let i = 0; i < datos.length; i++) {
    console.log(datos[i].calificacion);
}

for (const alumno of datos) {
    console.log(alumno.calificacion);
}

let tabTemp = [
    ["Huesca", 20.5, 10.5, 14.3],
    ["Zaragoza", 22.5, 12.5, 13.6],
    ["Teruel", 15.5, 5.4, 10.1],
    ["Lérida", 18.5, 4.5, 8.3]
];
console.log(tabTemp[0][2]);

for (let c = 0; c < tabTemp.length; c++) {
    for (let v = 0; v < tabTemp[c].length; v++) {
        console.log("Ciudad: "+c);
        console.log("Valor: "+v);
    }
}

for (const ciudad of tabTemp) {
    for (const valor of ciudad) {
        console.log(valor);
    }
}








