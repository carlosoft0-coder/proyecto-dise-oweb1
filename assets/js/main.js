// Botón del menú móvil.
const navToggle = document.querySelector('[data-menu-toggle]');
// Lista principal de enlaces.
const nav = document.querySelector('[data-nav]');
// Botón que abre el dropdown en móvil.
const dropdownToggle = document.querySelector('[data-dropdown-toggle]');
// Contenedor del dropdown.
const dropdown = document.querySelector('.dropdown');

// Abre y cierra el menú hamburguesa.
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open'); // Muestra u oculta el menú móvil.
    navToggle.setAttribute('aria-expanded', nav.classList.contains('open')); // Mejora accesibilidad.
  });
}

// En celular, evita navegar al link y abre solo el submenú.
if (dropdownToggle && dropdown) {
  dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 1040) {
      e.preventDefault(); // Detiene el salto de página en móvil.
      dropdown.classList.toggle('open'); // Abre o cierra el dropdown.
    }
  });
}

// Observa cuándo entra cada bloque a pantalla para animarlo.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible'); // Activa la animación.
  });
}, { threshold: 0.12 }); // 0.12 = se anima cuando se ve aprox. 12% del bloque.

// Registra todas las secciones que usan la clase reveal.
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Escribe automáticamente el año actual en el footer.
const yearNode = document.querySelector('[data-year]');
if (yearNode) yearNode.textContent = new Date().getFullYear();
