document.addEventListener('DOMContentLoaded', () => {
    const cargarAPIBtn = document.querySelector('#cargarAPI');
    cargarAPIBtn.addEventListener('click', obtenerJuegos);
});

function obtenerJuegos() {
    fetch('https://api.rawg.io/api/games?key=d5418abfa6cc4ac8b9b1abd51ef2f0e6')
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarHTML(resultado.results);
        })
        .catch(error => console.log('Error:', error));
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('#contenido');

    let html = '';
    datos.forEach(perfil => {
        const { name, background_image, rating, released } = perfil;

        html += `
            <div class="tarjeta">
                <h2>${name || 'Nombre no disponible'}</h2>
                <a href="${background_image || '#'}" target="_blank">
                    <img src="${background_image || 'https://via.placeholder.com/400x200'}" alt="Imagen de ${name || 'Juego'}">
                </a>
                <p><strong>Rating:</strong> ${rating || 'No disponible'}</p>
                <p><strong>Fecha de lanzamiento:</strong> ${released || 'No disponible'}</p>
            </div>
        `;
    });

    contenido.innerHTML = html;
}
