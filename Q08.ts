type Regiao = "N" | "NE" | "CO" | "SE" | "S";

function calcularFrete(regiao: Regiao, totalPedido: number): number {
    switch (regiao) {
        case "N": return 30;
        case "NE": return totalPedido > 500 ? 0 : 25;
        case "CO": return 20;
        case "SE": return totalPedido > 500 ? 0 : 15;
        case "S": return 18;
    }
}

const regioes: Regiao[] = ["N", "NE", "CO", "SE", "S"];
const totais = [500, 501];

for (const regiao of regioes) {
    for (const total of totais) {
        console.log(`${regiao} | R$ ${total}: frete R$ ${calcularFrete(regiao, total).toFixed(2)}`);
    }
}