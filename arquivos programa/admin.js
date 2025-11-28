function salvarProduto(){
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const imagem = document.getElementById("imagem").value;
  const descricao = document.getElementById("descricao").value;

  if(!nome || !preco || !imagem){
    alert("Preencha todos os campos!");
    return;
  }

  const lista = JSON.parse(localStorage.getItem("produtos")) || [];

  lista.push({ nome, preco, imagem, descricao });

  localStorage.setItem("produtos", JSON.stringify(lista));

  alert("Produto salvo!");
  location.reload();
}