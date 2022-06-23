
document.addEventListener('DOMContentLoaded', () => {
    $('#arroz').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/rice.jpg';
        //Mi compa aqui entre comillas agregue la información 
        document.getElementById("description-product").textContent = "arroz informacion";
        
    });

    $('#maiz').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/corn.jpg';
        document.getElementById("description-product").textContent = "maiz informacion";

    });
    $('#trigo').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/TrigoC.jpg';
        document.getElementById("description-product").textContent = "trigo informacion";

    });
    $('#azucar').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/sugar.jpg';
        document.getElementById("description-product").textContent = "azucar informacion";
;
    });
    $('#leche').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/milk.jpg';
        document.getElementById("description-product").textContent = "leche informacion";

    });
    $('#lentejas').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/lentejas.jpg';
        document.getElementById("description-product").textContent = "lentejas informacion";

    });
    $('#frijoles').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/beans.jpg';
        document.getElementById("description-product").textContent = "frijoles informacion";

    });
    $('#agua').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/agua.jpg';
        document.getElementById("description-product").textContent = "agua informacion";

    });
    $('#avena').on('click', function () {
        const img = document.getElementById("inicio-product-img");
        img.src = '../static/assets/avena.png';
        document.getElementById("description-product").textContent = "avena informacion";

    });
})