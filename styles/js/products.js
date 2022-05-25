
document.addEventListener('DOMContentLoaded', () => {
    $('#arroz').on('click', function () {
        const img = document.getElementById("inicio-img");
        img.src = '../styles/assets/rice.jpg';
 
    });

    $('#maiz').on('click', function () {
        const img = document.getElementById("inicio-img");
        img.src = '../styles/assets/corn.jpg';

    });
    $('#trigo').on('click', function () {
        const img = document.getElementById("inicio-img");
        img.src = '../styles/assets/TrigoC.jpg';

    });
    $('#azucar').on('click', function () {
        const img = document.getElementById("inicio-img");
        img.src = '../styles/assets/sugar.jpg';
;
    });
    $('#leche').on('click', function () {
        const img = document.getElementById("inicio-img");
        img.src = '../styles/assets/milk.jpg';

    });
    $('#lentejas').on('click', function () {
        const img = document.getElementById("inicio-img");
        img.src = '../styles/assets/lentejas.jpg';

    });
})