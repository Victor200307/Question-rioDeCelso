function calcularMedia(notas: number[]): string {
    if (notas.length !== 3) return "É necessário informar 3 notas.";

    for (const nota of notas) {
        if (nota < 0 || nota > 10) return "Nota inválida.";
    }

    const media = (notas[0] + notas[1] + notas[2]) / 3;

    if (media >= 7) return `Média ${media.toFixed(2)} - Aprovado`;
    if (media >= 5) return `Média ${media.toFixed(2)} - Recuperação`;
    return `Média ${media.toFixed(2)} - Reprovado`;
}

console.log(calcularMedia([0, 0, 0]));
console.log(calcularMedia([5, 5, 5]));
console.log(calcularMedia([7, 7, 7]));
console.log(calcularMedia([10, 10, 10]));
console.log(calcularMedia([10, 10, 11]));