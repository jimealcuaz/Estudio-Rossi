let formularioTitular = document.querySelector("#form-titular")
let reclamante = document.querySelector("#nombretitular")
let patenteReclamante = document.querySelector("#patentetitular")
let seguroReclamante = document.querySelector("#segurotitular")
let tercero = document.querySelector
("#nombretercero")
let seguroTercero = document.querySelector("#segurotercero")
let fechaSiniestro = document.querySelector("#fechasiniestro")
let lugarSiniestro = document.querySelector("#lugarsiniestro")
let botonReclamo = document.querySelector(".btn-reclamo")

const reclamo = []

botonReclamo.addEventListener("click", function(){
    if(formularioTitular){
    formularioTitular.addEventListener("submit", (e) => {
    e.preventDefault()

    let reclamoCargado = {
        reclamante: `${reclamante.value}`,
        patenteReclamante: `${patenteReclamante.value}`,
        seguroReclamante: `${seguroReclamante.value}`,
        tercero: `${tercero.value}`,
        seguroTercero: `${seguroTercero.value}`,
        fechaSiniestro: `${fechaSiniestro.value}`,
        lugarSiniestro: `${lugarSiniestro.value}`
    }

    reclamo.push(reclamoCargado)
    const aJson = JSON.stringify(reclamo)
    localStorage.setItem("reclamos", aJson)
})}
    Swal.fire({
        icon: 'success',
        title: 'Reclamo cargado con éxito',
    });
    })

