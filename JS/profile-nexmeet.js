document.addEventListener('DOMContentLoaded', function() {
    let userComments = ['Que evento tan mas padre y completo', 
                        'No recomiendo, el evento no cumple lo q dice', 
                        'Me quedaba super lejos']

    let commentsSection = document.querySelector('.comments');

    function cargarComentarios(comentarios)
    {
        commentsSection.innerHTML="";
        comentarios.forEach(userComments => {
            commentsSection.innerHTML +=
            `<li>${userComments}</li>`;
            
        });
    }

    let userFriends = ['Juan', 'Pedro', 'Maria', 'Luis', 'Ana'];
    let friendsSection = document.querySelector('#amigosUser');

    function cargarAmigos(amigos)
    {
        friendsSection.innerHTML="";
        amigos.forEach(userFriends => {
            friendsSection.innerHTML +=
            `<li>${userFriends}</li>`;
            
        });
    }

    cargarAmigos(userFriends);
    cargarComentarios(userComments);
    

})