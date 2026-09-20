interface Produto {
    nome: string;
    quantidade: number;
}

const estoque: Produto[] = [
    { nome: "Teclado", quantidade: 0 },
    { nome: "Mouse", quantidade: 3 },
    { nome: "Monitor", quantidade: 10 },
    { nome: "Cabo", quantidade: 4 },
    { nome: "Fone", quantidade: 8 }
];

let zerados = 0;
let abaixoDeCinco = 0;
let regulares = 0;

for (const produto of estoque) {
    if (produto.quantidade === 0) {
        console.log("Zerado:", produto.nome);
        zerados++;
    } else if (produto.quantidade < 5) {
        console.log("Abaixo de 5:", produto.nome);
        abaixoDeCinco++;
    } else {
        console.log("Regular:", produto.nome);
        regulares++;
    }
}

console.log({ zerados, abaixoDeCinco, regulares });