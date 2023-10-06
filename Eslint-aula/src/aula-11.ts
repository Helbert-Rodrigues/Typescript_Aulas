class Escola {//a variavel nome ela é publica por causa no ("public") mas tbm pode ser privada ("private").
  public readonly nome: string;//"readonly": significa que essa variavel não é mais modificavel.
  private readonly alunos: Aluno[];// para fazer um arrey de alunos.
 
  constructor(nome: string){
    this.nome = nome;//quando você quer acessar uma função fora da classe deve colocar (Ex => this.nome = nome;).
    this.alunos = []; 
  }

  public adicionarAluno(aluno: Aluno){//para adicionar alunos na quele ponto de memoria que já existe.
    this.alunos.push(aluno);
  }
}

class Aluno {
  constructor(public readonly nome: string){}
}

const escola = new Escola("NOVA ESCOLA");
escola.adicionarAluno(new Aluno("Joao"));
escola.adicionarAluno(new Aluno("Maria"));
escola.adicionarAluno(new Aluno("José"));

console.log("escola", escola)
