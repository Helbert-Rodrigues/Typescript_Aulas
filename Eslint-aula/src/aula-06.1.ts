interface ObjetoQualquer {
  funcao1: (param1: number, param2?: number) => number;// podemos colocar parametros dentro das funcoes e seu valor EX(number).
}

const funcaoTeste1 = (param1: number, param2?: number): number => {//O "param2?" é opcional.
  if (!param2) {//sé o "param2" existir vai retornar o "param1" se nao vai retornar "param1 + param2".
    return param1;
  }
  
  return param1 + param2;
};


const objetoQualquer : ObjetoQualquer = {
  funcao1: funcaoTeste1,
};

console.log(objetoQualquer.funcao1(2))