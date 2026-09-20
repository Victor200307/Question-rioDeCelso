const leituras = [22, -5, 24, 999, 25];
const validas: number[] = [];

for (const leitura of leituras) {
    if (leitura === 999) {
        break;
    }
    if (leitura < 0) {
        continue;
    }
    validas.push(leitura);
}

let soma = 0;

for (const valor of validas) {
    soma += valor;
}

const media = validas.length > 0 ? soma / validas.length : 0;

console.log("Leituras válidas:", validas);
console.log("Média:", media.toFixed(2));