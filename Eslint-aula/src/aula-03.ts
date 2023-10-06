interface Pessoa {
  idade: number;
  nome: string;
  isMaiorIdade: boolean;
}

const pessoa: Pessoa = {// quando declara a class "Pessoa" tem que levar todas as caracteristicas dela como abaixo:
  idade: 46,
  nome: "hhghihi",
  isMaiorIdade: true,
}

console.table(pessoa)