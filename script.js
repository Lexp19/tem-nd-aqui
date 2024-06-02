const button = document.getElementById('bt_nao');
const container = document.getElementById('bg-box'); // ou outro elemento que você deseja que o botão apareça

button.addEventListener('click', () => {
  // Gerar posição aleatória para o botão
  const x = Math.random() * (container.offsetWidth - 50);
  const y = Math.random() * (container.offsetHeight - 50);

  // Adicionar o botão à página com a posição aleatória
  button.style.position = 'absolute';
  button.style.top = `${y}px`;
  button.style.left = `${x}px`;
});

document.getElementById("bt_sim").addEventListener("click", function() {
    var div = document.getElementById("cl-sim");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "flex";
      } else {
        div.style.display = "none";
      }
    });