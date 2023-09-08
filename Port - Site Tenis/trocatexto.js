// Array de textos
const textos = ["drops", "tênis", "estilos", "preços", "treinos", "jordan", "yeezy", "AF1", "dunks", "all star"];
let indiceAtual = 0;

// Função para atualizar o texto
function atualizarTexto() {
  document.getElementById("txtum").textContent = textos[indiceAtual];
  indiceAtual = (indiceAtual + 1) % textos.length;
}
atualizarTexto();
setInterval(atualizarTexto, 3000);