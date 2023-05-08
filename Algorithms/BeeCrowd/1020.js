import { question } from 'readline-sync'

function main(){
    //ENTRADA:
    const idade_dias = Number(question('informe dias: '))
    
    //PROCESSAMENTO:
    const anos = Math.floor(idade_dias / 365)
    const meses = Math.floor((idade_dias % 365) / 30)
    const dias = Math.floor((idade_dias % 365) % 30)
    
    //SAÍDA:
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)
}

main()