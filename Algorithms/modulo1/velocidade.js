import { question } from 'readline-sync'

// Entrada:

const velocidade_ms = Number(question('Insira uma velocidade em m/s: '))

// Processamento:

const velocidade_kmh = velocidade_ms * 3.6

// Saída:

console.log(velocidade_ms, 'm/s equivale a', velocidade_kmh, 'km/h')