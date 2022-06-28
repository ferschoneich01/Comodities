
UsersList = [];
document.addEventListener('DOMContentLoaded', () => {
    //fullname,birthday,country,phone,username,email,password,role
    createUser("Fernando Schöneich", "22-05-2000", "Nicaragua", "2266-2688", "Admin","ferschoneich@gmail.com", "123456", "0");
    var users = getUsers();

    $('#btn-singIn').on('click', function () {
        const username = $("#username").val();
        const password = $("#password").val();
        var flag = 1;
        

        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                //usuario encontrado
                flag = 0;
                if (users[i].password == password) {
                    //contraseña correcta
                    alert("¡Bienvenido a NiCommodities!");
                    window.location.replace(location.protocol + '//' + document.domain + ':' + location.port+"/templates/index.html");
                    localStorage.setItem("Session",username);
                } else {
                    alert("contraseña incorrecta");
                    window.location.replace(location.protocol + '//' + document.domain + ':' + location.port+"/templates/login.html");
                }
            }
        }

        if (flag == 1) {
            alert("usuario no existe");
            window.location.replace(location.protocol + '//' + document.domain + ':' + location.port+"/templates/login.html");
        }
    });
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

function createUser(fullname, birthday, country,phone, username,email, password, role) {
    //fullname,birthday,country,phone,username,email,password,role
    var newUser = {
        fullname: fullname,
        birthday: birthday,
        country: country,
        phone: phone,
        username: username,
        email: email,
        password: password,
        role: role
    };

    UsersList.push(newUser);
    localStorage.setItem('Users', JSON.stringify(UsersList));

}

