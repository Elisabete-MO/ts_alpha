function contarPalavras(texto: string): number {
  if (!texto.trim()) {
    return 0;
  }

  return texto.trim().split(/\s+/).length;
}

console.log(contarPalavras("Olá mundo"));               // 2
console.log(contarPalavras("TypeScript é muito legal")); // 4
console.log(contarPalavras("   muitos   espaços   "));   // 2
console.log(contarPalavras(""));                         // 0
