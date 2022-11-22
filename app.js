let nombre = "Jeremias" // ese tipo de dato se llama string, que es una cadena de texto
let apellido = "Lopez"
let edad = "30" // este dato se llama number y no necesitan comillas
let alumno = true; // este dato se llama boolean - true or false

console.log (nombre + " " + apellido) //esto se llama CONCATENACION - es unir valores dados en variables
console.log (edad)
console.log (alumno)


let numero1 = Number(prompt("Ingrese un numero"));
let numero2 = Number(prompt("Ingrese otro numero"));
let resultado = numero1 + numero2;

alert(resultado);

/* OPERADORES LOGICOS
== igual / no confundir con = que es para asignarle un valor a una variable, por ej nombre = juan
!= distinto
> mayor a
< menor a

PODEMOS COMBINARLOS ASI POR EJ
>= mayor o igual a

OTRO EJEMPLO

&& and / y
// or / o


*/

/* EJEMPLO DE CONDICIONAL*/

let puntaje = 1000;

if (puntaje > 1000) {
    console.log ("Ganador")
} else {
    console.log ("Perdedor")
}

/* OTRO EJEMPLO COMBINANDO DOS VARIABLES */

let dinero = 600
let totalAPagar = 1000

if (dinero < totalAPagar) {
    console.log ("No se pudo realizar la compra")
} else {
    console.log ("Compra exitosa")
}

/* OTRO EJEMPLO */

let efectivo = 600;
let pagoTotal = 800;
let tarjeta = false;

if (dinero >= pagoTotal) {
    console.log ("Puedes pagar con efectivo")
} else if (tarjeta) {     /*PUEDO AGREGAR TANTOS ELSE IF COMO QUIERA PERO TOMA LO PRIMERO QUE DECLARO*/
    console.log ("Puedes pagar con tarjeta")
} 
else{
    console.log ("No puedes realizar la compra")
} 

/* EJEMPLO CON OR */

let cash = 500;
let credito = 400;
let total = 900;
let disponible = cash + credito;

if (
    cash > total ||       /* SI PASA ESTO, ESTO O AQUELLO, QUE SUCEDA TAL COSA */
    credito >= total ||
    disponible >= total
) {
    console.log ("Puedes realizar la compra")
} else {
    console.log ("Vuelva pronto")
}

/* EJEMPLO CON AND */

let nombreAlumno = prompt ("Ingrese su nombre");
let apellidoAlumno = prompt ("Ingrese su apellido");

if ((nombreAlumno != " ") && (apellidoAlumno != " ")){
    alert ("Nombre: "+nombreAlumno + "Apellido: " +apellidoAlumno)
} else{
    alert ("Error al ingresar datos")
}


