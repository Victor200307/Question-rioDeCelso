function classificarTriangulo(a: number, b: number, c: number): string {
    if (a <= 0 || b <= 0 || c <= 0) return "Medidas inválidas";

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não forma triângulo";
    }

    if (a === b && b === c) return "Equilátero";
    if (a === b || a === c || b === c) return "Isósceles";
    return "Escaleno";
}

console.log(classificarTriangulo(3, 3, 3));
console.log(classificarTriangulo(3, 3, 4));
console.log(classificarTriangulo(3, 4, 5));
console.log(classificarTriangulo(1, 2, 3));
console.log(classificarTriangulo(-1, 2, 2));