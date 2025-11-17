document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // Busca  o produto
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        alert("Produto não encontrado!");
        return;
    }

   //aqui ele vai puxar as informações de texto
    document.getElementById("produto-nome").textContent = produto.nome;
    document.getElementById("produto-preco").textContent = "R$ " + produto.preco.toFixed(2);
    document.getElementById("produto-descricao").textContent = produto.descricao;

    const imgPrincipal = document.getElementById("imagem-principal");
    imgPrincipal.src = produto.img;

    // aqui ele puxa as imagens auxiliares caso tenha
    const auxContainer = document.getElementById("imagens-aux");

    if (produto.imgAux && produto.imgAux.length > 0) {
        produto.imgAux.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.classList.add("miniatura");

            img.addEventListener("click", () => {
                imgPrincipal.src = src;
            });

            auxContainer.appendChild(img);
        });
    }
});
