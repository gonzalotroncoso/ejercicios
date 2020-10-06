function loopDePares(x){
	for (var i = 0; i <= 100; i++) {
		let s = x+i
		let r = s%2
		if(r===0){
			console.log("Numero de iteracion: "+i+" |La suma de la iteracion es "+s+" y es par");
		}else{
			console.log("Numero de iteracion: "+i+" |La suma de la iteracion es "+s+" y no es par");
		}
		
	}
}

loopDePares(14);