// Função para alternar o menu hambúrguer
function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou esconder o menu
}

// Função para alternar o dropdown
function toggleDropdown(event) {
  event.preventDefault(); // Impede o comportamento padrão de navegação
  const dropdown = event.currentTarget.parentElement; // Pega o item de dropdown

  // Verifica se o menu hamburguer está aberto e permite alternar a visibilidade do dropdown
  if (window.innerWidth <= 768) {
    dropdown.classList.toggle('open'); // Alterna a classe 'open' no dropdown
  }
}

// Adicionar evento de clique para o menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  // Alterna a classe 'active' para o menu hambúrguer
  toggleMenu();
});

// Adicionar evento de clique para os itens de dropdown
const dropdownLinks = document.querySelectorAll('.nav .dropdown > a');
dropdownLinks.forEach(link => {
  link.addEventListener('click', toggleDropdown); // Alterna o dropdown ao clicar
});

// Fechar o menu hambúrguer ao clicar em um item de navegação
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    // Fecha o menu se ele estiver aberto
    if (nav.classList.contains('active')) {
      toggleMenu();
    }

    // Se o item de menu for um link de dropdown, fecha o submenu também
    const dropdown = link.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.remove('open');
    }
  });
});

// Fechar o dropdown se o usuário clicar fora dele (para melhor experiência em dispositivos móveis)
document.addEventListener('click', (event) => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target) && window.innerWidth <= 768) {
      dropdown.classList.remove('open'); // Fecha qualquer dropdown que não esteja sendo clicado
    }
  });
});



