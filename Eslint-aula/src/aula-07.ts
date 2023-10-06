const funcaoCalback = (valor: number): void => {// quando coloca pra devolver "void" ela n vai me dar nem um retorno.
console.log("DEU BOM " + valor);
};

const funcaoTeste = (
  valor1: number,
   valor2: number,
    ccallback: (n: number) => void)://colocamos função de "callback" declaramos o valor "number".
     string => {
  if(valor1 > valor2) {
    ccallback(valor1);//chamamos a função de "callback" e atribuimos um valor nela.
  }//chamamos a função de ccallback mas pode ser qualquer nome.
  return "";
};

funcaoTeste(54, 32, funcaoCalback);// A "funcaoTeste" espera três argumentos (1:comValorNumber) (2:comValorNumber) (3:aFuncaoCallback).
//OU.
funcaoTeste(43, 32, (X: number) => {
  console.log("outra funcao " + X);
});