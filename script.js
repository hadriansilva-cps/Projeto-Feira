document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    const confirmChoiceButton = document.getElementById('confirmChoice');
    const resultDiv = document.getElementById('result');
    const numeroMestre = 5; // O número mestre que nunca será eliminado
    let selectedNumbers = [];
  
    // Função para permitir ao usuário selecionar os números
    numbers.forEach(number => {
      number.addEventListener('click', function() {
        const numValue = parseInt(this.getAttribute('data-number'));
  
        // Se o número já foi selecionado, desmarcar
        if (selectedNumbers.includes(numValue)) {
          selectedNumbers = selectedNumbers.filter(n => n !== numValue);
          this.style.backgroundColor = '#2c3e50'; // Voltar à cor original
        } else if (numValue !== numeroMestre) { // Impedir a seleção do número mestre
          selectedNumbers.push(numValue);
          this.style.backgroundColor = '#f39c12'; // Destacar o número selecionado
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
            
            // Eliminar o número (tornar invisível)
            numberDiv.classList.add('hidden');
  
          });
  
          // Limpar a seleção
          selectedNumbers = [];
  
          // Verificar se restou apenas o número mestre
          const remainingNumbers = document.querySelectorAll('.number:not(.hidden)');
          if (remainingNumbers.length === 1 && parseInt(remainingNumbers[0].getAttribute('data-number')) === numeroMestre) {
            resultDiv.textContent = 'Você encontrou o número mestre!';
          } else {
            resultDiv.textContent = 'Números eliminados! Continue até sobrar apenas o número mestre.';
          }
        }, 1000); // Simular um pequeno atraso para a eliminação dos números
      } else {
        resultDiv.textContent = 'Por favor, selecione ao menos um número para eliminar.';
      }
    });
  });
  
  
  