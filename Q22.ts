function fatorial(n: number): number | string {
    if (!Number.isInteger(n) || n < 0 || n > 15) {
        return "Erro: informe um inteiro entre 0 e 15.";
    }

    let resultado = 1;

    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("0! =", fatorial(0));
console.log("5! =", fatorial(5));
console.log("-1! =", fatorial(-1));
console.log("16! =", fatorial(16));
console.log("2.5! =", fatorial(2.5));