// function showList(empresa, ...clientes) {
//     console.log(empresa);
//     console.log(clientes);
// }

// showList("Origamid", "Luiz", "Maria", "João");

const numeros = [1, 2, 4, 13, 23, 456, 3];

console.log(Math.max(...numeros));

// const items = Array.from(document.querySelectorAll("li"))

// const items = document.querySelectorAll("li")
// items.forEach((item) => console.log(item));
// items.map((item) => console.log(item));
// [...items].map((item) => console.log(item));

// const carro = {cor: "Azul", portas: 4, ano: 2024};
// const cloneCarro = {...carro, turbo: true};  

class Transporte {
    constructor(){
        this.terrestre = true;
    }
}

class Carro extends Transporte {
    constructor(cor, portas){
        super();
        this.cor = cor;
        this.portas = portas;
    }
}

const carro = new Carro("Azul", 4);
const cloneCarro = {...carro, turbo: true}

console.log(carro);
console.log(cloneCarro);
