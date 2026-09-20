const consumo = [120, 130, 110, 150, 140, 100, 125];
let total = 0;

for (const valor of consumo) {
    total += valor;
}

const media = total / consumo.length;

let diasAcimaDaMedia = 0;

for (const valor of consumo) {
    if (valor > media) diasAcimaDaMedia++;
}

console.log("Total:", total);
console.log("Média:", media.toFixed(2));
console.log("Dias acima da média:", diasAcimaDaMedia);