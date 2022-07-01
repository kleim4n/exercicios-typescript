interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: "Coelho",
    tipo: "terrestre"
}

const felino: IFelino = {
    nome: "gato",
    tipo: "terrestre",
    visaoNoturna: true
}
console.log(felino.nome)