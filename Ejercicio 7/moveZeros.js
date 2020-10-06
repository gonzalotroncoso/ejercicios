function moveZeros (arreglo){
	nuevoArreglo= arreglo
	for (var i = 0; i <= arreglo.length; i++) {
		if(arreglo[i]===0){
			nuevoArreglo.splice(i,1);
			nuevoArreglo.push(0)
		}
	}
	console.log(nuevoArreglo)
}

arreglo = [false,1,0,1,2,0,1,3,"a"];
moveZeros(arreglo)