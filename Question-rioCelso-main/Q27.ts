function analisarSatisfacao(respostas: number[]): void {
    const frequencias = new Array<number>(11).fill(0);
    let soma = 0;
    let validas = 0;
    let invalidas = 0;

    for (const nota of respostas) {
        if (Number.isInteger(nota) && nota >= 0 && nota <= 10) {
            frequencias[nota]++;
            soma += nota;
            validas++;
        } else {
            invalidas++;
        }
    }

    console.log("Respostas inválidas:", invalidas);

    if (validas === 0) {
        console.log("Nenhuma resposta válida.");
        return;
    }

    console.log("Média válida:", (soma / validas).toFixed(2));

    for (let nota = 0; nota <= 10; nota++) {
        console.log(`Nota ${nota}: ${frequencias[nota]}`);
    }
}

analisarSatisfacao([10, 8, 7, 7, 11, -1, 5, 10]);