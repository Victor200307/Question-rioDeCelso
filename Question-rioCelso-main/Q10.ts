type Cor = "vermelho" | "verde" | "amarelo";

function mensagemSemaforo(cor: Cor | string, sensorPedestre: boolean | null): string {
    if (sensorPedestre === null) {
        return "Sensor inconsistente: modo de segurança.";
    }

    switch (cor) {
        case "vermelho":
            return sensorPedestre
                ? "Veículos param; pedestres podem atravessar com segurança."
                : "Veículos param.";
        case "verde":
            return "Pedestres aguardam; veículos podem seguir.";
        case "amarelo":
            return "Preparar parada.";
        default:
            return "Cor desconhecida: modo de segurança.";
    }
}

console.log(mensagemSemaforo("vermelho", true));
console.log(mensagemSemaforo("verde", false));
console.log(mensagemSemaforo("amarelo", false));
console.log(mensagemSemaforo("verde", null));