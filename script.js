console.log('Script carregado com sucesso!');
// Função para scroll suave
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      history.pushState(null, null, targetId);
    });
  });
}

// Função para efeito no header ao rolar
function setupHeaderEffect() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(9, 19, 70, 0.9)';
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      header.style.backgroundColor = '#091346';
      header.style.boxShadow = 'none';
    }
  });
}

// Função para o botão "Voltar ao Topo"
function setupBackToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });
  
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Função para highlight do menu ativo
function setupActiveMenu() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Inicializa todas as funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  setupSmoothScroll();
  setupHeaderEffect();
  setupBackToTopButton();
  setupActiveMenu();
});