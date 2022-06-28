document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem("Session");
    let usuarios = getUsers();

    

    if (username != null) {
        document.getElementById("session").innerHTML = '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' + username + '</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Ver perfil</a></li><li><a id="btn-logout" class="dropdown-item" href="#">Cerrar sesion</a></li></ul></div>';
        let index = usuarios.filter(u => u.username == username);
        if (index[0].role == 0) {
            document.getElementById("dropAdmin").innerHTML = '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Administración </a> <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> <li><a class="dropdown-item" href="admin.html">Productos</a></li></ul>'
        }
    }

  


    $("#btn-logout").on('click', function () {
        localStorage.removeItem("Session");
        window.location.replace(location.protocol + '//' + document.domain + ':' + location.port + "/templates/index.html");
    })
})

function getUsers() {
    var storedList = localStorage.getItem('Users');
    if (storedList == null) {
        UsersList = [];

    } else {
        UsersList = JSON.parse(storedList);
    }
    return UsersList;
}