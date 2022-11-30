let tema = prompt("Desea consultar sobre siniestros, penal o sucesiones?");

switch (tema) {
    case "siniestros":
        alert("Deberá sacar turno con Emilio");
        break;

    case "penal":
        alert("Deberá sacar turno con Augusto");
        break;

    case "Sucesiones":
        alert("Deberá sacar turno con Jimena");
        break;

    default:
        alert("Si tiene dudas, escribanos mediante el canal de consultas");
        break;
}

let consulta = prompt("Cuantos minutos desea para su consulta?");
if (consulta > 30){
    alert ("Deberás abonar la consulta")
}
else{
    alert ("Tu consulta no tiene costo")
}

function restar (valorConsulta, descuentoAsegurado) {
    let resultado = valorConsulta - descuentoAsegurado;
    return resultado;
}
console.log(restar(5000-900));


