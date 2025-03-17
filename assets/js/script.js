const pagina = location.pathname;  
const contenedor = document.getElementById("propiedades-container");

if (contenedor) {
    let propiedades = [];
    if (pagina.includes("propiedades_venta.html")) {
        propiedades = propiedadesEnVenta;
    } else if (pagina.includes("propiedades_alquiler.html")) {
        propiedades = propiedadesEnAlquiler;
    }

    propiedades.forEach(propiedad => {
        contenedor.innerHTML += `
         <div class="col-md-4 mb-4">
            <div class="card" style="width: 20rem;">
            <div class="tarjeta-propiedad">
                <img src="${propiedad.imagen}" class="card-img-top w-100" alt="${propiedad.titulo}" style="height: 200px; object-fit: cover;">
                <h3>${propiedad.titulo}</h3>
                <p>${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                <p><i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                <p>${propiedad.fumar ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}</p>
                <p>${propiedad.mascotas ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}</p>
            </div>
        `;
    });
}
