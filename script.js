document.addEventListener('DOMContentLoaded', function() {
  const numbers = document.querySelectorAll('.number');
  const confirmChoiceButton = document.getElementById('confirmChoice');
  const resultDiv = document.getElementById('result');
  const numeroMestre = 5; // O número mestre que nunca será eliminado
  let selectedNumbers = []; // Armazena os números selecionados

  // Função para permitir ao usuário selecionar os números
  numbers.forEach(number => {
      number.addEventListener('click', function() {
          const numValue = parseInt(this.getAttribute('data-number'));

          // Se o número já foi selecionado, desmarcar
          if (selectedNumbers.includes(numValue)) {
              selectedNumbers = selectedNumbers.filter(n => n !== numValue);
              this.classList.remove('clicked'); // Remove a classe de clique
          } else {
              // Verifica se já há 3 números selecionados
              if (selectedNumbers.length < 1) {
                  selectedNumbers.push(numValue);
                  this.classList.add('clicked'); // Adiciona a classe de clique
              } else {
                  // Aviso se tentar selecionar mais de 3 números
                  resultDiv.textContent = 'Você só pode selecionar até 1 números!';
              }
          }
      });
  });

  // Função para eliminar os números selecionados
  confirmChoiceButton.addEventListener('click', function() {
      if (selectedNumbers.length > 0) {
          resultDiv.textContent = 'Eliminando números selecionados...';

          setTimeout(() => {
              selectedNumbers.forEach(num => {
                  const numberDiv = document.querySelector(`.number[data-number="${num}"]`);
                  numberDiv.classList.add('hidden'); // Eliminar o número (tornar invisível)
              });

              // Limpar a seleção
              selectedNumbers = [];
              resultDiv.textContent = 'Números eliminados! Continue até sobrar apenas o número mestre.';
          }, 1000);
      } else {
          resultDiv.textContent = 'Por favor, selecione ao menos um número para eliminar.';
      }
  });
});







  
  
  