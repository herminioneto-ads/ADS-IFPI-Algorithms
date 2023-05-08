import { question } from 'readline-sync'

function main(){

    // Entrada:
    
    const peso = Number(question('Digite o seu peso em kg: '))
    const altura = Number(question('Digite sua altura em cm: '))
    const idade = Number(question('Digite sua idade: '))

    // Processamento:

    const tmb_homem = calcular_tmb(peso, altura, idade)

    // Saída:

    console.log('Sua taxa de metabolismo basal é: ', tmb_homem)
}

function calcular_tmb(peso, altura, idade){
    const tmb = Math.floor(88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade))
    return tmb
}

main()