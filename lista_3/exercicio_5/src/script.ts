interface DogImage {
  id: string;
  url: string;
}

const API_KEY: string = "SUA_API_KEY_AQUI";
const LIMITE_API: number = 100;
const IMAGENS_POR_PAGINA: number = 10;

/* Elementos DOM */
const inputQuantidade = document.getElementById("quantidade") as HTMLInputElement;
const btnBuscar = document.getElementById("buscar") as HTMLButtonElement;
const btnLimpar = document.getElementById("limpar") as HTMLButtonElement;
const galeria = document.getElementById("galeria") as HTMLDivElement;
const paginacao = document.getElementById("paginacao") as HTMLDivElement;

const modalImagem = document.getElementById("modalImagem") as HTMLDivElement;
const imagemModal = document.getElementById("imagemModal") as HTMLImageElement;

const modalErro = document.getElementById("modalErro") as HTMLDivElement;
const mensagemErro = document.getElementById("mensagemErro") as HTMLParagraphElement;

/* Estado da aplicação */
let quantidadeTotal: number = 0;
let totalPaginas: number = 0;
let paginaAtual: number = 1;
let imagens: DogImage[] = [];

/* ===================== VALIDAÇÃO ===================== */
function validarQuantidade(valor: number): boolean {
  if (!Number.isInteger(valor) || valor <= 0 || valor > LIMITE_API) {
    mostrarErro(`Informe um número inteiro entre 1 e ${LIMITE_API}.`);
    return false;
  }
  return true;
}

function mostrarErro(msg: string): void {
  mensagemErro.textContent = msg;
  modalErro.style.display = "flex";
}

modalErro.addEventListener("click", () => {
  modalErro.style.display = "none";
});

/* ===================== GALERIA ===================== */
function renderizarGaleria(): void {
  galeria.innerHTML = "";

  imagens.forEach((img) => {
    const elemento = document.createElement("img");
    elemento.src = img.url;
    elemento.alt = "Cachorro";
    elemento.classList.add("dog-image");

    elemento.addEventListener("click", () =>
      abrirModalImagem(img.url)
    );

    galeria.appendChild(elemento);
  });
}

/* ===================== PAGINAÇÃO ===================== */
function renderizarPaginacao(): void {
  paginacao.innerHTML = "";

  if (totalPaginas <= 1) return;

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Página ${i}`;

    if (i === paginaAtual) {
      btn.disabled = true;
    }

    btn.addEventListener("click", () => {
      paginaAtual = i;
      buscarImagensPagina(paginaAtual);
      renderizarPaginacao();
    });

    paginacao.appendChild(btn);
  }
}

/* ===================== API ===================== */
async function buscarImagensPagina(pagina: number): Promise<void> {
  try {
    const inicio = (pagina - 1) * IMAGENS_POR_PAGINA;
    const restante = quantidadeTotal - inicio;

    const limite =
      restante >= IMAGENS_POR_PAGINA
        ? IMAGENS_POR_PAGINA
        : restante;

    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?limit=${limite}&page=${pagina - 1}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    imagens = await response.json();
    renderizarGaleria();
  } catch {
    mostrarErro("Erro ao buscar imagens. Tente novamente.");
  }
}

/* ===================== MODAL IMAGEM ===================== */
function abrirModalImagem(url: string): void {
  imagemModal.src = url;
  modalImagem.style.display = "flex";
}

modalImagem.addEventListener("click", () => {
  modalImagem.style.display = "none";
});

/* ===================== EVENTOS ===================== */
btnBuscar.addEventListener("click", () => {
  const valor = Number(inputQuantidade.value);

  if (!validarQuantidade(valor)) return;

  quantidadeTotal = valor;
  totalPaginas = Math.ceil(quantidadeTotal / IMAGENS_POR_PAGINA);
  paginaAtual = 1;

  renderizarPaginacao();
  buscarImagensPagina(paginaAtual);
});

btnLimpar.addEventListener("click", () => {
  imagens = [];
  quantidadeTotal = 0;
  totalPaginas = 0;
  paginaAtual = 1;

  galeria.innerHTML = "";
  paginacao.innerHTML = "";
  inputQuantidade.value = "";
});
