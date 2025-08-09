// Inicializar Vanta.js cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del fondo animado
    VANTA.CELLS({
        el: "#fondo",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 4.00,
        size: 4,
        speed: 0.2,
        color1: 0x000c33,
        color2: 0x00d4ff,
    });
});

// Smooth scrolling para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función opcional para efectos adicionales al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Función para animar las secciones al entrar en vista
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las secciones
document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.secciones');
    
    secciones.forEach(seccion => {
        // Aplicar estilos iniciales para la animación
        seccion.style.opacity = '0';
        seccion.style.transform = 'translateY(30px)';
        seccion.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observar la sección
        observer.observe(seccion);
    });
});