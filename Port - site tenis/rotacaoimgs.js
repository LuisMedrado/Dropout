// Declaração da função

function alterarDisplay(id, display, animation) {
    document.getElementById(id).style.display = display;
    document.getElementById(id).style.animationName = animation;
  }
  
//  Call da função 

  function alternarImagens() {
    alterarDisplay('imagem1', 'block', 'tenis');
    setTimeout(() => alterarDisplay('imagem1', 'none',), 3000);
  
    setTimeout(() => {
      alterarDisplay('imagem2', 'block', 'tenis');
      setTimeout(() => alterarDisplay('imagem2', 'none'), 3000);
    }, 3000);
  
    setTimeout(() => {
      alterarDisplay('imagem3', 'block', 'tenis');
      setTimeout(() => alterarDisplay('imagem3', 'none'), 3000);
    }, 6000);
  
    setTimeout(() => {
      alterarDisplay('imagem4', 'block', 'tenis');
      setTimeout(() => alterarDisplay('imagem4', 'none'), 3000);
    }, 9000);
  
    setTimeout(() => {
      alterarDisplay('imagem5', 'block', 'tenis');
      setTimeout(() => alterarDisplay('imagem5', 'none'), 3000);
    }, 12000);
  
    setTimeout(alternarImagens, 15000);
  }
  
  // Iniciar o processo

  alternarImagens();
  