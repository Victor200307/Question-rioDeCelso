const reservados = ["A1", "B3", "C6", "E2"];

for (let fila = 0; fila < 5; fila++) {
    const letra = String.fromCharCode(65 + fila);
    let linha = "";

    for (let assento = 1; assento <= 6; assento++) {
        const codigo = `${letra}${assento}`;
        const estado = reservados.includes(codigo) ? "[X]" : "[ ]";
        linha += `${codigo}${estado} `;
    }
    console.log(linha);
}