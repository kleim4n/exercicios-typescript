
enum Trabalho {
    Atriz,
    Padeiro
}

enum IdentificacaoGenero {
    Feminino,
    Masculino,
    Outros
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho,
    sexo?: IdentificacaoGenero
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz,
    sexo: IdentificacaoGenero.Feminino
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro,
    sexo: IdentificacaoGenero.Masculino
};

let pessoa3: Humano = {
    nome: 'ariel',
    idade: 32,
    profissao: Trabalho.Atriz,
    sexo: IdentificacaoGenero.Outros
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}