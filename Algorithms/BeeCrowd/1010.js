var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores1 = lines[0].split(' ').map(Number)
const valores2 = lines[1].split(' ').map(Number)

function main(){
    //ENTRADA:
    const codigo1 = (valores1[0])
    const qtd_pecas1 = (valores1[1])
    const valor_uni1 = (valores1[2])
    
    const codigo2 = (valores2[0])
    const qtd_pecas2 = (valores2[1])
    const valor_uni2 = (valores2[2])
    
    //PROCESSAMENTO:
    const valorp1 = qtd_pecas1 * valor_uni1
    const valorp2 = qtd_pecas2 * valor_uni2
    const total = valorp1 + valorp2
    
    //SAÍDA:
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
}

main()