const nomeInput = document.getElementById('nome');
const adicionarBtn = document.getElementById('adicionarBtn');
const duplasList = document.getElementById('duplas');

// Verificação de nulidade
if (!nomeInput || !adicionarBtn || !duplasList) {
  alert('Erro ao carregar elementos da página. Verifique o HTML.');
  throw new Error('Elementos do DOM não encontrados');
}

if (
  nomeInput instanceof HTMLInputElement &&
  adicionarBtn instanceof HTMLButtonElement
) {
  let nomes = [];

  adicionarBtn.addEventListener('click', () => {
    const entrada = nomeInput.value?.trim();

    if (!entrada) {
      alert('Por favor, insira um nome.');
      return;
    }

    const nomesInseridos = entrada.split(',').map((nome) => nome.trim());

    for (const nome of nomesInseridos) {
      // Validar se é um nome completo (nome + sobrenome)
      if (!/^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)+$/.test(nome)) {
        alert(
          `Nome inválido: "${nome}". Use nome e sobrenome, sem números ou símbolos.`
        );
        return;
      }

      // Verificar duplicidade (case-insensitive)
      const nomeJaExiste = nomes.some(
        (n) => n.toLowerCase() === nome.toLowerCase()
      );
      if (nomeJaExiste) {
        alert(`Nome duplicado: "${nome}".`);
        return;
      }

      nomes.push(nome);
    }

    nomeInput.value = '';

    if (nomes.length % 2 !== 0) {
      alert(
        'Número ímpar de participantes. Adicione mais um nome para formar as duplas.'
      );
      return;
    }

    sortearDuplas();
  });

  function sortearDuplas() {
    if (duplasList instanceof HTMLUListElement) {
      const nomesEmbaralhados = [...nomes].sort(() => Math.random() - 0.5);

      duplasList.innerHTML = '';

      for (let i = 0; i < nomesEmbaralhados.length; i += 2) {
        const dupla = `${nomesEmbaralhados[i]} e ${nomesEmbaralhados[i + 1]}`;
        const li = document.createElement('li');
        li.textContent = dupla;
        duplasList.appendChild(li);
      }

      nomes = [];
    }
  }
}
