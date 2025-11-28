function carregarProdutos() {
  const lista = JSON.parse(localStorage.getItem("produtos")) || [];
  const container = document.getElementById("produtos-container");
  container.innerHTML = "";

  lista.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.imagem}" alt="${p.nome}">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <strong>R$ ${p.preco}</strong>
        <button onclick="window.location.href='https://wa.me/55NUMERO?text=Quero%20comprar%20o%20${p.nome}'">Comprar</button>
      </div>
    `;
  });
}

carregarProdutos();