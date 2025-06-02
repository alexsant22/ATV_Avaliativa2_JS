let nomes = []

function exibir() {
    let duplas = document.getElementById('duplas');

    if (duplas instanceof HTMLUListElement) {
        nomes.forEach(valorAtualNomes => {
             let li = document.createElement('li');
      li.textContent = valorAtualNomes;
      duplas.appendChild(li);
        });
    }
}