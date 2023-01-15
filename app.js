let reclamante = document.querySelector("#nombretitular")
let patenteReclamante = document.querySelector("#patentetitular")
let seguroReclamante = document.querySelector("#segurotitular")
let tercero = document.querySelector("#nombretercero")
let seguroTercero = document.querySelector("#segurotercero")
let fechaSiniestro = document.querySelector("#fechasiniestro")
let lugarSiniestro = document.querySelector("#lugarsiniestro")
let formularioTitular = document.querySelector("#form-titular")
let botonReclamo = document.querySelector(".btn-reclamo")

const reclamo = []

botonReclamo.addEventListener("click", function(){
    Swal.fire({
        icon: 'success',
        title: 'Reclamo cargado con éxito',
      });
    })

    if(formularioTitular){
    formularioTitular.addEventListener("submit", (e) => {
    e.preventDefault()

    const reclamoCargado = {
        reclamante: `${reclamante.value}`,
        patenteReclamante: `${patenteReclamante.value}`,
        seguroReclamante: `${seguroReclamante.value}`,
        tercero: `${tercero.value}`,
        seguroTercero: `${seguroTercero.value}`,
        fechaSiniestro: `${fechaSiniestro.value}`,
        lugarSiniestro: `${lugarSiniestro.value}`,
        formularioTitular: `${formularioTitular.value}`,
    }

    reclamo.push(reclamoCargado)
    const aJson = JSON.stringify(reclamo)
    localStorage.setItem("reclamos", aJson)
})}

const servicios = [
    { nombre: "Familia", precio: 1000, id: 1 },
    { nombre: "Civil", precio: 2000, id: 2 },
    { nombre: "Laboral", precio: 1000, id: 3 },
    { nombre: "Penal", precio: 3000, id: 4 },
]

const botonAgregar = document.querySelectorAll(".btn-agregar")
addButton.forEach(el => {
    el.addEventListener("click", (e) => {
     agregarAlCarrito(e.target.id)
    })
});

const carrito = []

const agregarAlCarrito = (id) => {
    let nuevoServicio = servicios.find(p => p.id === parseInt(id))
    carrito.push(nuevoServicio)
    cargarCarrito(carrito)
    calcularTotalCompra()
} 

const tablaCarrito = (c)=> {
    return `<tr>
    <td class="elemento">${c.id} -</td>
    <td class="elemento">${c.nombre}</td>
    <td class="elemento">${c.precio}</td>
</tr>`
}
const cargarCarrito = (carrito)=> {
    let compra = ""
    if (carrito.length > 0){
        carrito.forEach(c => {
            compra += tablaCarrito(c)
        })
        tablaCarrito.innerHTML = compra
    }
}

