var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');


menuIcon.addEventListener('click',()=>{
     
   

        if (ul.classList.contains('ativo')) {
            ul.classList.remove('ativo');
        }else{
            ul.classList.add('ativo');
        }

})

function navegateToSection(sectionID){
    
}
//função da barra de pesquisa 
function search() {
    var query = document.getElementById('search-bar').value.toLowerCase();
    var results = document.getElementById('results');

    // Simulação de uma base de dados
    var data = [
        'Arduino',
        'Sensor de Proximidade',
        'Bateria de Litio',
        'Microcontrolador',
        'Sensor Ultrassonico',
        'Sensor de luz',
        'Capacitor'
    ];

    var matches = data.filter(function(item) {
        return item.toLowerCase().includes(query);
    });

    results.innerHTML = '';

    if (matches.length > 0) {
        matches.forEach(function(item) {
            var div = document.createElement('div');
            div.textContent = item;
            results.appendChild(div);
        });
    } else {
        results.innerHTML = 'Nenhum resultado encontrado.';
    }
}
//Fim da função da barra de pesquisa


// main.js

let cartCount = 0;

function addToCart(productName, productPrice) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    // Aqui você pode adicionar a lógica para armazenar os itens do carrinho
    // Pode ser usando localStorage, cookies ou enviando para o backend
}

// Função de pesquisa (apenas exemplo, você deve implementar a lógica)
function search() {
    const query = document.getElementById('search-bar').value;
    alert('Você pesquisou por: ' + query);
}

           //formulario 
           document.addEventListener('DOMContentLoaded', function() {
            const contatoForm = document.getElementById('contatoForm');
        
            if (contatoForm) {
                contatoForm.addEventListener('submit', function(event) {
                    event.preventDefault();
        
                    const nome = document.getElementById('nome').value;
                    const email = document.getElementById('email').value;
                    const mensagem = document.getElementById('mensagem').value;
        
                    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                        alert('Por favor, preencha todos os campos.');
                    } else {
                        alert('Mensagem enviada com sucesso! Te retornaremos em até 48 horas!');
                        contatoForm.reset();
                    }
                });
            } else {
                console.error('Elemento contatoForm não encontrado no DOM.');
            }
        });
        
    
    
    
    



  
     
      

