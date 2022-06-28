
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

    startbutton.addEventListener('click', function(ev){
        takepicture();
      ev.preventDefault();
    }, false);

});