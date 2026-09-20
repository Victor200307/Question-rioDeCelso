function encontrarSequencia(valores: number[]): string {
    for (let i = 0; i <= valores.length - 3; i++) {
        if (valores[i] === valores[i + 1] && valores[i] === valores[i + 2]) {
            return `Padrão encontrado: valor ${valores[i]}, índice inicial ${i}.`;
        }
    }
    return "Padrão não encontrado.";
}
console.log(encontrarSequencia([1, 2, 4, 4, 4, 7]));
console.log(encontrarSequencia([1, 2, 3, 3, 4, 4, 4]));