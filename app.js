let tema = prompt("Desea consultar sobre siniestros, penal o sucesiones?");
let consulta = prompt("Cuantos minutos desea para su consulta?");
let resultado;
let ingresarNombre = prompt("Ingresar Nombre");
let i = 1;
let valorConsulta;
let descuentoAsegurado;

function restar(valorConsulta, descuentoAsegurado) {
    resultado = valorConsulta - descuentoAsegurado;
    return resultado;
}
console.log(restar(5000 - 900));


switch (tema) {
    case "siniestros":
        alert("Deberá sacar turno con Emilio");
        break;

    case "penal":
        alert("Deberá sacar turno con Augusto");
        break;

    case "sucesiones":
        alert("Deberá sacar turno con Jimena");
        break;

    default:
        alert("Si tiene dudas, escribanos mediante el canal de consultas");
        break;
}


if (consulta > 30) {
    alert("Deberás abonar la consulta")
}
else {
    alert("Tu consulta no tiene costo")
}



for (let i = 1; i <= 10; i++) {
    ingresarNombre = prompt("Ingresar Nombre");
    alert(" Turno N° " + i + "Nombre: " + ingresarNombre);
}

const servicios = [
    { nombreServicio: "Confección de contrato", precio: "5000" },
    { nombreServicio: "Asesoramiento legal", precio: "3000" },
    { nombreServicio: "Representación en juicio", precio: "10000" },
]

servicios.forEach((servicios) => {
    alert(servicios.nombreServicio);
    alert(servicios.precio)
})

const descuentos = ["Aseegurado", "Cliente"]


const carrito = [];
const total = servicios.concat(descuentos)
console.log(total)
