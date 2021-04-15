alert("Criando objetos"
	+ "\n\nAtividade 8.");

//Usando Construtor
function Aluno(nome, ra, curso){
	this.nome = nome;
	this.ra = ra;
	this.curso = curso;
}

var aluno = new Aluno("Priscila Lopes de Oliveira",
	"0030481721033",
	"Analise de Sistemas");

alert("Testando com construtor: "
	+ "\nNome: " + aluno.nome
	+ "\nRA: " + aluno.ra
	+ "\nCurso: " + aluno.curso);

//Sem Construtor
var aluno2 = {};
aluno2.nome = "Isabella Lauren";
aluno2.ra = "0000000000015";
aluno2.curso = "Polimeros";

alert("Testando sem construtor: "
	+ "\nNome: " + aluno2.nome
	+ "\nRA: " + aluno2.ra
	+ "\nCurso: " + aluno2.curso);

//Forma Literal
var aluno3 = {
	nome: "Vanderleia Lermes",
	ra: "0000000000040",
	curso: "Projetos Mecânicos"
};

alert("Testando forma literal: "
	+ "\nNome: " + aluno3.nome
	+ "\nRA: " + aluno3.ra
	+ "\nCurso: " + aluno3.curso);