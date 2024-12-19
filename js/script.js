// Seleccionamos elementos necesarios
const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');

// Índice actual del carrusel
let currentIndex = 0;

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const width = images[0].clientWidth; // Ancho de una imagen
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    console.log(`Índice actual: ${currentIndex}, Transform aplicado: -${currentIndex * width}px`);
}

// Evento para la flecha izquierda
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1; // Mover hacia la izquierda
    } else {
        currentIndex = images.length - 1; // Volver al último
    }
    updateCarousel();
});

// Evento para la flecha derecha
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex += 1; // Mover hacia la derecha
    } else {
        currentIndex = 0; // Volver al primero
    }
    updateCarousel();
});

// Ajustar posición al redimensionar la ventana
window.addEventListener('resize', updateCarousel);
