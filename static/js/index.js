document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem("Session");
    let usuarios = getUsers();

    

    if (username != null) {
        document.getElementById("session").innerHTML = '<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' + username + '</button><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"><li><a class="dropdown-item" href="#">Ver perfil</a></li><li><a id="btn-logout" class="dropdown-item" href="#">Cerrar sesion</a></li></ul></div>';
        let index = usuarios.filter(u => u.username == username);
        if (index[0].role == 0) {
            document.getElementById("dropAdmin").innerHTML = '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Administración </a> <ul class="dropdown-menu" aria-labelledby="navbarDropdown"> <li><a class="dropdown-item" href="admin.html">Productos</a></li></ul>'
        }

        document.getElementById("content-car").innerHTML = '<a id="car" href="car.html"> <svg fill="White" height="27" viewBox="0 0 30 27" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M1.39999 1.70001H6.60001" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.60001 1.70001L11 18.9" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M11.8 18.9H28.3" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#4F4F4F" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" fill=""/></svg> </a>';

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