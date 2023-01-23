const botonAddFam = document.querySelector("button#btn-agregar-fam");
const botonAddLab = document.querySelector("button#btn-agregar-lab");
const botonAddPen = document.querySelector("button#btn-agregar-pen");
const botonAddCiv = document.querySelector("button#btn-agregar-civ");

const divCarrito = document.getElementById("div-carrito");

const servicios = [
  { nombre: "Familia", precio: 1000, id: 1 },
  { nombre: "Civil", precio: 2000, id: 2 },
  { nombre: "Laboral", precio: 1000, id: 3 },
  { nombre: "Penal", precio: 3000, id: 4 },
];

const carrito = [];

botonAddFam.addEventListener("click", () => {
  carrito.push({
    id: servicios[0].id,
    servicio: servicios[0].nombre,
    precio: servicios[0].precio,
  });
});

botonAddCiv.addEventListener("click", () => {
  carrito.push({
    id: servicios[1].id,
    servicio: servicios[1].nombre,
    precio: servicios[1].precio,
  });
});

botonAddLab.addEventListener("click", () => {
  carrito.push({
    id: servicios[2].id,
    servicio: servicios[2].nombre,
    precio: servicios[2].precio,
  });
});

botonAddPen.addEventListener("click", () => {
  carrito.push({
    id: servicios[3].id,
    servicio: servicios[3].nombre,
    precio: servicios[3].precio,
  });
});

console.log(carrito)


let compra = carrito.forEach((s)=>{
    `
    <h1>${s.servicio}</h1>
    <h3>${s.precio}</h3>

    `
})
divCarrito.append = compra



let cargarCarrito = (array)=>{
    let compra = ""
    if(array.length>0){
        array.forEach((c)=>{

        })
    }
}


carrito.forEach(s=>{
    divCarrito.innerHTML = `
    <tbody>
    <tr>
      <th scope="row">${s.id}</th>
      <td>${s.servicio}</td>
      <td>${s.precio}</td>
    </tr>`
})