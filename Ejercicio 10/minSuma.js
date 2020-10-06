function minSum(suma){
	minimo = Math.min.apply(null, suma)	
	for (var i = 0; i<= suma.length; i++) {
		if (suma[i]===minimo){
			suma.splice(i,1);
		}
	}
	minimo2 = Math.min.apply(null, suma)	
	min = minimo+minimo2
	console.log("La suma de los numeros con menor valor es "+ min);
}

minSum(suma=[7, 6, 5, 4, 3, 2, 1])