document.addEventListener("DOMContentLoaded", () => {
    let nomeInput = document.getElementById("nomeInput")
    let dataInput = document.getElementById("dataInput")
    let emailInput = document.getElementById("emailInput")
    let telefoneInput = document.getElementById("telefoneInput")
    let cpfInput = document.getElementById("cpfInput")
    let cursoInput = document.getElementById("cursoInput")

    if(nomeInput instanceof HTMLInputElement &&
        dataInput instanceof HTMLInputElement &&
        emailInput instanceof HTMLInputElement &&
        telefoneInput instanceof HTMLInputElement &&
        cpfInput instanceof HTMLInputElement &&
        cursoInput instanceof HTMLInputElement
    ) {
        criarAluno(nomeInput, dataInput, emailInput, telefoneInput, cpfInput, cursoInput)
    }
})

function criarAluno(nome, data, email, telefone, cpf, curso){
    let aluno = {
        nome: nome,
        data: data,
        email: email,
        telefone: telefone,
        cpf: cpf,
        curso: curso
    }

    return aluno
}