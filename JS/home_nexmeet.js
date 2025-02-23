document.addEventListener("DOMContentLoaded", function () {
    const eventos = [
        { id: 1, categoria: "deportes", titulo: "Torneo de Baloncesto", img: "../IMG/deporte.jpg" },
        { id: 2, categoria: "musica", titulo: "Concierto Rock", img: "../IMG/musica.jpg" },
        { id: 3, categoria: "arte", titulo: "Exposición de Arte", img: "../IMG/arte.jpg" }
    ];

    const eventosFeed = document.getElementById("eventos-feed");
    const tags = document.querySelectorAll(".tag");

    // Cargar todos los eventos inicialmente
    function cargarEventos(eventosMostrados) {
        eventosFeed.innerHTML = "";
        eventosMostrados.forEach(evento => {
            eventosFeed.innerHTML += `
                <div class="evento">
                    <img src="${evento.img}" alt="${evento.titulo}">
                    <h3>${evento.titulo}</h3>
                </div>
            `;
        });
    }

    // Filtros según la categoría seleccionada
    tags.forEach(tag => {
        tag.addEventListener("click", function () {
            const categoria = tag.dataset.category;
            const eventosFiltrados = eventos.filter(e => e.categoria === categoria);
            cargarEventos(eventosFiltrados);
            
        });
    });



    // Mostrar sugerencias dinámicamente (se cambia cada 5 segundos)
    /*function mostrarSugerencias() {
        eventosSugeridos.innerHTML = "";
        const eventoAleatorio = eventos[Math.floor(Math.random() * eventos.length)];
        eventosSugeridos.innerHTML += `
            <div class="evento">
                <img src="${eventoAleatorio.img}" alt="${eventoAleatorio.titulo}">
                <h3>${eventoAleatorio.titulo}</h3>
            </div>
        `;
    }*/
    //setInterval(mostrarSugerencias, 5000);

    // Cargar eventos al inicio
    cargarEventos(eventos);
    //mostrarSugerencias();
});

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
