function fibonacci(n: number): number[] | string {
    if (!Number.isInteger(n) || n < 2 || n > 30) {
        return "Valor inválido. Informe n entre 2 e 30.";
    }

    const sequencia: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
        const proximo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximo);
    }
    return sequencia;
}

console.log("n=2:", fibonacci(2));
console.log("n=8:", fibonacci(8));
console.log("n=31:", fibonacci(31));