let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');

let desert_moon = document.getElementById('desert-moon');
let man = document.getElementById('man');

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  moon.style.top = value * 0.9 + 'px';
  text.style.top = 80 + value * -0.2 + '%';
  train.style.left = value * 1.5 + 'px';

  desert_moon.style.top = value * 0.3 + 'px';
  man.style.left = value * .6 + 'px';
});

// progress bar

// Función para calcular el valor del scroll
let calcscrollvalue = () => {
    let scrollProgress = document.getElementById('progress');
    let pos = document.documentElement.scrollTop;  // Posición actual del scroll
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Altura total de la página - altura de la ventana

    // Calculamos el porcentaje de desplazamiento
    let scrollValue = Math.round((pos * 100) / calcHeight);

    // Muestra el icono de scroll cuando estamos por debajo de 100px
    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    // Cambiar el color de fondo con el progreso del scroll
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;

    // Función para hacer scroll hacia el inicio de la página
    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
};

// Llamar a la función cada vez que se haga scroll o se cargue la página
window.onscroll = calcscrollvalue;
window.onload = calcscrollvalue;
