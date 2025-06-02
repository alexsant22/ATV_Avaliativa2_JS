function main() {
    let textInput = document.getElementById("textInput")
    let contagem = document.getElementById("contagem")
    let enviarBtn = document.getElementById("enviarBtn")
    let resultado = document.getElementById("resultado")
    if (textInput instanceof HTMLInputElement && contagem instanceof HTMLParagraphElement && enviarBtn instanceof HTMLButtonElement) {
        textInput.addEventListener("keypress", () => {
            contarCaracteres(textInput.value, contagem)
        })
        enviarBtn.addEventListener("click", () => {
            exibirResultado(textInput.value, resultado)
        })
    }

}

function contarCaracteres(inputString, contagem) {
    let contValor = inputString.length + 1  
    

    if(contValor >= 70) {
         contagem.className = "textoVermelho"
         contagem.textContent = `${contValor} máximo de caracteres ultrapassado!`;
    } else {
        contagem.className = "textoPadrao"
        contagem.textContent = contValor
    }
}

function exibirResultado(inputString, resultado) {
    resultado.textContent = inputString.substring(0, 69)
}

document.addEventListener("DOMContentLoaded", main);