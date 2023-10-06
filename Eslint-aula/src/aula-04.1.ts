interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  Sexo: any;// O "any" significa que não tem um tipo de dado especifico EX(booleano, int, string) então pode ser qualque um.
  cidade: string;
  CPF: Number;
  pessoas: Pessoas[];// vai pegar todas as caracteristicas do arrey "Pessoas".
}


const usuario: Usuarios = {
  Sexo: 22,
  cidade: "hgjhgj",
  CPF: 465464646464,
  pessoas: [// um arrey pode ser declarado muitas vezes.
    {
      idade: 49,
      nome: 'jhgfggkg',
    },{
      idade: 78,
      nome: 'adfafdsg',
    },
  ]
}

console.log(usuario.pessoas.length);
console.log(usuario);