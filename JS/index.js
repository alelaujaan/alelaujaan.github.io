// Animación de desplazamiento suave
function navigateTo(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Animación de los botones al hacer clic
  document.querySelectorAll('.portfolio-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 300);
    });
  });
  