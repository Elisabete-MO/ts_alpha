// Seleção dos elementos do DOM com tipagem
const form = document.getElementById("cadastroForm") as HTMLFormElement;
const nomeInput = document.getElementById("nome") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const senhaInput = document.getElementById("senha") as HTMLInputElement;

const nomeError = document.getElementById("nomeError") as HTMLSpanElement;
const emailError = document.getElementById("emailError") as HTMLSpanElement;
const senhaError = document.getElementById("senhaError") as HTMLSpanElement;

const modal = document.getElementById("modal") as HTMLDivElement;
const fecharModal = document.getElementById("fecharModal") as HTMLButtonElement;

// Funções de validação
function validarNome(nome: string): string | null {
  const nomeSemEspacos = nome.replace(/\s/g, "");
  if (nomeSemEspacos.length < 4) return "O nome deve ter no mínimo 4 caracteres.";
  if (!/^[A-Za-z\s]+$/.test(nome)) return "O nome deve conter apenas letras e espaços.";
  return null;
}

function validarEmail(email: string): string | null {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) return "E-mail inválido.";
  return null;
}

function validarSenha(senha: string): string | null {
  if (senha.length < 8) return "A senha deve ter no mínimo 8 caracteres.";
  if (!/[A-Za-z]/.test(senha) || !/\d/.test(senha)) {
    return "A senha deve conter pelo menos uma letra e um número.";
  }
  return null;
}

// Reset de mensagens de erro
function resetErros(): void {
  nomeError.textContent = "";
  emailError.textContent = "";
  senhaError.textContent = "";
}

// Exibe modal de sucesso
function mostrarModal(): void {
  modal.style.display = "block";
}

// Fecha modal
fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
  form.reset();
});

// Validação do formulário
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  resetErros();

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const senha = senhaInput.value;

  const erros: { [key: string]: string | null } = {
    nome: validarNome(nome),
    email: validarEmail(email),
    senha: validarSenha(senha),
  };

  let temErro = false;
  if (erros.nome) {
    nomeError.textContent = erros.nome;
    temErro = true;
  }
  if (erros.email) {
    emailError.textContent = erros.email;
    temErro = true;
  }
  if (erros.senha) {
    senhaError.textContent = erros.senha;
    temErro = true;
  }

  if (!temErro) {
    mostrarModal();
  }
});
