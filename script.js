<script>
    function verificarResposta(resposta) {
      var mensagem = document.getElementById('mensagem');

      if (resposta === 'C') {
        mensagem.textContent = 'Você acertou! Pode avançar duas casas.';
        // Lógica para avançar duas casas aqui
      } else {
        mensagem.textContent = 'Você errou! Volte cinco casas.';
        // Lógica para voltar duas casas aqui
      }
    }
  </script>