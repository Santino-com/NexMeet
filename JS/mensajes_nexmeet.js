document.addEventListener('DOMContentLoaded', function() {
    let userAmigos = [
        { nombre: 'Amigo 1', imagen: '../IMG/perfilPrueba.jpg' },
        { nombre: 'Amigo 2', imagen: '../IMG/perfilPrueba.jpg' },
        { nombre: 'Amigo 3', imagen: '../IMG/perfilPrueba.jpg' }
    ];
    let Section = document.querySelector('.friendsContainer');

    function cargarAmigos(amigos)
    {
        Section.innerHTML="";
        amigos.forEach(userAmigos => {
            Section.innerHTML +=
            `<div class="friend">
                <p>${userAmigos.nombre}<div class="amigosImg" style="background-image: url('${userAmigos.imagen}'); background-size: cover; bacground-position: center;"></div>
                </p><button type="button" class="moreInfoFriend" id="moreInfoFriend">:</button>
            </div>`;
        });
    }


    cargarAmigos(userAmigos);

    let openInfoFriend = document.getElementById(`moreInfoFriend`);
    let infoFriend = document.getElementById("friendTemplate");
    let closeInfoFriend = document.getElementById("closeInnerFriend");

    openInfoFriend.addEventListener('click', function () {
        infoFriend.classList.add('open');
    });

    closeInfoFriend.addEventListener('click', function () {
        infoFriend.classList.remove('open');
    });

})