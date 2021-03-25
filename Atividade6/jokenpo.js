var p1 = prompt("Escolha entre pedra (1), papel  (2), tesoura  (3)");
var bot = Math.random()*10/3;

if(p1 == 1)
	if(bot <= 1)	
		prompt("Empate");	
	else if(bot <= 2)	
		prompt("Computador ganhou");	
	else	
		prompt("Voce ganhou");	

else if(p1 == 2)
	if(bot <= 1)
		prompt("Voce ganhou");	
	else if(bot <= 2)
		prompt("Empate");	
	else
		prompt("Computador ganhou");
	

else if(p1 == 3)
	if(bot <= 1)	
		prompt("Computador ganhou");	
	else if(bot <= 2)	
		prompt("Voce ganhou");	
	else	
		prompt("Empate");