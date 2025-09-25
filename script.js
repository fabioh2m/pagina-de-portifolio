// Quando a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada! Vamos começar...");
    
    // Vamos pegar o título principal da página
    let titulo = document.querySelector('header');
    console.log("Título encontrado:", titulo.textContent);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada!");
});

// Função para mostrar/esconder texto
function toggleTexto() {
    let textoCompleto = document.getElementById('texto-completo');
    let botao = document.getElementById('btn-saber-mais');
    
    // Se o texto está escondido (display: none)
    if (textoCompleto.style.display === 'none') {
        // Mostrar o texto
        textoCompleto.style.display = 'block';
        botao.textContent = 'Ver menos';
        console.log("Texto expandido!");
    } else {
        // Esconder o texto
        textoCompleto.style.display = 'none';
        botao.textContent = 'Ver mais';
        console.log("Texto recolhido!");
    }
}