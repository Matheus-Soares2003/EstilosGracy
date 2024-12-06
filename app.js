const burguer = document.querySelector(".burguer");
const navbar = document.querySelector(".navbar");

burguer.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

//IMAGEM AUTOMATICA
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel-image');
  let imageWidth = images[0].clientWidth; // Inicializa com a largura da primeira imagem
  let currentIndex = 0;

  // Função que ajusta a largura das imagens no carregamento ou redimensionamento da tela
  function updateImageWidth() {
      imageWidth = track.clientWidth; // Obtém a largura do contêiner
  }

  // Atualiza a largura das imagens ao redimensionar a tela
  window.addEventListener('resize', updateImageWidth);

  function slideImages() {
      currentIndex = (currentIndex + 1) % images.length; // Avança para a próxima imagem (loop)
      const translateX = -currentIndex * imageWidth; // Calcula o deslocamento horizontal
      track.style.transform = `translateX(${translateX}px)`; // Aplica a transformação
  }

  setInterval(slideImages, 3000); // Troca de imagem a cada 3 segundos

  updateImageWidth(); // Chama a função ao carregar a página
});

  const imageWidth = track.clientWidth; // Usando a largura do contêiner, em vez de imagens

  
  
  