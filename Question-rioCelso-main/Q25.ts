const antes = [100, 200, 150, 0, 300, 500, 250, 400, 120, 180, 350, 220];
const depois = [90, 170, 140, 0, 250, 480, 220, 360, 120, 160, 300, 200];
let atingiramMeta = 0;

for (let i = 0; i < antes.length; i++) {
    if (antes[i] === 0) {
        console.log(`Residência ${i + 1}: percentual indisponível (consumo anterior = 0).`);
        continue;
    }
    const reducao = ((antes[i] - depois[i]) / antes[i]) * 100;
    const atingiu = reducao >= 10;

    if (atingiu) atingiramMeta++;

    console.log(
        `Residência ${i + 1}: redução = ${reducao.toFixed(2)}% | ` +
        `meta = ${atingiu ? "atingida" : "não atingida"}`
    );
}
console.log("Total que atingiu a meta:", atingiramMeta);