document.addEventListener("DOMContentLoaded", () => {
    
    var but = document.getElementById("btn-camera");
    var video = document.getElementById("content-video");
    var mediaDevices = navigator.mediaDevices;
    var startbutton = document.getElementById("btn-photo");
    var canvas = document.querySelector('#foto');
    //const imgUploader = document.querySelector("input[type=file]");
    var photo = document.querySelector('#img-camera');
    //video-content.muted = true;
    but.addEventListener("click", () => {

        // Accessing the user camera and video.
        mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {

                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);


    });



    function takepicture() {
        canvas.getContext('2d').drawImage(video, 0, 0, 100, 100);
        var data = canvas.toDataURL('../assets/foto.jpg');
        photo.setAttribute('src', data);
        photo.style.width = "300%"
        photo.style.heigth = "200%"
        photo.style.marginLeft = "0px";

        console.log(data);
        //doimgUploader.value = "../assets/foto.jpg";

    }

    startbutton.addEventListener('click', function (ev) {
        takepicture();
        ev.preventDefault();
    }, false);

    $("#btn-registrarme").on('click' ,function (){
        let usname= document.getElementById("username");
        let fullname = document.getElementById("fullname");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let birthday = document.getElementById("birthday");
        let country = document.getElementById("country");
        let password = document.getElementById("password");
        let cpassword = document.getElementById("confirmpassword");

        console.log("contraseña");
        console.log(password.value+"-"+cpassword.value);
        if(password.value == cpassword.value){
            //fullname,birthday,country,phone,username,email,password,role
            console.log("usuario creado");
            createUser(fullname.value, birthday.value, country.value, phone.value, usname.value,email.value, password.value, "1");
            console.log(localStorage.getItem("Users"));
        }else{
            alert("Asegurece que la confimacion sea igual a la contraseña");
        }
        

    })

});


function getUsers() {
    var storedList = localStorage.getItem('Users');
    if (storedList == null) {
        UsersList = [];

    } else {
        UsersList = JSON.parse(storedList);
    }
    return UsersList;
}

function createUser(fullname, birthday, country, username,email, password, role) {
    //fullname,birthday,country,phone,username,email,password,role
    UsersList = getUsers();
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