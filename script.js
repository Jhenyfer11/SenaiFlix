//dados fixos
// aq temos uma lista de filmes e series com
//  titulo
// imagem
//  genero {array de string}

const dados = {
    filmes: [
        { titulo: "É Assim Que Acaba", Imagem: "../assets/imgs/eassimqueacaba.webp", genero: ["Drama ", "Romance"] },
        { titulo: "Bad Boys: Para Sempre", Imagem: "../assets/imgs/badboys.webp", genero: ["Ação ", "Comédia"] },
        { titulo: "Um Lugar Silencioso", Imagem: "../assets/imgs/umlugarsilencioso.webp", genero: ["Ficção ", "Terror ", "Mistério"] },
        { titulo: "Venom", Imagem: "../assets/imgs/venom.webp", genero: ["Ação ", "Ficção"] },
        { titulo: "Deadpool & Wolverine", Imagem: "../assets/imgs/deadpoolewolverine.webp", genero: ["Ação ", "Comédia ", "Ficção"] },
        { titulo: "Divertida mente 2", Imagem: "../assets/imgs/divertidamente.webp", genero: ["Ficção ", "Animação ", "Aventura", "Comédia"] },
    ],
    series: [
        { titulo: "Guerra dos Tronos", Imagem: "../assets/imgs/gameofthrones.webp", genero: ["Ficção ", "Aventura ", "Ação", "Fantasia"] },
        { titulo: "Sobrenatural", Imagem: "../assets/imgs/sobrenatural.webp", genero: ["Ficção ", "Terror", "Mistério", "Drama", "Thriller"] },
        { titulo: "Greys Anatomy", Imagem: "../assets/imgs/greysanatomy.webp", genero: ["Drama ", "Romance"] },
        { titulo: "Prision Break", Imagem: "../assets/imgs/prisionbreak.webp", genero: ["Ação ", "Drama", "Mistério", "Crime"] },
        { titulo: "o Senhor dos Aneis", Imagem: "../assets/imgs/osenhordosaneis.webp", genero: ["Ficção", "Aventura", "Sci-Fi & Fantasy"] },
        { titulo: "O Segredo do Rio", Imagem: "../assets/imgs/osegredodorio.webp", genero: ["Drama ", "Mistério"] },
    ],
}

//seletores do DOM

const filmesCards = document.querySelectorAll("#filmes-container a");
const seriesCard = document.querySelectorAll("#series-container a");

//selecionar o filtro de genero e o botão limpar filtro

const selectGenero = document.getElementById("genero");
const btnLimpar = document.getElementById("#limpar-filtro")

//Renderização dos Cards
document.addEventListener("DOMContentLoaded", function () {
    //cards list dos <a> do HTML cada card
    //lista array de dados filmes e series
    //filtro genero selecionado ex. Ação ou todos

    function renderizar(Cards, lista, filtro = "todos") {
        Cards.forEach(Cards, index => {
            const item = lista[index] //pega o item na mesma posição do array
            const genero = item && item.genero;


            //verifica se o item corresponde ao filtro escolhido 
            const correspondeFiltro = filtro === "todos" || (genero && genero.includes(filtro))

            if (item && correspondeFiltro) {
                //Se passar no filtro  --> mostra o card e aplica a imagem de fundo
                Cards.style.display = "block";
                Cards.style.backgroundImage = `ur(${item.image})`;
                Cards.style.backgroundSize = "cover";
                Cards.style.backgroundPosition = "center"
            } else {
                // /esconde o card
                Cards.style.display = "none";
            }
        });
    }
    //Função aplicarFiltro()
    //Atualiza a exibição de filmes e series com base no genero selecionado
    function aplicarFiltro(generoSelecionado) {

        renderizar(filmesCards, dados.filmes, generoSelecionado);
        renderizar(seriesCard, dados.series, generoSelecionado);
    }

    //quando o usuario troca o genero no <select>
    if (selectGenero) {
        selectGenero.addEventListener("change", function () {
            aplicarFiltro(this.value); //pega o valor selecionado
        })
    }


    //Quando clica o botão limpar
    if (btnLimpar) {
        btnLimpar.addEventListener("click", function () {
            selectGenero.selectedIndex = 0; //volta para todos
            aplicarFiltro("todos") // mostrar todos novamente
        })
    }
    //exibe todos os itens logo no inicio 
    aplicarFiltro("todos");

});