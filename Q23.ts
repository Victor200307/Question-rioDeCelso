const turmas: number[][] = [
    [7, 8, 9, 10],
    [5, 6, 7, 8],
    [9, 9, 10, 8]
];

let maiorNotaGeral = -Infinity;

for (let i = 0; i < turmas.length; i++) {
    let soma = 0;

    for (const nota of turmas[i]) {
        soma += nota;

        if (nota > maiorNotaGeral) {
            maiorNotaGeral = nota;
        }
    }

    const media = soma / turmas[i].length;
    console.log(`Turma ${i + 1}: média = ${media.toFixed(2)}`);
}

console.log("Maior nota geral:", maiorNotaGeral);