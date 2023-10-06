interface Estado {
  nome: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereco {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;// Quando colocamos um ponto de Interrogação (?) de você fala pro seu codigo que 'pode' ou 'não' existir essa variavel.
}

const endereco: Endereco = {// na variavel cidade houve duas classes dentro da outra.
  rua: 'alameda',
  bairro: 'banderinha',
  cidade: {
    nome: 'Betim',
    estado: {
      nome: 'MG',
    },
  },
  complemento: 'cs esquina',
}

console.log(endereco);