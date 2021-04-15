alert("Utilizando Herança"
	+ "\n\nAtividade 9");

/// 1

alert("Parte 1 da atividade: Calcular area de retângulo.");

function calcularArea(x, y){
	return x * y;
}

function Retangulo(x, y){
	this.x = x;
	this.y = y;
	this.area = calcularArea(this.x, this.y);
}

var base = parseFloat(prompt("Insira o valor da base do retângulo: "));
var altura = parseFloat(prompt("Insira o valor da altura do retângulo: "));

var objRetangulo = new Retangulo(base, altura);

alert("O valor da área do retângulo é: " + objRetangulo.area.toFixed(2));

/// 2

alert("Parte 2 da atividade: Criar conta poupança e conta corrente");

function Conta(){
	var nomeCorrentista;
	this.getNomeCorrentista = function(){
		return nomeCorrentista;
	};
	this.setNomeCorrentista = function(valor){
		nomeCorrentista = valor;
	};
	var banco;
	this.getBanco = function(){
		return banco;
	};
	this.setBanco = function(valor){
		banco = valor;
	};
	var numeroConta;
	this.getNumeroConta = function(){
		return numeroConta;
	};
	this.setNumeroConta = function(valor){
		numeroConta = valor;
	};
	var saldo;
	this.getSaldo = function(){
		return saldo;
	};
	this.setSaldo = function(valor){
		saldo = valor;
	};
}

function ContaCorrente(){
	var saldoEspecial;
	this.getSaldoEspecial = function(){
		return saldoEspecial;
	};
	this.setSaldoEspecial = function(valor){
		saldoEspecial = valor;
	};
}

function ContaPoupanca(){
	var juros;
	this.getJuros = function(){
		return juros;
	};
	this.setJuros = function(valor){
		juros = valor;
	};
	var dataVencimento;
	this.getDataVencimento = function(){
		return dataVencimento;
	};
	this.setDataVencimentio = function(valor){
		dataVencimento = valor;
	};
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

var contaPoupanca = new ContaPoupanca();

var titular = prompt("Dados Conta Poupança:"
	+ "\n\nNome do Titular:");
contaPoupanca.setNomeCorrentista(titular);

var banco = prompt("Banco:");
contaPoupanca.setBanco(banco);

var numeroConta = prompt("Número da Conta Poupança: ");
contaPoupanca.setNumeroConta(numeroConta);

var saldoInicial = prompt("Saldo Inicial da Conta Poupança: ");
contaPoupanca.setSaldo(saldoInicial);

var juros = prompt("Taxa de Juros da Conta Poupança: ");
contaPoupanca.setJuros(juros);

var dataVencimento = prompt("Data de Vencimento da Conta Poupança: ");
contaPoupanca.setDataVencimentio(dataVencimento);

alert("- Sua Nova Conta Poupança -"
	+ "\n\nDados da Conta Poupança:"
	+ "\nTitular: " + contaPoupanca.getNomeCorrentista()
	+ "\nBanco: " + contaPoupanca.getBanco()
	+ "\nNúmero da Conta: " + contaPoupanca.getNumeroConta()
	+ "\nSaldo Inicial: " + contaPoupanca.getSaldo()
	+ "\nJuros: " + contaPoupanca.getJuros()
	+ "\nVálido até: " + contaPoupanca.getDataVencimento());

var contaCorrente = new ContaCorrente();

var titular = prompt("Dados Conta Corrente:"
	+ "\n\nNome do Titular:");
contaCorrente.setNomeCorrentista(titular);

var banco = prompt("Banco:");
contaCorrente.setBanco(banco);

var numeroConta = prompt("Número da Conta Corrente:");
contaCorrente.setNumeroConta(numeroConta);

var saldoInicial = prompt("Saldo Inicial da Conta:");
contaCorrente.setSaldo(saldoInicial);

var saldoEspecial = prompt("Saldo Especial: ");
contaCorrente.setSaldoEspecial(saldoEspecial);

alert("- Sua Nova Conta Conta Corrente -"
	+ "\n\nDados da Conta:"
	+ "\nTitular: " + contaCorrente.getNomeCorrentista()
	+ "\nBanco: " + contaCorrente.getBanco()
	+ "\nNúmero da Conta: " + contaCorrente.getNumeroConta()
	+ "\nSaldo Inicial: " + contaCorrente.getSaldo()
	+ "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());
