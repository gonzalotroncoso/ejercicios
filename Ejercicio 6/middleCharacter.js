function middleCharacter(s){	
		par = s.length%2;
		if(par===0){

		p = s.length/2				
		console.log("Longitud de la palabra: "+ s.length)		
		console.log(s[p-1]+s[p]);	
		}else{
		console.log("Longitud de la palabra: "+ s.length)		
		p = Math.floor(s.length/2)			
		console.log(s[p]);	
		}	
}

middleCharacter("plataforma5")

