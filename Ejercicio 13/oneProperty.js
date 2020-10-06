function oneProperty(arreglo, nombre){	
	nuevoArreglo = [];	
	for (var i = 0; i <=arreglo.length-1; i++){
		objeto = arreglo[i]
		delete objeto[nombre]
		nuevoArreglo.push(objeto)		
		}
		console.log(nuevoArreglo)
	
}

prueba = [ { nombre: "lucas", edad: 20 }, { nombre: "santi", edad: 22 } ]

oneProperty(prueba,"nombre")