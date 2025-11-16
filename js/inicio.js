document.addEventListener("DOMContentLoaded", function () {
    const listaprod = document.getElementById("listaprod").innerHTML;
      const newListItem = listaprod.createElement('li');

        // 2. Set the text content of the new <li>
        newListItem.textContent = "hiii";

        // 3. Append the new <li> to the <ul>
        listaprod.appendChild(newListItem);


})
const produtos =
    [    
    { nome: "produto1", valor: 500 },
    { nome: "pro", valor: 5001 },
    { nome: "prod", valor: 5200 },
    { nome: "produ", valor: 5030 },
    { nome: "produt", valor: 5040 },
    { nome: "produto", valor: 5500 }
    ]