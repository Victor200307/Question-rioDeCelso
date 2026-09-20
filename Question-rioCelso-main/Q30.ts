type Turno = "manhã" | "tarde" | "noite";

interface RegistroSala {
    sala: string;
    turno: Turno;
    leituras: number[];
}
interface RelatorioSala {
    sala: string;
    turno: Turno;
    total: number;
    media: number;
    classificacao: string;
}
function validarLeituras(leituras: number[]): boolean {
    for (const leitura of leituras) {
        if (leitura < 0 || leitura > 1000) return false;
    }
    return true;
}
function classificarConsumo(media: number): string {
    if (media < 50) return "Baixo";
    if (media < 100) return "Moderado";
    return "Alto";
}
function gerarRelatorio(registro: RegistroSala): RelatorioSala | null {
    if (registro.leituras.length === 0 || !validarLeituras(registro.leituras)) {
        return null;
    }
    let total = 0;
    for (const leitura of registro.leituras) {
        total += leitura;
    }
    const media = total / registro.leituras.length;
    return {
        sala: registro.sala,
        turno: registro.turno,
        total,
        media,
        classificacao: classificarConsumo(media)
    };
}
const registros: RegistroSala[] = [
    { sala: "101", turno: "manhã", leituras: [40, 45, 50, 55, 60] },
    { sala: "102", turno: "tarde", leituras: [80, 90, 100, 110, 120] },
    { sala: "103", turno: "noite", leituras: [30, 35, -5, 40, 45] },
    { sala: "104", turno: "manhã", leituras: [150, 140, 160, 170, 180] }
];

const relatorios: RelatorioSala[] = [];
for (const registro of registros) {
    const relatorio = gerarRelatorio(registro);
    if (relatorio !== null) {
        relatorios.push(relatorio);
        console.log(
            `Sala ${relatorio.sala} | turno ${relatorio.turno} | ` +
            `total=${relatorio.total} | média=${relatorio.media.toFixed(2)} | ` +
            `classificação=${relatorio.classificacao}`
        );
    } else {
        console.log(`Sala ${registro.sala}: leituras inválidas.`);
    }
}
if (relatorios.length > 0) {
    let maior = relatorios[0];
    for (const relatorio of relatorios) {
        if (relatorio.total > maior.total) {
            maior = relatorio;
        }
    }
    console.log(
        `Maior consumo: sala ${maior.sala}, total de ${maior.total}.`
    );
}