interface ObjetoQualquer {
  nome: () => string;
}

const nomeTeste = (): string => {
  return "Helbert";
};

const teste: ObjetoQualquer = {
  nome: nomeTeste,
}