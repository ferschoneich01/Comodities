
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



    $('#arroz').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/rice.jpg';
        //Mi compa aqui entre comillas agregue la información 
        document.getElementById("description-product").textContent = "Es el grano de arroz al que se le ha quitado toda la cascara y fue pasado a traves de conos de blanquear especiales. Esproveniente de EEUU, Argentina, Uruguay o Brasil.";
        
    });

    $('#maiz').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/corn.jpg';
        document.getElementById("description-product").textContent = "Los maices blanco y amarillo son los cereales con el mayor volumen de produccion a nivel mundial, sus usos son diversos y van desde harinas a aceites. Su produccion en EEUU esta fundamentado en las caracteristicas ecological y sobre todo, climaticas, excelentes para su desarrollo.";

    });

    $('#trigo').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/TrigoC.jpg';
        document.getElementById("description-product").textContent = "El trigo Soft o blando se cultiva en una amplia region geografica del este de Estados Unidos, Argentina o Mexico donde conseguimos diversos patrones climaticos ideales para su crecimiento. Es ideal para su transformacion en Harinas blancas finas ideales para fermentar.";

    });

    $('#azucar').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/sugar.jpg';
        document.getElementById("description-product").textContent = "El azucar es el nombre comun por el cual se conoce a la sacarosa, siendo su formula quimica C12H22011, esta se encuentro compuesta por dos molecular, una de fructosa y la otra de glucose, por lo general la forma mas comun de obtenerla es a partir de la cana de azucar y la remolacha, mediante un proceso de cristalizacion del nectar de dichas plantas.";
;
    });

    $('#leche').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/milk.jpg';
        document.getElementById("description-product").textContent = "Es una composicion de la leche totalmente deshidratada, cuyo contenido en agua es igual o inferior a un 5% en peso del producto final. Se obtiene mediante la deshidratacion de la leche natural entera, total o parcialmente desnatada. Al ser menos perecedera, genera mayor practicidad al transportarla cuya vida util significativamente mas larga que la leche pasteurizada.";

    });

    $('#lentejas').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/lentejas.jpg';
        document.getElementById("description-product").textContent = "Las lentejas es un alimento con una alta concentracion de nutrientes y se caracteriza por sus proteinas vegetales. En America se encuentro el mayor exportador y Canada es su region mas importante de produccion.";

    });

    $('#frijoles').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/beans.jpg';
        document.getElementById("description-product").textContent = "Los frijoles como todas las leguminosas son buena fuente de proteina, minerales y fibras. En Latinoamerica gozan de alta popularidad y variedad de formas de preparacion. Dependiendo de la cosecha son exportadas de Argentina o China.";

    });
/*Borra el agua que solo queden los otros productos*/ 
    $('#agua').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/agua.jpg';
        document.getElementById("description-product").textContent = "agua informacion";

    });

    $('#avena').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/avena.png';
        document.getElementById("description-product").textContent = "Es un cereal rico en proteinas de alto valor biologico, grasas y un gran numero de vitaminas y minerales con mayor proporcion de grasa vegetal, con un 54 % de grasas no saturadas y un 46 % de acido linoleico. Tambien contiene hidratos de carbono de facil absorcion, ademas de calcio, zinc, cobre, fosforo, hierro, magnesio, potasio, sodio; vitaminas Bl,  B2, B3, B6 y E. Ademas de su composicion, contiene una buena cantidad de fibras que contribuyen al buen funcionamiento intestinal y reduce los niveles de colesterol.";

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