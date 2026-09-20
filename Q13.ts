function gerarTabuada(numero: number): void {
    if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
        console.log("Valor inválido. Informe um inteiro entre 1 e 100.");
        return;
    }
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    }
}
gerarTabuada(7);
gerarTabuada(0);
gerarTabuada(10.5);