document.addEventListener('DOMContentLoaded', function() {
    let userComments = ['Comentario 1', 
                        'Comentario 2', 
                        'Comentario 3']

    let commentsSection = document.querySelector('.comments');

    function cargarComentarios(comentarios)
    {
        commentsSection.innerHTML="";
        comentarios.forEach(userComments => {
            commentsSection.innerHTML +=
            `<li>${userComments}</li>`;
            
        });
    }
    

    cargarComentarios(userComments);

})