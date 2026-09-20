function sacar(valor: number): string {
    if (!Number.isInteger(valor) || valor <= 0) {
        return "Valor inválido.";
    }

    const cedulas = [100, 50, 20, 10, 5, 2];
    const usadas: number[] = [];
    let restante = valor;

    for (const cedula of cedulas) {
        while (restante >= cedula) {
            restante -= cedula;
            usadas.push(cedula);
        }
    }

    if (restante !== 0) {
        return "Valor recusado: não pode ser representado pelas cédulas disponíveis.";
    }

    return `Decomposição: ${usadas.join(", ")}`;
}

console.log("R$ 188:", sacar(188));
console.log("R$ 37:", sacar(37));
console.log("R$ 7:", sacar(7));