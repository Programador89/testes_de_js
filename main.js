import Livros from './Livros.js';

// Alterando a cor do texto e fundo 
document.getElementById('darkMode').addEventListener('click', () => {
    document.querySelectorAll('*').forEach(element => {
        element.style.color = 'white';
        element.style.backgroundColor = 'black';
    });
});

// Criando uma funcao construtora

// const pessoa = function Pessoa(primeiro_nome, ultimo_nome, idade, CPF, UF) {
//     this.primeiro_nome = primeiro_nome;
//     this.ultimo_nome = ultimo_nome;
//     this.idade = idade;
//     this.cpf = CPF;
//     this.uf = UF;
// }

// pessoa.primeiro_nome = "Rafael";

// console.log(pessoa.primeiro_nome);

// const animal = function Animal(nome, idade, raca) {
//     this.nome = nome;
//     this.idade = idade;
//     this.raca = raca;
// }

// // Criando um objeto dentro de uma arrow function

// const incluirCarreta = (modelo, montadora, valor) => ({
//     modelo: modelo,
//     montadora: montadora,
//     valor: valor
// });

// const carreta = incluirCarreta("MB 2651", "Mercedes-Benz", 590000.00);

// console.log(`Carreta adicionada: ${carreta.modelo}.`);
// console.log(`Montadora: ${carreta.montadora}.`);
// console.log(`Valor: ${carreta.valor}`);

// const hello = val => ({
//     resposta: `Ola ${val}!`
// });

// const apresenta = hello("Universo");
// console.log(apresenta.resposta);


// class Erp {
//     constructor(nome, sistemOp, valor) {
//         this.nome = nome;
//         this.so = sistemOp;
//         this.valor = valor;
//     }

//     apresentar() {
//         return `Este é o ERP escolhido:\nERP:${this.nome}\nSistema operacional: ${this.so}\nValor: R$${this.valor.toFixed(2)}`;
//     }
// }

// // Criando objetos

// const myErp = new Erp("Protheus", "Windows, Linux e MAC OS", 250000.00);
// console.log(myErp.apresentar());


// Criando objeto Livro 

const livroJS = new Livros("JavaScript & JQuery", "Jon Duckett", "Academico", "Alta Books", 60.00);
console.log(livroJS.apresentacao());



