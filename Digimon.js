
let contenido = document.getElementById("contenido");
let tarjeta = document.getElementById("tarjeta")

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then (resp => {
        crearTabla(resp)
    });
function crearTabla(resp){
    for(let datoTemporal of resp){
        contenido.innerHTML +=
        `
            <td><img src=${datoTemporal.img}></td>
             <th>${datoTemporal.name}</th>
            <td>${datoTemporal.level}</td>
        `;

    }
}
function capturaDato() {
    var nombre = document.getElementById("busqueda").value;
    nombre = nombre.toLowerCase();
    
    fetch('https://digimon-api.vercel.app/api/digimon/name/' + nombre)
        .then(response => response.json())
        .then(resp => {
            crearTarjeta(resp)
        })
};
    
    
    
function crearTarjeta(resp) {
    contenido.innerHTML = "";
    tarjeta.innerHTML = "";
    for (let datoTemporal of resp) {
    tarjeta.innerHTML +=
        `
        <div class="card text-white bg-dark mb-3" style="width: 20rem;" id="digicard">
            <img src="${datoTemporal.img}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${datoTemporal.name}</h5>
                <p class="card-text">${datoTemporal.level}</p>
            </div>
        </div>
    `
    const tablaEncabezado = document.getElementById("tabla-encabezado");
    tablaEncabezado.style.display = "none";
    }
}
