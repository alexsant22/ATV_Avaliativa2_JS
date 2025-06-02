function main() {
    let dataInput = document.getElementById("dataInput")
    let enviarBtn = document.getElementById("enviarBtn")
    let resultado = document.getElementById("resultado")

    if( dataInput instanceof HTMLInputElement && enviarBtn instanceof HTMLButtonElement && resultado instanceof HTMLParagraphElement) {
        try {
            let aniversarioInput = dataInput.value

            if(!validar(aniversarioInput)){
                throw new Error("Data em formato INVALIDO!! formato VALIDO(DD/MM/AAAA)")
            }
            const hoje = new Date()
            const aniversario = converter(aniversarioInput)
            let padraoDataBR = { day: '2-digit', month: '2-digit', year: 'numeric' };

            let idade = hoje.getFullYear() - aniversario.getFullYear();

            let mesDif = hoje.getMonth() - aniversario.getMonth()

            if(mesDif < 0 || (mesDif === 0 && hoje.getDate() < aniversario.getDate())) {
                throw new Error("Data de aniversario INVALIDA (data futura)")
            }
            exibirResultado(idade, resultado)

        } catch (error) {
            alert(error.message)
        }
        
    }
}

function validar(data) {
    let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    return regex.test(data)
}

function exibirResultado(idade, resultado) {
    resultado.textContent = `Possui ${idade} anos`
}

function converter(dataAniversario) {
    let data = new Date(dataAniversario);
    let padraoDataBR = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let dataFormatoBR = new Intl.DateTimeFormat('pt-BR', padraoDataBR);
    let dataFormatada = dataFormatoBR.format(data);
    return new Date(dataFormatada);
}

document.addEventListener("DOMContentLoaded",main)
