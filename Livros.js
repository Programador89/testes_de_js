class Livros {
    constructor(nome, autor, categoria, editora, custo) {
        this.nome = nome;
        this.autor = autor;
        this.categoria = categoria;
        this.editora = editora;
        this.custo = custo;
    }

    categoria() {
        switch (this.categoria) {
            case value: "Terror"
                console.log("Genero: Terror");
                break;
            case value: "Romance"
                console.log("Genero: Romance");
                break;
            case value: "Drama"
                console.log("Genero: Drama");
                break;
            case value: "Estudo"
                console.log("Genero: Academico");
            default:
                console.log(`Genero: ${this.categoria}`);
                break;
        }
    }

    // O preco de venda sera o valor de custo + 30% do valor do custo
    precoVenda() {
        const acrescimo = this.custo * (30/100);
        const precoFinal = this.custo + acrescimo
        return `Preço sugerido: R$${precoFinal}`;
    }

    apresentacao(){
        return `Livro: ${this.nome}\nAutor: ${this.autor}\nCategoria: ${categoria(this.categoria)}\nEditora: ${editora}\nPreço: ${precoVenda(this.custo)}`;
    }
}


export default Livros;