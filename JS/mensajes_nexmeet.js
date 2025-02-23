document.addEventListener('DOMContentLoaded', function() {
    let userAmigos = ['Amigo 1', 
                        'Amigo 2', 
                        'Amigo 3']

    let Section = document.querySelector('.friendsContainer');

    function cargarAmigos(amigos)
    {
        Section.innerHTML="";
        amigos.forEach(userAmigos => {
            Section.innerHTML +=
            `<p>${userAmigos}</p>`;
            
        });
    }
    

    cargarAmigos(userAmigos);

})