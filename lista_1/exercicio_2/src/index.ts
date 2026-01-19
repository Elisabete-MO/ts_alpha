function contarPalavras(texto: string): number {
  if (!texto.trim()) {
    return 0;
  }

  return texto.trim().split(/\s+/).length;
}

console.log(
  "Frase: \"Olá Mundo\" \nTotal de palavras: " +
  contarPalavras("Olá mundo") +
  "\n"); // 2

console.log(
  "Frase: \"TypeScript é muito legal\" \nTotal de palavras: " +
  contarPalavras("TypeScript é muito legal") +
  "\n"); // 4

console.log(
  "Frase: \"   muitos   espaços  \" \nTotal de palavras: " +
  contarPalavras("   muitos   espaços   ") +
  "\n");   // 2

console.log(
  "Frase:  \" \" \nTotal de palavras: " +
  contarPalavras("") +
  "\n");  // 0