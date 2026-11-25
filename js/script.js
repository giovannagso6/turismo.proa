botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botao.setAttribute("aria-expanded", aberto);
  botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});