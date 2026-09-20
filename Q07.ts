function ehBissexto(ano: number): boolean {
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
}

console.log("1900:", ehBissexto(1900));
console.log("2000:", ehBissexto(2000));
console.log("2024:", ehBissexto(2024));
console.log("2100:", ehBissexto(2100));