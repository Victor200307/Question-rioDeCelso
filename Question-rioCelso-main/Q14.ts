function simularLogin(tentativas: boolean[]): string {
    const MAX_TENTATIVAS = 3;
    let indice = 0;

    while (indice < MAX_TENTATIVAS && indice < tentativas.length) {
        if (tentativas[indice]) {
            return `Login realizado na tentativa ${indice + 1}.`;
        }
        console.log(`Tentativa ${indice + 1}: senha incorreta.`);
        indice++;
    }
    return "Acesso bloqueado após o limite de tentativas.";
}

console.log("Cenário de sucesso:");
console.log(simularLogin([false, true, false]));

console.log("Cenário de bloqueio:");
console.log(simularLogin([false, false, false]));