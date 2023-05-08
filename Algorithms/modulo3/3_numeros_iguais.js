import { question } from 'readline-sync'

function main(){

    // Entrada:

    const num1 = Number(question('Digite o primeiro numero: '))
    const num2 = Number(question('Digite o segundo numero: '))
    const num3 = Number(question('Digite o terceiro numero: '))

    // Processamento:

    if (num1 == num2 && num2 == num3) {
        console.log('Existem 3 números iguais')
    } else if (num1 == num2 || num2 == num3 || num1 == num3) {
        console.log('Existem 2 números iguais')
    } else {
        console.log('Todos os números são distintos')
    }
}

main()