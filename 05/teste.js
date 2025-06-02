function comDelay() {
console.log("3"); //2
setTimeout(() => {
console.log("2"); //8
}, 2000);

Promise.resolve().then(() => {
console.log("1"); //5
});
console.log("4"); //3
}

function main() {
console.log("8"); //1
comDelay();
Promise.resolve().then(() => {
console.log("6"); //6
});

setTimeout(() => {
console.log("5"); //7
}, 1000);
console.log("7"); //4
}

main();

/*
Saída do número: "8" executa a main e ja exibe o '8'.

Saída do número: "3" dps de exibir o '8' da main, chama a função comDelay que ja exibe o '3'.

Saída do número: "4" é chamado por conta de estar na função comDelay apenas como console.log, sem ter que esperar nada por isso.

Saída do número: "7" é chamado por conta que toda função comDelay ja foi acionada e voltou a seguir o curso da main onde tem uma 
Promise e um setTimeout e ele vem como apenas um console.log, sendo exibido de imediato.

Saída do número: "1" microtask da Promise em comDelay após a função comDelay ser feita sem nenhum erro a Promise é acionada exibindo o '1'.

Saída do número: "6" microtask da Promise em main, onde os console.log de '8' e '7' e o setTimeout ja foi ativo na main deixando assim tudo
certo para a Promise exibir o '6'.

Saída do número: "5" macrotask de 1000, apenas exibindo após o tempo de 1 segundo de acordo com a main foi executada.

Saída do número: "2" macrotask de 2000, apenas exibindo após o tempo de 2 segundos de acordo com a comDelay foi executada.
*/