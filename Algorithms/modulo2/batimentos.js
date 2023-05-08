import { question } from 'readline-sync'

function main(){

    // Entrada:

    const idade = Number(question('Informe sua idade: '))

    // Processamento:

    const frequencia_cardiaca_max = 220 - idade

    const freq_min_ativ_moderada = calcular_freq_moderada_min(frequencia_cardiaca_max)
    const freq_max_ativ_moderada = calcular_freq_moderada_max(frequencia_cardiaca_max)

    const freq_min_ativ_intensa = calcular_freq_intensa_min(frequencia_cardiaca_max)
    const freq_max_ativ_intensa = calcular_freq_intensa_max(frequencia_cardiaca_max)

    // Saída:

    console.log('Se você pratica atividades físicas moderadas, sua frequência de batimentos ideal é de no mínimo', freq_min_ativ_moderada, 'bpm, e no máximo de', freq_max_ativ_moderada, 'bpm.')

    console.log('Se você pratica atividades físicas intensas, sua frequência de batimentos ideal é de no mínimo', freq_min_ativ_intensa, 'bpm, e no máximo de', freq_max_ativ_intensa, 'bpm.')
}

function calcular_freq_moderada_min(freq){
    const freq_min = freq * 0.5
    return freq_min
}

function calcular_freq_moderada_max(freq){
    const freq_max = freq * 0.7
    return freq_max
}

function calcular_freq_intensa_min(freq){
    const freq_min = freq * 0.7
    return freq_min
}

function calcular_freq_intensa_max(freq){
    const freq_max = (freq * 0.85).toFixed(2)
    return freq_max
}

main()