document.addEventListener('DOMContentLoaded', function() {
    let userComments = ['Evento 1, Chupar culos', 
                        'Evento 2, Llorar toda la noche', 
                        'Evento 3, Cantar canciones de señoras dolidas'];

    let commentsSection = document.querySelector('.comments');

    function cargarComentarios(comentarios)
    {
        commentsSection.innerHTML = "";
        comentarios.forEach(comment => {
            commentsSection.innerHTML += `<li>${comment}</li>`;
        });
    }

    let userFriends = ['Juan', 'Pedro', 'Maria', 'Luis', 'Ana'];
    let friendsSection = document.querySelector('#amigosUser');

    function cargarAmigos(amigos)
    {
        friendsSection.innerHTML = "";
        amigos.forEach(friend => {
            friendsSection.innerHTML += `<li>${friend}</li>`;
        });
    }

    cargarAmigos(userFriends);
    cargarComentarios(userComments);

    const editarPerfil = document.getElementById('editProfile');
    const editarPerfilContainer = document.getElementById('editarPerfilContainer');
    const closeEditarPerfil = document.getElementById('closeEditarPerfil');
    const cancelarPerfil = document.getElementById('cancelProfile');
    
    editarPerfil.addEventListener('click', ()=>{
        editarPerfilContainer.classList.add('open');
    });

    closeEditarPerfil.addEventListener('click', ()=>{
        editarPerfilContainer.classList.remove('open');
    });

    editarPerfilContainer.addEventListener('click', (event) => {
        if (event.target === editarPerfilContainer) {
            editarPerfilContainer.classList.remove('open');
        }
    });

    // Evita que el clic dentro del contenido del modal cierre el modal
    const modalContent = document.querySelector('.innerEditarPerfil');
    modalContent.addEventListener('click', (event) => {
        event.stopPropagation();  
    });

    cancelarPerfil.addEventListener('click', ()=>{
        editarPerfilContainer.classList.remove('open');
    });
});
