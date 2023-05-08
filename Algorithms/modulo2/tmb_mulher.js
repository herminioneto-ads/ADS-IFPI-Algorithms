import { question } from 'readline-sync'

function main(){

    // Entrada:
    
    const peso = Number(question('Digite o seu peso em kg: '))
    const altura = Number(question('Digite sua altura em cm: '))
    const idade = Number(question('Digite sua idade: '))

    // Processamento:

    const tmb_mulher = calcular_tmb(peso, altura, idade)

    // Saída:

    console.log('Sua taxa de metabolismo basal é: ', tmb_mulher)
}

function calcular_tmb(peso, altura, idade){
    const tmb = Math.floor(447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade))
    return tmb
}

main()