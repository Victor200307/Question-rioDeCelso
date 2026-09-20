interface Familia {
    rendaPorPessoa: number;
    cadastroAtivo: boolean;
    possuiPessoaIdosa: boolean;
}

function analisarFamilia(familia: Familia): string {
    const elegivel = familia.rendaPorPessoa <= 706 && familia.cadastroAtivo;

    if (!elegivel) return "Não elegível";
    if (familia.possuiPessoaIdosa) return "Elegível - prioridade";
    return "Elegível - sem prioridade";
}

const familias: Familia[] = [
    { rendaPorPessoa: 700, cadastroAtivo: true, possuiPessoaIdosa: false },
    { rendaPorPessoa: 706, cadastroAtivo: true, possuiPessoaIdosa: true },
    { rendaPorPessoa: 707, cadastroAtivo: true, possuiPessoaIdosa: true },
    { rendaPorPessoa: 500, cadastroAtivo: false, possuiPessoaIdosa: true }
];

familias.forEach((familia, i) =>
    console.log(`Cenário ${i + 1}:`, analisarFamilia(familia))
);