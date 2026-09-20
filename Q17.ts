interface Estudante {
    matricula: number;
    nome: string;
}

const estudantes: Estudante[] = [
    { matricula: 101, nome: "Ana" },
    { matricula: 102, nome: "Bruno" },
    { matricula: 103, nome: "Carla" },
    { matricula: 104, nome: "Diego" },
    { matricula: 105, nome: "Elisa" }
];

function buscarMatricula(matricula: number): void {
    let encontrado = false;
    let iteracoes = 0;

    for (const estudante of estudantes) {
        iteracoes++;

        if (estudante.matricula === matricula) {
            encontrado = true;
            console.log(`Encontrado: ${estudante.nome}`);
            break;
        }
    }

    if (!encontrado) {
        console.log("Matrícula não encontrada.");
    }

    console.log("Iterações:", iteracoes);
}

buscarMatricula(103);
buscarMatricula(999);