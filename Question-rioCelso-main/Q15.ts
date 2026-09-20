const opcoesSimuladas = [9, 1, 2, 3];
let indice = 0;
let opcao: number;

do {
    console.log("\n1 - Cadastrar");
    console.log("2 - Consultar");
    console.log("3 - Sair");

    opcao = opcoesSimuladas[indice++];
    console.log("Opção escolhida:", opcao);

    if (opcao === 1) {
        console.log("Cadastro selecionado.");
    } else if (opcao === 2) {
        console.log("Consulta selecionada.");
    } else if (opcao === 3) {
        console.log("Saindo...");
    } else {
        console.log("Opção inválida. O menu será repetido.");
    }
} while (opcao !== 3);