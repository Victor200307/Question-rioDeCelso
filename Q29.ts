function simularPagamento(
    dividaInicial: number,
    pagamentoMensal: number
): void {
    let saldo = Math.round(dividaInicial * 100) / 100;
    const jurosMensais = 0.01;
    let mes = 0;

    while (saldo > 0 && mes < 120) {
        mes++;
        const juros = Math.round(saldo * jurosMensais * 100) / 100;

// Se o pagamento não for maior que os juros,
// ele não consegue reduzir o saldo da dívida.

        if (pagamentoMensal <= juros) {
            console.log(
                `Mês ${mes}: pagamento insuficiente. ` +
                `Juros = R$ ${juros.toFixed(2)}.`
            );
            return;
        }
        saldo = Math.round((saldo + juros - pagamentoMensal) * 100) / 100;
        if (saldo < 0) saldo = 0;
        console.log(
            `Mês ${mes}: juros = R$ ${juros.toFixed(2)} | ` +
            `pagamento = R$ ${pagamentoMensal.toFixed(2)} | ` +
            `saldo = R$ ${saldo.toFixed(2)}`
        );
    }
    if (saldo === 0) {
        console.log(`Dívida quitada em ${mes} mês(es).`);
    } else {
        console.log("Limite de 120 meses atingido.");
    }
}
simularPagamento(500, 100);
simularPagamento(100, 1);