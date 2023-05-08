import { question } from 'readline-sync'

function main(){

    // Entrada:

    const duracao_do_curso = Number(question('Informe a duração do seu curso em anos: '))
    const valor_mensalidade = Number(question('Informe o valor da mensalidade do curso: '))
    const selic = Number(question('Informe o valor da taxa SELIC (%): ')) / 100
    const salario_min = Number(question('Informe o valor do salário mínimo vigente: '))
    const renda_familiar = Number(question('Informe o valor da sua renda familiar total em R$: '))
    const num_pessoas_familia = Number(question('Informe o número de pessoas da sua família: '))
    const ano_inicio = Number(question('Informe o ano de início do seu curso: '))
    const semestre_inicio = Number(question('Informe o semestre (1 ou 2) de início do seu curso: '))

    // Processamento:

    const habilitacao = verificar_habilitacao(renda_familiar, num_pessoas_familia, salario_min)
    const valor_financiado = calcular_valor_financiado(duracao_do_curso, valor_mensalidade)
    const valor_total_juros = calcular_valor_total_juros(duracao_do_curso, selic, renda_familiar, salario_min)
    const valor_total_a_pagar = calcular_valor_total_a_pagar(valor_financiado, valor_total_juros)
    const durante_curso_e_carencia = calcular_durante_curso_e_carencia(duracao_do_curso)
    const valor_parcela_financiamento_pos_carencia = calcular_valor_parcela_financiamento_pos_carencia(durante_curso_e_carencia, valor_total_juros, valor_financiado, duracao_do_curso)
    const renda_min_financiamento = calcular_renda_min_financiamento(valor_parcela_financiamento_pos_carencia)
    
    // Saída:

    console.log(habilitacao)
    console.log(`O valor a ser financiado é de R$ ${valor_financiado}`)
    console.log(`O juros total a ser pago é de R$ ${valor_total_juros}`)
    console.log(`O valor total a ser pago é de R$ ${valor_total_a_pagar}`)
    console.log(`O valor que deverá ser pago durante o curso e a carência é de R$ ${durante_curso_e_carencia}`)
    console.log(`O valor da parcela que você deve pagar após o período de carência é de R$ ${valor_parcela_financiamento_pos_carencia}`)
    console.log(`A renda mínima que você deverá ter para pagar as parcelas do financiamento é de R$ ${renda_min_financiamento}`)

}

function verificar_habilitacao(renda_familiar, num_pessoas_familia, salario_min){
    const aprovacao = renda_familiar / num_pessoas_familia

    if (aprovacao <= 3 * salario_min) {
        return 'VOCÊ ESTÁ HABILITADO PARA O FIES!'
    } else {
        return 'VOCÊ NÃO ESTÁ HABILITADO PARA O FIES'
    }
}

function calcular_valor_financiado(duracao_do_curso, valor_mensalidade){

    // Multiplica-se a duração do curso por 12 para transformar em meses:

    const valor_financiado = duracao_do_curso * 12 * valor_mensalidade

    return valor_financiado
}

function calcular_valor_total_juros(duracao_do_curso, selic, renda_familiar, salario_min){
    if (renda_familiar <= 1.5 * salario_min) {
        const juros = 0.1 * selic * duracao_do_curso
        return juros
    } else if (renda_familiar <= 2 * salario_min) {
        const juros = 0.15 * selic * duracao_do_curso
        return juros
    } else if (renda_familiar <= 2.5 * salario_min) {
        const juros = 0.2 * selic * duracao_do_curso
        return juros
    } else {
        return 0.25 * selic * duracao_do_curso
    }
}

function calcular_valor_total_a_pagar(valor_financiado, valor_total_juros){
    return valor_financiado + valor_total_juros
}

function calcular_durante_curso_e_carencia(duracao_do_curso){
    const qntd_meses = duracao_do_curso * 12
    const durante_curso = (qntd_meses / 3) * 150

    // Abaixo, o número 6 que multiplica o 150 vem da divisão dos 18 meses de carência por 3, já que a parcela de 150 só é cobrada a cada 3 meses:

    const curso_carencia = durante_curso + (6 * 150)

    return curso_carencia
}

function calcular_valor_parcela_financiamento_pos_carencia(durante_curso_e_carencia, valor_total_juros, valor_financiado, duracao_do_curso){
    const desconto_juros = valor_total_juros - durante_curso_e_carencia
    const valor_restante = valor_financiado + desconto_juros
    const tempo_max = duracao_do_curso * 12 * 4
    const parcela = valor_restante / tempo_max

    return parcela
}

function calcular_renda_min_financiamento(valor_parcela_financiamento_pos_carencia){
    const renda_min = 10 * valor_parcela_financiamento_pos_carencia

    return renda_min
}

main()