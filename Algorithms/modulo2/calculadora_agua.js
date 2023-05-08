import { question } from 'readline-sync'

function main(){

    // Entrada:

    const peso = Number(question('Digite o seu peso em kg: '))
    const atividade_diaria = question('Nivel de atividade diaria(moderada/intensa): ')

    // Processamento:

    const atividade_moderada = calcular_agua_moderada(peso)
    const atividade_intensa = calcular_agua_intensa(peso)

    // Saída:

    console.log('Se seu nivel de atividade é moderado, você deve ingerir', atividade_moderada, 'ml de água por dia.')
    console.log('Se seu nivel de atividade é intenso, você deve ingerir', atividade_intensa, 'ml de água por dia.')
}

function calcular_agua_moderada(pesagem){
    const qntd_agua = pesagem * 35
    return qntd_agua
}

function calcular_agua_intensa(pesagem){
    const qntd_agua = pesagem * 45
    return qntd_agua
}

main()