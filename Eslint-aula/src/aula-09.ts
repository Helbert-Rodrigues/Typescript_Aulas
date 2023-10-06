let test;

if (test === null) {
  console.log("Teste2",test);//sé não entrar nessa função significa que a variavel "test" não é nula.
}else {
  console.log("não é nulo");//null não é undefine.
}

console.log("Teste",test)

//********************************************************/

interface Andar {
  passos?: number;
}

const andar: Andar = {
  
};

console.log("andar", andar);