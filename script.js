
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

function toggleContainer() {
    let textoCompleto = document.getElementById('container-projetos');
    let botao = document.getElementById('btn-explorar-projeos');
    
    // Se o texto está escondido (display: none)
    if (textoCompleto.style.display === 'none') {
        // Mostrar o texto
        textoCompleto.style.display = 'block';
        botao.textContent = 'Fechar';
        console.log("Container expandido!");
    } else {
        // Esconder o texto
        textoCompleto.style.display = 'none';
        botao.textContent = 'Ver projetos';
        console.log("Container recolhido!");
    }
}

// *Visto terem poucos projetos, a função de filtro foi desativada temporariamente no momento*
// *Função para filtrar projetos*

// function filtrarProjetos(categoria) {
//     console.log("Filtrando por:", categoria);
    
//     // Pegar todos os projetos
//     let projetos = document.querySelectorAll('.projeto');
    
//     // Pegar todos os botões de filtro
//     let botoes = document.querySelectorAll('.filtro-btn');
    
//     // Remover classe 'active' de todos os botões
//     botoes.forEach(function(botao) {
//         botao.classList.remove('active');
//     });
    
//     // Adicionar classe 'active' no botão clicado
//     event.target.classList.add('active');
    
//     // Mostrar/esconder projetos
//     projetos.forEach(function(projeto) {
//         if (categoria === 'todos') {
//             projeto.style.display = 'block';
//         } else if (projeto.classList.contains(categoria)) {
//             projeto.style.display = 'block';
//         } else {
//             projeto.style.display = 'none';
//         }
//     });
// }
