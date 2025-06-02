function configurar() {
  const nomeInput = document.getElementById('nome');
  const adicionarBtn = document.getElementById('adicionarBtn');
  const duplasList = document.getElementById('duplas');

  if (!nomeInput || !adicionarBtn || !duplasList) {
    alert('Erro: elementos do DOM não encontrados.');
    return;
  }

  if (nomeInput instanceof HTMLInputElement) {
    adicionarBtn.addEventListener('click', () => {
      const entrada = nomeInput.value.trim();
      if (!entrada) {
        alert('Por favor, insira um nome.');
        return;
      }

      adicionarNomes(entrada, nomeInput);
    });
  }
}

let nomes = [];

function validarNome(nome) {
  // Nome completo (nome + sobrenome), sem números ou símbolos
  return /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)+$/.test(nome);
}

function nomeDuplicado(nome) {
  return nomes.some((n) => n.toLowerCase() === nome.toLowerCase());
}

function adicionarNomes(entrada, nomeInput) {
  const nomesInseridos = entrada.split(',').map((nome) => nome.trim());

  for (const nome of nomesInseridos) {
    if (!validarNome(nome)) {
      alert(
        `Nome inválido: "${nome}". Use nome e sobrenome, sem números ou símbolos.`
      );
      return;
    }

    if (nomeDuplicado(nome)) {
      alert(`Nome duplicado: "${nome}".`);
      return;
    }

    nomes.push(nome);
  }

  nomeInput.value = '';

  alert(`Nome(s) adicionados. Total: ${nomes.length}`);
}

function sortearDuplas(duplasList) {
  if (nomes.length < 2) {
    alert('Adicione pelo menos dois nomes.');
    return;
  }

  if (nomes.length % 2 !== 0) {
    alert('Número ímpar de participantes. Adicione mais um nome.');
    return;
  }

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

document.addEventListener('DOMContentLoaded', configurar);
