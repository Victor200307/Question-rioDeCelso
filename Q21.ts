function ehPrimo(numero: number): boolean {
    if (!Number.isInteger(numero) || numero <= 1) return false;

    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

[2, 7, 13, 1, 15, 25].forEach(numero => {
    console.log(numero, "->", ehPrimo(numero) ? "Primo" : "Composto/não primo");
});