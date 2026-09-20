function calcularDesconto(valor: number, institucional: boolean): number {
    let desconto = 0;

    if (valor > 600) {
        desconto = 15;
    } else if (valor > 300) {
        desconto = 10;
    } else if (valor > 100) {
        desconto = 5;
    }

    if (institucional) desconto += 3;
    if (desconto > 18) desconto = 18;

    return desconto;
}

function calcularValorFinal(valor: number, institucional: boolean): number {
    const percentual = calcularDesconto(valor, institucional);
    return valor * (1 - percentual / 100);
}

const testes = [
    { valor: 100, institucional: false },
    { valor: 100.01, institucional: false },
    { valor: 300, institucional: false },
    { valor: 300.01, institucional: true },
    { valor: 600, institucional: false },
    { valor: 600.01, institucional: true }
];

testes.forEach(t => {
    console.log(
        `R$ ${t.valor.toFixed(2)} | institucional=${t.institucional} | ` +
        `desconto=${calcularDesconto(t.valor, t.institucional)}% | ` +
        `final=R$ ${calcularValorFinal(t.valor, t.institucional).toFixed(2)}`
    );
});