function classificarConsumo(consumo: number): string {
    if (consumo < 0) return "Consumo inválido";
    if (consumo <= 100) return "Faixa 1";
    if (consumo <= 220) return "Faixa 2";
    return "Faixa 3";
}

console.log("0:", classificarConsumo(0));
console.log("100:", classificarConsumo(100));
console.log("101:", classificarConsumo(101));
console.log("220:", classificarConsumo(220));
console.log("221:", classificarConsumo(221));