 /* Priscila Lopes de Oliveira */ 

function maior(n1,n2,n3){
    return Math.max(n1,n2,n3);
}

var num1 ;
var num2 ;
var num3 ;

num1 = prompt("Insira o número 1 ");
num2 = prompt("Insira o número 2 ");
num3 = prompt("Insira o número 3 ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

alert("O maior número é: "+maior(num1,num2,num3));