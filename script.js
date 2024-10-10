document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    const startGameButton = document.getElementById('startGame');
    const resultDiv = document.getElementById('result');
    let selectedNumber = null;
    const numeroMestre = 5;
                            // seleciona um numero aleatorio num intervalo
    const numeroSelecionado = randomIntFromInterval(1, 9);
    console.log("numeroSelecionado: ", numeroSelecionado);
  
    // Função para iniciar o jogo
    startGameButton.addEventListener('click', function() {
      if (selectedNumber) {
        resultDiv.textContent = 'Contando... Aguarde...';
        
        setTimeout(() => {
          resultDiv.textContent = `O número final é ${numeroMestre}!`;
        }, 3000); // Simula o tempo de contagem
      } else {
        resultDiv.textContent = 'Por favor, selecione um número.';
      }
    });

    numbers.forEach(item => {
        const currentNumber = item.getAttribute('data-number');

        if (currentNumber == numeroSelecionado) {
            return;
        }

        item.classList.add("choose");
        item.addEventListener('click', function(){
            item.classList.add("fade");
        });
    });
    
  

    numbers.forEach(number => {
      number.addEventListener('click', function() {
        selectedNumber = this.getAttribute('data-number');
        resultDiv.textContent = `Você escolheu o número ${selectedNumber}. Clique em outro Numero.`

        numbers.forEach(n => n.style.backgroundColor = '#2c3e50');
        this.style.backgroundColor = '#f39c12';
      });
    });
  });

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  