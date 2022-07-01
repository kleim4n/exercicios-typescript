enum Cargos {
    Caixa,
    Gerente,
    Repositor
}

// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'João',
    cargo: Cargos.Repositor
};

// Resposta 2
const funcionario2: { codigo: number, nome: string, cargo?: Cargos } = {
    codigo: 10,
    nome: 'joao',
    cargo: Cargos.Caixa
}

// Respostas 3 e 4
interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string,
    cargo?: Cargos
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';
funcionarioObj.cargo = Cargos.Caixa;

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João',
    cargo: Cargos.Gerente
}