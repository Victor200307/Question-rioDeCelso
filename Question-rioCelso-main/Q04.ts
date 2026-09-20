type Perfil = "aluno" | "professor" | "coordenador";

function selecionarArea(perfil: Perfil | string): string {
    switch (perfil) {
        case "aluno":
            return "Área do aluno";
        case "professor":
            return "Área do professor";
        case "coordenador":
            return "Área do coordenador";
        default:
            return "Perfil desconhecido. Acesso negado.";
    }
}

console.log(selecionarArea("aluno"));
console.log(selecionarArea("professor"));
console.log(selecionarArea("coordenador"));
console.log(selecionarArea("visitante"));