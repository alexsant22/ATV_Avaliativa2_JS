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
8 executa a main e ja exibe o '8'

3 dps de exibir o '8' da main, chama a função comDelay que ja exibe o '3'

4 é chamado por conta de estar na função comDelay apenas como console.log, sem ter que esperar nada por isso.

7 é chamado por conta que toda função comDelay ja foi acionada e voltou a seguir o curso da main onde tem uma 
Promise e um setTimeout e ele vem como apenas um console.log, sendo exibido de imediato

1

6

5

2
*/