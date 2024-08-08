let slideIndex = 1; // Inicializa o índice do slide atual como 1
showSlides(slideIndex); // Exibe o slide inicial


// Função para avançar ou retroceder os slides
function plusSlides(n) {
    showSlides(slideIndex += n);// Atualiza o índice do slide e exibe o slide correspondente
}

// Função para mostrar um slide específico com base no índice fornecido
function currentSlide(n) {
    showSlides(slideIndex = n); // Define o índice do slide atual e exibe o slide correspondente
}

// Função para exibir slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Obtém todos os elementos com a classe "mySlides"
    
    // Se o índice do slide for maior que o número total de slides, redefine para 1
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Se o índice do slide for menor que 1, redefine para o último slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Exibe o slide atual (baseado no índice ajustado)
    slides[slideIndex - 1].style.display = "block";
}