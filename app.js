let reclamante = document.querySelector("#nombretitular")
let patenteReclamante = document.querySelector("#patentetitular")
let seguroReclamante = document.querySelector("#segurotitular")
let tercero = document.querySelector("#nombretercero")
let seguroTercero = document.querySelector("#segurotercero")
let fechaSiniestro = document.querySelector("#fechasiniestro")
let lugarSiniestro = document.querySelector("#lugarsiniestro")
let formularioTitular = document.querySelector("#form-titular")
const reclamo = [];

    formularioTitular.addEventListener("submit", (e)=>{
    e.preventDefault()
    formularioTitular.innerHTML = `
    <div class="alert alert-info" role="alert">
        <h3>RECLAMO CARGADO CON EXITO</h3>
        <p>Gracias ${reclamante.value} por cargar los datos del siniestro.</p>
    </div> 
    `
    })

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
