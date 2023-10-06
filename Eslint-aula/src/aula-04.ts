interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  Sexo: any;// O "any" significa que não tem um tipo de dado especifico EX(booleano, int, string) então pode ser qualque um.
  cidade: string;
  CPF: Number;
  pessoa: Pessoas;// vai pegar todas as caracteristicas da class "Pessoas".
}


const usuarios: Usuarios = {
  Sexo: 22,
  cidade: "hgjhgj",
  CPF: 465464646464,
  pessoa: {// Para colocar os valores Primeiro temos de abrir uma função {} e colocar node e valor das caracteristicas da class "Pessoa".
    idade: 49,
    nome: 'jhgfggkg',
  },
}

console.log(usuarios);
