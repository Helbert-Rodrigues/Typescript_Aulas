
interface Carro {
  idade: number | string;//pode ser "number ou string". 
  nome: string;
};

interface Bicicleta {
  rodas: number;
};

const funcao = (validação: boolean): Carro | Bicicleta => {//vai pegar as interfaces de "carro" e "Bicicletas".
if(validação){//colocamos os valores dentro de sua devida variavel das classes.
  return {
    idade: 32,
    nome: "gol",
  }};
  return {
    rodas: 4,
  }
};

const resultado = funcao(true);//se for "true" voltra o primeiro "return" se nao (false) o outro.

if("nome" in resultado){
  if(typeof resultado.nome === "string"){// está falando sé tipo for string ...
  console.log(resultado.nome)
}}

if("rodas" in resultado){
  console.log(resultado.rodas)
}

console.log(resultado);