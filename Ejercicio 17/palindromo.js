function palindromo (palabra){
	bandera = true
	j = palabra.length -1
	for (var i = 0; i <= palabra.length -1; i++) {
		if(palabra[i]!== palabra[j]){
			bandera = false			
		}
		j--
	}
	if(bandera){
		console.log(palabra +" "+bandera)
	}else{
		console.log(palabra +" "+bandera)
	}
}

palindromo("ana")